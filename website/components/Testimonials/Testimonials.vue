<template>
  <v-layout 
    row
    wrap
    justify-center
  >
    <v-flex xs11>
      <Title>What our clients say</Title>
      
    </v-flex>

    <v-flex xs12>
      <div  
        v-swiper:mySwiper="swiperOption" 
      >
        <div class="swiper-wrapper">
          <v-layout
            v-for="banner in banners"
            :key="banner.name"
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
              <Testimonial/>
            </v-flex>
          </v-layout>
        </div>
        <div class="swiper-pagination"/>
        <!-- <div 
          slot="button-prev"
          class="swiper-button-prev" 
        />
        <div 
          slot="button-next"
          class="swiper-button-next" 
        /> -->
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import Testimonial from '@/components/Testimonials/Testimonial.vue'
  export default {
    components:{
      Testimonial
    },
    data () {
      return {
        banners: [ 
          {
            name:"yes",
            img:'https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/17051261609_28a1fdf043_b.jpg'
          },
          {
            name:"es",
            img:'https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/17051261609_28a1fdf043_b.jpg'
          },
          {
            name:"ye=s",
            img:'https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/17051261609_28a1fdf043_b.jpg'
          },
          {
            name:"y=s",
            img:'https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/17051261609_28a1fdf043_b.jpg'
          },
          {
            name:"ys",
            img:'https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2018-06/17051261609_28a1fdf043_b.jpg'
          }
        ],
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
    }
  }
</script>