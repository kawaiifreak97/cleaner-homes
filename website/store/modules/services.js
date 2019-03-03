export const state = () => ({
  title: 'Services',
  step: 4,
  select: false,
  selectedService:{},
  fromServicesSection: false,
  activeCat: false,
  activeSubCat: false,
  serviceCategories:[
    {
      name: 'Commercial',
      link: 'commercial',
      selected: false,
      active: false,
      services:[]
    },
    {
      name: 'Domestic',
      link: '',
      selected: false,
      active: false,
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
      active: false,
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
    } else{
      defaultCategory = 
        { 
          name: 'no category selected',
          services:[
            {
              name: 'please select category',
              selected: false,
            }
          ] 
        }
    }
    return defaultCategory
  },
  selectedSubCategory: (state) => {

    let selected = null;

    for (let index = 0; index < state.serviceCategories.length; index++) {
      const category = state.serviceCategories[index];

      for (let i = 0; i < category.services.length; i++) {
        const element = category.services[i];

        if (element.content.selected) {  
          selected = element.content
          // console.log('selectedSub ' + element.name + element.selected)
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

  },
  selectCategory(state,payload){

    let cat = state.serviceCategories.find( element => { return element.name == payload.name })  

    if (payload.prev) {
      if(payload.prev.name == cat.name){
      }else{
        payload.prev.selected = false; 
        payload.prev.active = false;
      }
    }

    cat.selected = !cat.selected;

    if (cat.selected) {
      cat.active = true;
      state.activeCat = true;
    }else{
      cat.active = false;
      state.activeCat = false;
    }

  },
  selectSubCategory(state, payload){

    let sub = payload.category.services.find( element => { return element.name == payload.subCategory}) 

    if (payload.prev) {
      if(payload.prev.name == sub.content.name){
        console.log('already selected')
      }else{
        payload.prev.selected = false; 
        payload.prev.active = false;
      }
    }

    sub.content.selected = !sub.content.selected;

    if (sub.content.selected) {
      sub.content.active = true;
      state.activeSubCat = true;
      state.selectedService = sub.content;
    }else{
      sub.content.active = false;
      state.activeSubCat = false;
    }

    state.fromServicesSection = false;

  },
  resetCat(state){
    state.activeCat = false;
    state.serviceCategories.forEach(cat => {
      cat.selected = false;
      cat.active = false;
    });
  },
  resetSubCat(state){
    state.activeSubCat = false;
    for (let index = 0; index < state.serviceCategories.length; index++) {
      let category = state.serviceCategories[index];

      for (let i = 0; i < category.services.length; i++) {
        let element = category.services[i].content;
        element.selected = false;
        element.active = false;
      }
    }
  },
  selectService(state,payload){
    if (payload.pushRoute) {
      this.$router.push("/" + payload.service);
    } 
  },
  fromServicesSection(state){
    state.fromServicesSection = true;
  },
  resetStep(state){
    state.step = 1;
  }
  
}

export const actions = {
  selectCategory({getters, commit},payload){
    const cat = getters.selectedCategory
      commit('selectCategory', {
        name: payload.name,
        prev: cat
      })
  },
  selectSubCategory({getters, commit}, payload){
    const subCat = getters.selectedSubCategory
    const cat = getters.selectedCategory;

    commit('selectSubCategory', {
      subCategory: payload.subCategory,
      category: cat,
      pushRoute: payload.pushRoute,
      prev: subCat
    })

  },
  resetCat({commit}){

    commit('resetCat')
    
  },
  resetSubCat({commit}){

    commit('resetSubCat')

  },
  setForm({dispatch}){
    if (state.fromServicesSection) {
      dispatch('resetForm')
    }
  },
  async resetForm({dispatch, commit}){
    
    await dispatch('resetSubCat');
    await dispatch('resetCat');
    await commit('resetStep');
  }
}


export default {
  state,
  getters,
  mutations,
  actions
};