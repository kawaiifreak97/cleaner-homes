<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs12>
      <h1 :v-text="service"/>
      <h1>{{ service }}</h1>
      <!-- <h1>serviceFull</h1> -->
    </v-flex>
    <v-flex xs10>
      <ServiceFull
        :name="service.name" 
        :description="service.description"
        :id="service.id"
        :tags="service.tags"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import ServiceFull from '@/components/Services/ServiceFull.vue'

  export default{
    components:{
      ServiceFull
    },
    data(){
      return{
        id: 'windows'
      }
    },
    computed:{
      service(){
        return this.$store.getters['selectedService'](this.$route.params.serviceId)
        // return this.$store.getters['selectedService'] 
      }
    }
  }
</script>
