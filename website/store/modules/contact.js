export const state = () => ({
  contactLinks:[
    {
      name: 'phone',
      value: '',
    },
    {
      name: 'email',
      value: ''
    }
  ]
})

export const mutations = {
  contactData(state, data){
    const contactInfo = data.find( blok => { return blok.name == 'contact' })
    state.contactLinks[0].value = contactInfo.content.phone;
    state.contactLinks[1].value = contactInfo.content.email;

  }
}

export default {
  state,
  mutations
};