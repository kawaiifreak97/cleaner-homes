export const state = () => ({
  title: 'Services',
  select: false,
  selectedService:{
    name: 'yes'
  },
  serviceCategories:[
    {
      name: 'Commercial',
      link: 'commercial',
      services:[
        {
          name: 'windows',
          link: 'windows'
        },
        {
          name: 'window',
          link: 'window'
        },
        {
          name: 'windo',
          link: 'windo'
        }
      ]

    },
    {
      name: 'Domestic',
      link: '',
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
      services:[
        {
          name: 'windoqws',
          link: 'wisndows'
        },
        {
          name: 'wisndow',
          link: 'wisdndow'
        },
        {
          name: 'widndo',
          link: 'widndo'
        },
        {
          name: 'wdin',
          link: 'wdin'
        },
        {
          name: 'wdind',
          link: 'widnd'
        }
      ]
    },
  ],
})

export const getters = {
  selectedService: (state) => (id) => {
    //   state.serviceCategories.forEach( serviceCategory => { 
    //   return serviceCategory.find( service => {
    //     return service.name == 'wdind'
    //   })
    // })
    //   it returns whole service category array bubt only want to return object
      // return state.serviceCategories.find( item =>{
      //   return item.services.find( service =>{
      //     return service.name == id
      //   }) 
      // })

      const category = state.serviceCategories.find( category =>{ return category.name == 'Commercial' });
      const service = category.services.find(service => { return service.name == id})
      return service
    // state.serviceCategories.find( serviceCategory => {
    //     return serviceCategory.name === id
    //   } 
      // serviceCategory.services.find(service => {
      //   return service.link === id
      // })
    // );
    // return state.serviceCategories.find( item => {
    //   return item.name === id
      // return item.services.find( service => {
      //   return service.name == 'wdind'
      // })
    // })
  }
}

// export const mutations = {
//   select (state) {
     
//   }
// }

export const actions = {
  select ({commit, getters}, id){
    // const selected = getters.selectedService; 
    this.$router.push("/" + id);
    // console.log($nuxt.$route.path)
  }
}


export default {
  state,
  getters,
  // mutations,
  actions
};