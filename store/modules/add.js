export const state = () => ({
  text: 'What are you waiting for!',
  button: 'book now'
})

export const mutations = {
  addData(state, data){
    const addData = data.find( content =>{ return content.name == 'add' })
    state.text = addData.content.text;
    state.button = addData.content.button;
  }
}

export default {
  state,
  mutations
};