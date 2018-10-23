<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs12>
      <h1 :v-text="service"/>
      <h2>hi {{ service }}</h2>
    </v-flex>
    <v-flex xs10>
      <ServiceFull
        :name="id" 
        :description="id"
        :id="id"
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
    asyncData (context){
      return {
        id: context.params.serviceId
      }
    },
    computed:{
      service(){
        return this.$store.getters['selectedService'](this.id)
      }
    },
    mounted() {
      console.log("testing " + this.id);
      console.log(this.service)
    },
  }
</script>
