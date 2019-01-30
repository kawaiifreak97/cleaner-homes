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
    computed:{
      service(){
        return this.$store.getters['selectedSubCategory'](this.$route.params.serviceId)
      }
    }
  }
</script>
