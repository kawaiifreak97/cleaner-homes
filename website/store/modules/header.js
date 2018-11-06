export const state = () => ({
  homeLinks:[
    {
      name: 'How it works',
      path:'',
      scrollto: 'how-it-works'
    },
    {
      name: 'Book now',
      path:'bookingPage',
      scrollto: ''
    }
  ],
  boookingPageLinks:[
    {
      name: 'Home',
      path:'',
      scrollto: ''
    }
  ]
})

export default {
  state,
  // getters,
  // actions,
};