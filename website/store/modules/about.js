export const state = () => ({
  title: 'About us',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla fugit nihil enim tempora est eligendi voluptas magnam architecto a nobis corporis nostrum, dicta repudiandae itaque, incidunt cumque dolore quae.'

})

export const mutations = {
  aboutData(state, data){
    const aboutData = data.find( content =>{ return content.name == 'about' })
    state.title = aboutData.content.title;
    state.description = aboutData.content.description;
  }
}

export default {
  state,
  mutations
};