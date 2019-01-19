export const state = () => ({
  activeSubCategory: false,
  activeCategory: false,
  continueBtnDisabled: true,
  selectedSubCategory: '',
  date: '',
  time: '',
  steps:[
    {
      name: 'Select Service',
      step: 1,
      editable: true
    },
    {
      name: 'Select Service type',
      step: 2,
      editable: true
    },
    {
      name: 'Enter service details',
      step: 3,
      editable: true
    },
    {
      name: 'Time & Date',
      step: 4,
      editable: true
    },
    {
      name: 'Your information',
      step: 5,
      editable: true
    },
    {
      name: 'Your ormation',
      step: 6,
      editable: true
    },
  ],
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
  ],
  roomTypes:[
    {
      name: 'Offices'
    },
    {
      name: 'Bedrooms'
    },
    {
      name: 'Kitchens'
    },
    {
      name: 'Bathrooms'
    },
    {
      name: 'Story'
    }
  ],
  Addons:[
    {
      name: 'windows interior'
    },
    {
      name: 'oven'
    },
    {
      name: 'windows'
    },
    {
      name: 'ho'
    },
    {
      name: 'hso'
    }
  ],
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
    state.selectSubCategory = selected;
    return selected
  },
  commercial: (state) => {
    let comRoomTypes;
    let comAddons;

    if (state.selectSubCategory.name) {
      
    }

    
  }
}

export const mutations = {
  selectCategory(state,payload){

    const prevSelectedCategory = state.serviceCategories.find( element => { return element.selected })

    if (prevSelectedCategory) {
      prevSelectedCategory.selected = false;
    }

    const justSelected = state.serviceCategories.find( element => { return element.name == payload.name })

    if (justSelected) {
      if (payload.active) {
        justSelected.selected = false;
        state.activeCategory = false;
      }else{
        justSelected.selected = true;
        state.activeCategory = true;
      }
    }

    state.continueBtnDisabled = false;
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

    if (justSelected) {
      if (payload.active) {
        justSelected.selected = false;
        state.activeSubCategory = false;
      }else{
        justSelected.selected = true;
        state.activeSubCategory = true;
      }
    }

    state.continueBtnDisabled = false;
  },
  resetCategory(state, payload){
    payload.subCategory.selected = false;
  },
  disableContinueBtn(state){
    if (!state.continueBtnDisabled) {
      state.continueBtnDisabled = true;
    }
  },
  enableContinueBtn(state){
    if (state.continueBtnDisabled ) {
      state.continueBtnDisabled = false;
    }
  },
  setDate(state, payload){
    state.date = payload;
    console.log(state.date)
    console.log('disabled')
    state.continueBtnDisabled = false;
  },
  setTime(state, payload){
    state.time = payload;
  }
}

export const actions = {
  async selectCategory(context,payload){
    // console.log(context.getters)
    const thisCategory = context.getters.selectedCategory(payload);
    context.commit('selectCategory', thisCategory)
  },
  async resetCategory(context){
    const sub = context.getters.selectedSubCategory;

    context.commit('resetCategory', {
      subCategory: sub
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
};