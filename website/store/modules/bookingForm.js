export const state = () => ({
  step: 1,
  continueBtnDisabled: true,
  selectedSubCategory: '',
  date: '',
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

})

export const getters = {
}

export const mutations = {

  stepIsThree(state){
    state.step = 3;
    this.$router.push("/bookingPage");
  },
  stepIncrement(state){
    ++state.step
  },
  stepDecrement(state){
    --state.step
  }
}

export const actions = {
  
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