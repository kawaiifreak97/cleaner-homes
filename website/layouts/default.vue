<template>
  <v-app >
    <Header 
      :HeaderColor="transparentHeader"
      app 
    />
    
    <v-content 
      class="behind"
    >
      <nuxt/>
    </v-content>
    <Footer app/>
  </v-app>
</template>

<script>
  // import storyBlokLivePreview from '@/mixins/storyBlokLivePreview'
  export default {
    // mixins: [storyBlokLivePreview],
    data() {
      return {
        transparentHeader: 'transparent',  
        story: { 
          content: {} 
          } 
      }
    }
    // asyncData (context) {
    //   // Check if we are in the editor mode
    //   let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    //   // Load the JSON from the API
    //   return context.app.$storyapi.get('cdn/stories/test', {
    //     version: version
    //   }).then((res) => {
    //     console.log(res.data)
    //     return res.data
    //   }).catch((res) => {
    //     context.error({ statusCode: res.response.status, message: res.response.data })
    //   })
    // }
    
  }
</script>

<style>

</style>

