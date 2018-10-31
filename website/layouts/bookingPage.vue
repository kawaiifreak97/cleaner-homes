<template>
  <v-app >
    <Header 
      :HeaderColor="fillHeader"
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
        fillHeader: 'transparent'
      }
    }
  }
</script>


