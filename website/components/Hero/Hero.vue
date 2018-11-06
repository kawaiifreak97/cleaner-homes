<template>
  <v-layout>
    <v-img
      :src="heroImg"
      style="height:90vh; position: relative; z-index: 0;"
    >
      <div
        fill-height
        class="bottom-gradient"
      />
      <!--  put fill height on v-container, if put on v-layout code breaks -->
      <v-container 
        fluid
        fill-height  
        style="position:relative; z-index:100;"

      >
        <!-- set max width to vh, if set to % code breaks -->
        <v-layout
          row 
          wrap 
          align-center
          justify-center
          style="max-width: 90vw; max-height: 60vh"
        >
          <v-flex 
            xs10
            md6
          >
            <v-layout 
              :justify-center="$vuetify.breakpoint.smAndDown"
              row   
              wrap 
              class="white--text"
            >
              <v-flex 
                xs12
                sm9
                md12
              >
                <h1 class="hero-title text-xs-center text-sm-left">
                  {{ heroTitle }}
                </h1>
              </v-flex>
              <v-flex 
                xs9 
                hidden-sm-and-down
              >
                <h3 class="hero-subtitle text-xs-left">
                  {{ heroSubTitle }}
                </h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs10
            md2
          >
            <v-layout 
              row 
              wrap
              justify-center  
            >
              <v-flex 
                xs6
                md12
              >
                <div class="text-xs-center">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <Button 
                      slot="activator"
                    >
                      {{ heroBtnPopup }}
                    </Button>
                    <ContactForm/>
                  </v-dialog>
                </div>
              </v-flex>
              <v-flex 
                xs6
                md12
              >
                <div class="text-xs-center">
                  <Button :scrollto="heroBtnScroll.scrollto">{{ heroBtnScroll.name }}</Button>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return{
      heroBtnScroll:{
        name: 'services',
        scrollto: 'services'
      },
      heroBtnPopup: 'Contact us',
      dialog: false
    }
  },
  // asyncData(context){
  //   console.log('hi')
  //   return context.app.$storyapi
  //   .get('cdn/stories',{
  //     version: 'draft',
  //     starts_with: 'hero/'
  //   }).then((res) => {
  //     console.log('index ' + res.data.stories)  
  //     // context.store.dispatch('storyblok', res.data.stories)
  //     return res.data.stories
  //   })
  // },
  computed: mapState({
      heroImg: state => state.hero.heroImg,
      heroTitle: state => state.hero.heroTitle,
      heroSubTitle: state => state.hero.heroSubTitle
  })
}
</script>

<style>
.bottom-gradient {
  background-image: linear-gradient(to top right, rgba(48,211,197,.9), rgba(18,235,75,.89));
  position: absolute;
  z-index: 50;
  height:100%;
  width: 100%;
}
.hero-title{
  font-weight: bold;
  color: white;
  font-size: 1.85em;
}
.hero-subtitle{
  font-weight: 200;
  font-size: 1.2em;
}

@media only screen and (min-width: 600px) {
  .hero-title{
    font-size: 3em;
  }
}
</style>

