export const state = () => ({
  title: 'What our clients say',
  testimonials:[
    {
      name: 'Peter revens',
      company: 'yosefa',
      quote: 'Amazing service, quick and efficient'
    }
  ]
})

export const mutations = {
  testimonialsData(state, data){
    const testimonials = data.filter( blok => { return blok.content.component == 'testimonial' })
    const title = data.find( blok => { return blok.full_slug == 'testimonials/testimonials-title' } ) 

    state.title = title.content.title;
    state.testimonials = testimonials;
  }
}

export default {
  state,
  // getters,
  mutations,
  // actions,
};