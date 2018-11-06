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
  howItWorksData(state, data){

    const steps = data.filter( content => { return content.content.component == 'how-it-works-step' })

    const sortedSteps = steps.sort(function (a, b) {
                          return a.content.step_number - b.content.step_number;
                        });
    const howItWorksTitle = data.find( content => { return content.full_slug == 'how-it-works/title' } )

    state.title = howItWorksTitle.content.title;
    state.steps = sortedSteps;
  }
}

export default {
  state,
  mutations
};