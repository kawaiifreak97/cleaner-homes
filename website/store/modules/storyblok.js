export const state = () => ({

})


export const mutations = {
  
}

export const actions = {
  async storyblok ({commit}, data) {
    // commit('headerData', data )
    
    commit('heroData', data)

    commit('howItWorksData', data)
    console.log(data)

    commit('aboutData', data)
    commit('addData', data)
    // commit('Footer', data)
    commit('testimonialsData', data)
    commit('contactData', data)
    // commit('services', data)
    // commit('bookingForm', data)
    
  },
  
}



export default {
  state,
  mutations,
  actions
};