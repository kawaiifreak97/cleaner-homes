<template>
  <div >
    <v-img
      src="http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg"
      style="min-height:80vh"
    >
      <div
        fill-height
        class="bottom-gradient"
      />
    </v-img>
    <div class="form-overlay">
      <v-layout 
        row
        wrap
        justify-center
      >
        <v-flex xs10>
          <Title ><span style="color:white"> Booking request</span></Title>
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

<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top right, rgba(48,211,197,.9), rgba(18,235,75,.89));
    position: absolute;
    z-index: 50;
    height:100%;
    width: 100%;
  }
  .form-overlay{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100vw;
  }
</style>

