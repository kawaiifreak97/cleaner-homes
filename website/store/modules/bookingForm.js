export const state = () => ({
  hi: 'hello',
  serviceCategories:[
    {
      name: 'Farm spraying',
      selected: false,
      subCategories:[
        {
          name: 'spraying'
        }
      ]
    },
    {
      name: 'Commercial',
      selected: false,
      subCategories:[
        {
          name: 'Builders'
        },
        {
          name: 'Office'
        }
      ]
    },
    {
      name: 'Domestic',
      selected: false,
      subCategories:[
        {
          name: 'One off'
        },
        {
          name: 'Regular'
        },
        {
          name: 'Deep clean'
        }
      ]
    }
  ]
})

export const getters = {
  selectedCategory: (state) => {
    return state.serviceCategories.find( serviceCategory => { return serviceCategory.selected})
  }
}

export const mutations = {
  selectCategory(state,thisCategory){

    const prevSelectedCategory = state.serviceCategories.find( element => { return element.selected })

    if (prevSelectedCategory) {
      prevSelectedCategory.selected = false;
    } else {
    }

    const justSelected = state.serviceCategories.find( element => { return element.name == thisCategory })
    justSelected.selected = true
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