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
      services:[]
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
      let selected = {}

      for (let index = 0; index < state.serviceCategories.length; index++) {
        const category = state.serviceCategories[index];

        for (let i = 0; i < category.services.length; i++) {
          const element = category.services[i];
          if (element.content.name == serviceId) {
            selected = element.content
            console.log(element.content.name, serviceId)
          }
        }
      }
      return selected
    }
  }
}

export const mutations = {
  servicesData(state, data){
    const serviceCategories = data.filter( blok => { return blok.content.component == 'service' })
    const farmspraying = serviceCategories.filter( blok => { return blok.full_slug.includes('farm-spraying')})
    const domestic = serviceCategories.filter( blok => { return blok.full_slug.includes('domestic')})
    const commercial = serviceCategories.filter( blok => { return blok.full_slug.includes('commercial')})

    state.serviceCategories[0].services = commercial;
    state.serviceCategories[1].services = domestic;
    state.serviceCategories[2].services = farmspraying;


    console.log('servicesData: ')
    console.log(commercial)
    console.log(serviceCategories)
    console.log(state.serviceCategories )

  }
}

export const actions = {
  selectService({getters}, payload){
    this.$router.push("/" + payload.service);
  }
}


export default {
  state,
  getters,
  mutations,
  actions
};