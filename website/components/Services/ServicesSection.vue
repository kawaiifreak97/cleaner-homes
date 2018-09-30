<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs12>
      <Title :text="title"/>
    </v-flex>
    <v-flex
      pb-4
      xs12
    >
      <Tabs/>
    </v-flex>
    <v-flex xs12>
      <ServiceFull/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ServiceFull from '@/components/Services/ServiceFull.vue'
  import Tabs from '@/components/Services/Tabs.vue'
  export default{
    components:{
      ServiceFull,
      Tabs
    },
    data(){
      return {
        title: 'Services'
      }
    }
  }
</script>