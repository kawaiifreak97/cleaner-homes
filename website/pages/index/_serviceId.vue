<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex xs10>
      <ServiceFull
        :name="service.name" 
        :description="service.description"
        :tags="service.tags"
        :image="service.image"
        :alt="service.alt_text"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import ServiceFull from '@/components/Services/ServiceFull.vue'

  export default{
    head () {
      let service = this.service;
      
      return {
        title: `${service.name}  `,
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: `book ${service.name} services across otago`
          }
        ]
      }
    },
    components:{
      ServiceFull
    },
    computed:{
      service(){
        return this.$store.getters['selectedService'](this.$route.params.serviceId)
      }
    }
  }
</script>
