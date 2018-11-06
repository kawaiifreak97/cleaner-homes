export const state = () => ({
  heroImg: 'http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg',
  heroTitle: 'Cleaner homes and pastures',
  heroSubTitle: 'freeing up your time so ou can focus on what reallly matters',
})

export const mutations = {
  heroData(state, data){
    const heroData = data.find( content =>{ return content.name == 'hero' })
    state.heroImg = heroData.content.image;
    state.heroTitle = heroData.content.title;
    state.heroSubTitle = heroData.content.subtitle
  }
}


export default {
  state,
  mutations
};