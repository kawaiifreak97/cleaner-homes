<template>
  <v-app >
    <Header 
      app 
    />
    <v-content 
      class="behind"
    >
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
  .test{
    
  }
  .behind{
    z-index: 0;

  }
</style>

