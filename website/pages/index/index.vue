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
    // beforeRouteEnter (to, from, next) {
    //   this.tabsShow = true;
    // },
    beforeRouteUpdate (to, from, next) {
      console.log('router')
      this.tabsShow = false;
    }
    // watch: {
    //   '$route' (to,from){
    //     console.log('change')
    //     this.tabsShow = !this.tabsShow
    //   }
    // }
  }
</script>
