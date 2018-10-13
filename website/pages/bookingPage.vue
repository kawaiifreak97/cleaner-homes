<template>
  <div>
    <v-img
      src="http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg"
      style="height:90vh; position: fixed; z-index: 0;"
    >
      <div
        fill-height
        class="bottom-gradient"
      />
    </v-img>
    <v-img
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    />
    <v-layout 
      row
      wrap
      justify-center
      my-4
      style="position:relative; z-index:10"
    >
      <v-flex xs10>
        <Title>Booking request</Title>
      </v-flex>
      <v-flex 
        xs12
        sm11
        md10
      >
        <BookingForm/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm/BookingForm.vue'
export default {
  layout: 'bookingPage',
  components:{
    BookingForm 
  }
}
</script>


