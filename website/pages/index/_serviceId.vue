<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs10>
      <ServiceFull/>
    </v-flex>

  </v-layout>
</template>

<script>
  import ServiceFull from '@/components/Services/ServiceFull.vue'
  
  export default{
    components:{
      ServiceFull
    }
  }
</script>
