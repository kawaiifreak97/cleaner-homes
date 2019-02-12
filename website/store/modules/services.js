export const state = () => ({
  title: 'Services',
  step: 3,
  select: false,
  selectedService:{},
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
    let defaultCategory = null

    let selected = state.serviceCategories.find( serviceCategory => { return serviceCategory.selected})

    if (selected) {
      defaultCategory = selected
    } else {
    }
    return defaultCategory
  },
  selectedSubCategory: (state) => {

      let selected = null;

      for (let index = 0; index < state.serviceCategories.length; index++) {
        const category = state.serviceCategories[index];

        for (let i = 0; i < category.services.length; i++) {
          const element = category.services[i];
          console.log(element.name)
          console.log(element)
          if (element.content.selected) {  
            selected = element.content
            console.log('selectedSub ' + element.name + element.selected)
          }
        }
      }
      return selected
  },
  selectedService (state) {
      return (service) => {

        let selected = {};

        for (let index = 0; index < state.serviceCategories.length; index++) {
          const category = state.serviceCategories[index];

          for (let sub = 0; sub < category.services.length; sub++) {
            const element = category.services[sub];

            if (service == element.name ) {  
              selected = element.content
            }
          }
        }
        state.selectedService = selected
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

    // let selected = null;

    //   for (let index = 0; index < state.serviceCategories.length; index++) {
    //     const category = state.serviceCategories[index];

    //     for (let i = 0; i < category.services.length; i++) {
    //       const element = category.services[i];
    //       console.log(element.name)
    //       console.log(element)
    //       if (element.content.selected) {  
    //         selected = element.content
    //         console.log('selectedSub ' + element.name + element.selected)
    //       }
    //     }
    //   }

    let justSelected = payload.category.services.find( element => { return element.name == payload.subCategory}) 

    if (justSelected) {
      if (payload.active) {
        justSelected.content.selected = true;
        state.selectedService = justSelected
      }else{
        justSelected.content.selected = false;
      }
    }

    if (payload.pushRoute) {
      this.$router.push("/" + payload.subCategory);
    }

  },
  selectService(state,payload){
    if (payload.pushRoute) {
      this.$router.push("/" + payload.service);
    } 
  }
  
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