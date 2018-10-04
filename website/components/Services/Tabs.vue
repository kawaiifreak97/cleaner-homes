<template>
  <div>
    <v-tabs
      slot="extension"
      v-model="model"
      centered
      color="#fafafa"
      slider-color="primary"
    >
      <v-tab
        v-for="service in services"
        :key="service.name"
        :to="`/${service.link}`"
        nuxt
        ripple
      >
        {{ service.name }}
      </v-tab>
    </v-tabs>
    <nuxt-child/>
  </div>
   
</template>

<script>
import ServicePrev from '@/components/Services/Serviceprev'
  export default {
    data () {
      return {
        overlay: false,
        tabStart: 'tab-2',
        services:[
          {
            name: 'Commercial',
            link: 'commercial'
          },
          {
            name: 'Domestic',
            link: ''
          },
          {
            name: 'Farm spraying',
            link: 'farm-spraying'
          },
        ],
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
    // methods:{
    //   overlay(){
    //     console.log('working')
    //     this.overlay = !overlay

    //   }
    // }
  }
</script>


