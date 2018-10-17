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
  export default {
    data() {
      return {
        transparentHeader: 'transparent'
      }
    }
  }
</script>

<style>

</style>

