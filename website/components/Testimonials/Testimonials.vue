<template>
  <v-layout 
    row
    wrap
    justify-center
  >
    <v-flex xs11>
      <Title>{{ title }}</Title>
      
    </v-flex>

    <v-flex xs12>
      <div  
        v-swiper:mySwiper="swiperOption" 
      >
        <div class="swiper-wrapper">
          <v-layout
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="swiper-slide"
            fill-height
            row
            mb-4
            justify-center
          >
            <v-flex 
              xs11 
              mb-4
            >
              <Testimonial
                :name="testimonial.content.name"
                :company="testimonial.content.company"
                :quote="testimonial.content.quote"/>
            </v-flex>
          </v-layout>
        </div>
        <div class="swiper-pagination"/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'
  import Testimonial from '@/components/Testimonials/Testimonial.vue'
  export default {
    components:{
      Testimonial
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: true
          },
          slidesPerView: 3,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    },
    computed: mapState({
      title: state => state.testimonials.title,
      testimonials: state => state.testimonials.testimonials
    })
  }
</script>