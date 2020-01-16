export const state = () => ({
  heroImg: '',
  heroTitle: '',
  heroSubTitle: '',
  
})

export const mutations = {
  heroData(state, data){
    const heroData = data.find( content =>{ return content.name == 'hero' })
    state.heroImg = heroData.content.image;
    state.heroTitle = heroData.content.title;
    state.heroSubTitle = heroData.content.subtitle;
    state.heroImgAlt = heroData.content.alt_text;
  }
}


export default {
  state,
  mutations
};