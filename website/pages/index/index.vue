<template>
  <v-layout
    v-show="tabsShow"
    id="services"
    row
    wrap
    justify-center
  >
    <v-flex
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
        title: 'Services',
        tabsShow: true
      }
    },
    beforeRouteUpdate (to, from, next) {
      console.log('router')
      this.tabsShow = false;
    }
  }
</script>
