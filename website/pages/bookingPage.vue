<template>
  <v-layout 
    row
    wrap
    justify-center
  >
    <v-flex xs10>
      <Title>Booking request</Title>
    </v-flex>
    <v-flex xs10>
      <BookingForm/>
    </v-flex>
  </v-layout>
</template>

<script>
import BookingForm from '@/components/BookingForm/BookingForm.vue'
export default {
  components:{
    BookingForm 
  }
}
</script>

