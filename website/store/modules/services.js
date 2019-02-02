export const state = () => ({
  title: 'Services',
  step: 1,
  select: false,
  activeSubCategory: false,
  activeCategory: false,
  selectedService:{
    name: 'pls',
    services:{
      name: 'working'
    }
  },
  serviceCategories:[
    {
      name: 'Commercial',
      link: 'commercial',
      selected: false,
      services:[]
    },
    {
      name: 'Domestic',
      link: '',
      selected: false,
      services:[
        {
          name: 'wfindows',
          link: 'windowsq'
        },
        {
          name: 'wifnd',
          link: 'wqind'
        }
      ]
    },
    {
      name: 'Farm spraying',
      link: 'farm-spraying',
      selected: false,
      services:[
        {
          name: 'gorse',
          link: 'gorde'
        }
      ]
    },
  ],
})

export const getters = {
  selectedCategory: (state) => {
    let defaultCategory = {
      services:[
        {name: ''}
      ]
    }

    let selected = state.serviceCategories.find( serviceCategory => { return serviceCategory.selected})

    if (selected) {
      defaultCategory = selected
    } else {
      defaultCategory.services[0].name = 'please select category'
    }
    return defaultCategory
  },
  selectedSubCategory: (state) => {
      let selected = {}

      for (let index = 0; index < state.serviceCategories.length; index++) {
        const category = state.serviceCategories[index];

        for (let i = 0; i < category.services.length; i++) {
          const element = category.services[i];
          console.log('element ' + element.name + element.selected)
          if (element.selected) {  
            selected = element.content
            console.log('selectedSub ' + element.name + element.selected)
          }
        }
      }
      return selected
  },

}

export const mutations = {
  servicesData(state, data){
    const serviceCategories = data.filter( blok => { return blok.content.component == 'service' })
    const farmspraying = serviceCategories.filter( blok => { return blok.full_slug.includes('farm-spraying')})
    const domestic = serviceCategories.filter( blok => { return blok.full_slug.includes('domestic')})
    const commercial = serviceCategories.filter( blok => { return blok.full_slug.includes('commercial')})



    state.serviceCategories[0].services = commercial;
    state.serviceCategories[1].services = domestic;
    state.serviceCategories[2].services = farmspraying;

    console.log('services data set' + state.serviceCategories[0].name + state.serviceCategories[0].services[0].name )

  },
  selectCategory(state,payload){
    const justSelected = state.serviceCategories.find( element => { return element.name == payload.name })  
    console.log('payload ' + payload.active + payload.name)
    console.log('justSelec ' + justSelected.name )

    if (payload.active) {
      justSelected.selected = true;
      state.activeCategory = true;
    } else {
      justSelected.selected = false;
      state.activeCategory = false;
    }

  },
  selectSubCategory(state, payload){

    console.log('selected sub')
    const prevSelectedCategory = state.serviceCategories.find( element => { return element.name == payload.category})
    let prevSelectedSub = {}

      if (prevSelectedCategory) {
        prevSelectedSub = prevSelectedCategory.services.find( element => { return element.selected })
        if (prevSelectedSub) {
          prevSelectedSub.selected = false;
        }
      } else{
        console.log('not found')
      }

    const justSelected = prevSelectedCategory.services.find( element => { return element.name == payload.subCategory}) 

    if (justSelected) {
      if (payload.active) {
        justSelected.selected = true;
        state.activeSubCategory = true;
      }else{
        justSelected.selected = false;
        state.activeSubCategory = false;
      }
    }
    console.log(justSelected.name + justSelected.active)

    if (payload.pushRoute) {
      this.$router.push("/" + payload.subCategory);
    }

  },
  
}

export const actions = {
  //payload has to be 2nd argument?
  selectCategory({commit},payload){
    commit('selectCategory', {
      name: payload.name,
      active: payload.active
    })
  },
}


export default {
  state,
  getters,
  mutations,
  actions
};