export const state = () => ({
  title: 'How it works',
  steps:[
    {
      title: 'Contact us',
      description: 'Call, email or fill out our booking form'
    },
    {
      title: 'Free quote',
      description: 'Well come and quote the job for free!'
    },
    {
      title: 'Rest easy',
      description: 'Well have the job finished in not time!'
    }
  ]
})

export const mutations = {
  // add (state, text) {
  //   state.list.push({
  //     text: text,
  //     done: false
  //   })
  // },
  // remove (state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1)
  // },
  // toggle (state, todo) {
  //   todo.done = !todo.done
  // }
}

export default {
  state,
  // getters,
  // mutations,
  // actions,
};