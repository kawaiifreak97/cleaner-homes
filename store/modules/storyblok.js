export const state = () => ({
  hasFetched: false,
  bookingPage: false,
})


export const mutations = {
  fetched(state){
    state.hasFetched = true;
  }
}

export const actions = {
  async storyblok ({commit}, data) {
    // commit('headerData', data )
    
    commit('heroData', data)

    commit('howItWorksData', data)

    commit('aboutData', data)
    commit('addData', data)
    // commit('Footer', data)
    commit('testimonialsData', data)
    commit('contactData', data)
    commit('servicesData', data)

    commit('fetched')
    
  },
  
}



export default {
  state,
  mutations,
  actions
};