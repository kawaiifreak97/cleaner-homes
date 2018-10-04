<template>
  <div> 
    <v-layout 
      v-for="i in 3"
      :id="`tab-${i}`"
      :key="i"
      row 
      wrap
      justify-center
      my-2 
    >
      <v-flex 
        v-for="i in 3"
        :key="i"
        xs3
        my-2
        mx-4
      >
        <ServicePrev/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ServicePrev from '@/components/Services/ServicePrev.vue'
export default {
  components:{
    ServicePrev
  }
}
</script>

