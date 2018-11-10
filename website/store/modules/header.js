export const state = () => ({
  homeLinks:[
    {
      name: 'How it works',
      path:'/',
      scrollto: 'how-it-works'
    },
    {
      name: 'Book now',
      path:'/bookingPage',
      scrollto: ''
    }
  ],
  navLinks:[
    {
      name: 'how it works',
      scrollto: 'how-it-works',
      path:'/'
    },
    {
      name: 'our services',
      scrollto: 'services',
      path:'/'
    },
    {
      name: 'book now',
      scrollto: '',
      path:'/bookingPage'
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