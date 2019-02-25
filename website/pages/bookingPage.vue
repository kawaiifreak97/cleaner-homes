<template>
  <div 
    id="booking"
    style="min-height:115vh">
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
          <Title><span style="color:white"> Booking request</span></Title>
        </v-flex>
        <v-flex 
          xs12
        >
          <BookingForm />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm/BookingForm.vue'
export default {
  layout: 'bookingPage',
  scrollToTop: true,
  fetch (context) {

    context.store.dispatch('resetForm')

    if (context.store.state.storyblok.hasFetched) {
      console.log('hasFetched data')
      return 'has fetched'
    }else{
      return context.app.$storyapi.get('cdn/stories',{
        version: 'draft'
      }).then((res) => {
        console.log('fetching...')
        context.store.dispatch('storyblok', res.data.stories)
      })
    }
  },
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

