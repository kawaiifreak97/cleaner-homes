export const state = () => ({
  hi: 'hello',
  serviceCategories:[
    {
      name: 'Farm spraying',
      selected: false
    },
    {
      name: 'Commercial',
      selected: false
    },
    {
      name: 'Domestic',
      selected: false
    }
  ]
})

export const getters = {
  selectedCategory: (state) => (thisCategory) => {
    return state.serviceCategories.find( serviceCategory => { return serviceCategory.name == thisCategory.name})
  }
}

export const mutations = {
  selectCategory(state,thisCategory){
    state.selectedCategories.forEach(category => {
      if (category.selected) {
        category.selected = false;
      }
    });
    thisCategory.selected = !thisCategory.selected
  },
  deSelectCategory(state, id){

  }
}

export const actions = {
  async selectCategory(context,payload){
    console.log(context.getters)
    const thisCategory = context.getters.selectedCategory(payload);
    context.commit('selectCategory', thisCategory)
  },
  // select({commit}, id){
  //   const prevSelectedService = context.getters.selectedService(id);
  //   commit('deselect', prevSelectedService).then(() => {
  //     commit(this.select)
  //   })

  // }
}

export default {
  state,
  getters,
  mutations,
  actions,
};