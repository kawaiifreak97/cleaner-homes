export const state = () => ({
  title: 'Services',
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
  selectedSubCategory (state) {
    return (serviceId) => {
      console.log('sub ' + serviceId)
      let selected = {}

      for (let index = 0; index < state.serviceCategories.length; index++) {
        const category = state.serviceCategories[index];

        for (let i = 0; i < category.services.length; i++) {
          const element = category.services[i];
          if (element.name == serviceId) {  
            selected = element.content
          }
        }
      }
      console.log('selectedSub ' + selected)
      return selected
    }
  },
  selectedService: (state) => {
    // return (cat) => {
    //   console.log('cat ' + cat)
    //   let selected = state.selectedService.services.find( serviceCategory => { return serviceCategory.name == cat})
    //   console.log('selected ' + selected.name)
    //   return selected
    // }
    let selectedService = state.selectedService.services.find( service => { return service.selected})
    console.log('selectedService ' + selectedService)
 
    return selectedService
  }

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

    state.selectedService.services = domestic;

  },
  selectCategory(state,payload){
    const prevSelectedCategory = state.serviceCategories.find( element => { return element.selected })

    if (prevSelectedCategory) {
      prevSelectedCategory.selected = false;
    }
    console.log('payload '+ payload.name)
    const justSelected = state.serviceCategories.find( element => { return element.name == payload.name })  
    state.selectedService = justSelected;

    if (justSelected) {
      if (payload.active) {
        justSelected.selected = true;
        state.activeCategory = true;
        state.selectedService= justSelected;
        console.log('just selected ' + state.selectedService )

      }else{
        justSelected.selected = false;
        state.activeCategory = false;
      }
    }
    console.log('just selected ' + state.selectedService  )

  },
  selectSubCategory(state, payload){

    const prevSelectedCategory = state.serviceCategories.find( element => { return element.name == payload.category})
    let prevSelectedSub = {}

      if (prevSelectedCategory) {
        prevSelectedSub = prevSelectedCategory.services.find( element => { return element.selected })
        if (prevSelectedSub) {
          prevSelectedSub.selected = false;
        }
      } 

    const justSelected = prevSelectedCategory.services.find( element => { return element.name == payload.subCategory}) 

    if (justSelected) {
      if (payload.active) {
        justSelected.selected = false;
        state.activeSubCategory = false;
      }else{
        justSelected.selected = true;
        state.activeSubCategory = true;
      }
    }

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