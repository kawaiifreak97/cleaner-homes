export const state = () => ({
  hi: 'hello',
  serviceCategories:[
    {
      name: 'Farm spraying',
      selected: false,
      subCategories:[
        {
          name: 'spraying',
          selected: false
        }
      ]
    },
    {
      name: 'Commercial',
      selected: false,
      subCategories:[
        {
          name: 'Builders',
          selected: false
        },
        {
          name: 'Office',
          selected: false
        }
      ]
    },
    {
      name: 'Domestic',
      selected: false,
      subCategories:[
        {
          name: 'One off',
          selected: false
        },
        {
          name: 'Regular',
          selected: false
        },
        {
          name: 'Deep clean',
          selected: false
        }
      ]
    }
  ]
})

export const getters = {
  selectedCategory: (state) => {

    let defaultCategory = {
      subCategories:[
        {name: ''}
      ]
    }

    const selected = state.serviceCategories.find( serviceCategory => { return serviceCategory.selected})

    if (selected) {
      defaultCategory = selected
    } else {
      defaultCategory.subCategories[0].name = 'please select category'
    }
    return defaultCategory
  },
  selectedSubCategory: (state) => {

    let selected = {}

    for (let index = 0; index < state.serviceCategories.length; index++) {
      const category = state.serviceCategories[index];

      for (let i = 0; i < category.subCategories.length; i++) {
        const element = category.subCategories[i];
        if (element.selected) {
          selected = element
        }
      }
    }
    return selected
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
  },
  selectSubCategory(state, payload){

    const prevSelectedCategory = state.serviceCategories.find( element => { return element.name == payload.thisCategory.name })
    let prevSelectedSub = {}

      if (prevSelectedCategory) {
        prevSelectedSub = prevSelectedCategory.subCategories.find( element => { return element.selected })
        if (prevSelectedSub) {
          prevSelectedSub.selected = false;
        }
      } 

    const justSelected = payload.thisCategory.subCategories.find( element => { return element.name == payload.thisSubCategory}) 
    justSelected.selected = true
  },
  resetSub(payload){
    payload.selected = false
  }
}

export const actions = {
  async selectCategory(context,payload){
    console.log(context.getters)
    const thisCategory = context.getters.selectedCategory(payload);
    context.commit('selectCategory', thisCategory)
  },
  async resetSub(context){
    console.log(context.getters)
    const sub = context.getters.selectedSubCategory;
    context.commit('resetSub', sub)
    console.log(sub)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
};