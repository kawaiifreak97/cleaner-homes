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
          name: 'howdy',
          link: 'howdymate',
          description: 'jsdbfjosdhfnsdohvlsnfjsdnjlfbsdjkfbjksdbfjk',
          tags:[
            {
              name: 'window'
            },
            {
              name: 'windows interior'
            },
            {
              name: 'windws'
            },
            {
              name: 'wi'
            },
            {
              name: 'winws'
            },
          ]
        },
        {
          name: 'chur',
          link: 'churmur'
        },
        {
          name: 'windog',
          link: 'windollorew'
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
          name: 'gorse',
          link: 'gorde'
        }
      ]
    },
  ],
})

export const getters = {
  selectedService (state) {
    return (serviceId) => {
      // console.log(serviceId, categoryId)
      // const category = state.serviceCategories.find( category =>{ return category.name == categoryId });
      // console.log('category ' + category.services)
      // const service = category.services.find(service => { return service.name == serviceId});
      // return service;

      // state.serviceCategories.for
      const serviceCategories = state.serviceCategories;
      console.log(serviceCategories.length)
      let pls = ''

      for (let index = 0; index < state.serviceCategories.length; index++) {
        const category = state.serviceCategories[index];
        // const selectedService = category.services.find(service => { return service.name == serviceId});

        for (let i = 0; i < category.services.length; i++) {
          const element = category.services[i];
          console.log("inner array")
          console.log(element)
          if (element.name == serviceId) {
            pls = element
          }else{
          }
        }

        



      
        console.log('pls: ')
        console.log(pls)
        console.log(index)
        // console.log('category: ')
        // console.log(category)

        // if (selectedService) {
        //   console.log('service: ')
        //   console.log(selectedService)
        //   return selectedService
        // } else {
        //   return 'rats'
        // }
      }
      return pls
      // return state.serviceCategories
      // let test = 'hi ';

      // state.serviceCategories.forEach( category => {
      //   const willwork = '';
      //   const thisCategory = category;
      //   console.log('category: ')
      //   console.log(category)

      //   const service = thisCategory.services.find(service => { return service.name == serviceId});

      //   if (service) {
      //     test = service
      //   } else {
      //   }

      // });

      // return test

      // return state.serviceCategories.forEach(category => {
      //   return category.services.find( service => {
      //     const selectedService = service;
      //     if (service.name == serviceId) {
      //       return selectedService
      //     }
      //   })
      // })
    }
  }
}

// export const mutations = {
//   select (state) {
     
//   }
// }

export const actions = {
  selectService({getters}, payload){
    // console.log('action ' + payload.service + payload.category)
    const selected = getters.selectedService(payload.service,payload.category); 
    this.$router.push("/" + payload.service);
    // console.log(selected)
  }
}


export default {
  state,
  getters,
  // mutations,
  actions
};