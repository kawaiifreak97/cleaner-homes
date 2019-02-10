export const state = () => ({
  title: 'Services',
  step: 1,
  select: false,
  activeSubCategory: false,
  activeCategory: false,
  selectedCat: {},
  selectedSubCat: {},
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
        {
          name: '',
          content: {
            image: 'null',
            name: 'null'
          }

        }
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
      let selected = {
        name: 'hi'
      }
      console.log('hello???')

      for (let index = 0; index < state.serviceCategories.length; index++) {
        let category = state.serviceCategories[index];
        console.log('hi')

        for (let i = 0; i < category.services.length; i++) {
          let element = category.services[i];
          console.log('element ' + element.name + element.selected)
          if (element.selected) {  
            selected = element.content
            console.log('selectedSub ' + element.name + element.selected)
          }
        }
      }
      return selected
  },
  selectedService (state) {
      return (service) => {
        let cat = state.serviceCategories.find( serviceCategory => { return serviceCategory.selected})
        let selected = cat.services.find( selservice => { return selservice.name = service})
        return selected
      }
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

    console.log('services data set' + state.serviceCategories[0].name + state.serviceCategories[0].services[0].name )

  },
  selectCategory(state,payload){

    if (payload.prev) {
      payload.prev.selected = false; 
    }

    let justSelected = state.serviceCategories.find( element => { return element.name == payload.name })  
    console.log('payload ' + payload.active + payload.name)
    console.log('justSelect cat ' + justSelected.name )

    if (payload.active) {
      justSelected.selected = true;
      state.activeCategory = true;
    } else {
      justSelected.selected = false;
      state.activeCategory = false;
    }

  },
  selectSubCategory(state, payload){

    if (payload.prev) {
      payload.prev.selected = false
    }

    console.log('payload cat ' + payload.category.name)

    let justSelected = payload.category.services.find( element => { 
        console.log('subcat ' + element.name)
        console.log('the subcat = ' + payload.subCategory)
        return element.name == payload.subCategory}) 
    

    if (justSelected) {
      console.log('hi cat')
      if (payload.active) {
        justSelected.selected = true;
        state.activeSubCategory = true;
        console.log('hi cat active')
      }else{
        justSelected.selected = false;
        state.activeSubCategory = false;
      }
    }
    console.log('working? ' + justSelected.name + payload.active)

    if (payload.pushRoute) {
      this.$router.push("/" + payload.subCategory);
    }

  },
  
}

export const actions = {
  selectCategory({getters, commit},payload){
    const cat = getters.selectedCategory
    commit('selectCategory', {
      name: payload.name,
      active: payload.active,
      prev: cat
    })
  },
  selectSubCategory({getters, commit}, payload){
    const subCat = getters.selectedSubCategory
    const cat = getters.selectedCategory;
    console.log('this sel subcat payload action ' + payload.subCategory + payload.active)
    commit('selectSubCategory', {
      subCategory: payload.subCategory,
      category: cat,
      active: payload.active,
      pushRoute: payload.pushRoute,
      prev: subCat
    })
  },
}


export default {
  state,
  getters,
  mutations,
  actions
};