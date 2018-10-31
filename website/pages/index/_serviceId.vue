<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs12>
      <h1 :v-text="service"/>
    </v-flex>
    <v-flex xs10>
      <ServiceFull
        :name="service.name" 
        :description="service.description"
        :id="service.id"
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
        return this.$store.getters['selectedService'](this.$route.params.serviceId, 'Commercial')
      }
    },
    mounted() {
      console.log("testing " + this.$route.params);
      console.log(this.service)
    },
  }
</script>
