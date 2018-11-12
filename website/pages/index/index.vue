<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex
      id="services"
      pb-4
      xs12
    >
      <ServiceTabs/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ServiceTabs from '@/components/Services/ServiceTabs.vue'
  export default{
    components:{
      ServiceTabs
    },
    data(){
      return {
        tabsShow: true
      }
    }
  }
</script>

