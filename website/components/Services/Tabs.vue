<template>
  <div>
    <v-tabs
      slot="extension"
      v-model="model"
      centered
      color="white"
      slider-color="primary"
    >
      <v-tab
        v-for="i in 3"
        :key="i"
        :href="`#tab-${i}`"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :id="`tab-${i}`"
        :key="i"
      > 
        <v-layout 
          row 
          wrap
          justify-center
          my-2
        >
          <v-flex 
            v-for="i in 6"
            :key="i"
            xs3
            my-2
            mx-4
          >
            <div 
              style="position: relative"
              class="service-prev"
            > 
              <v-card
                class="rounded "
                width="25vw"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  height="150px"
                  
                />
                <v-card-title primary-title>
                  <div>
                    <h3 class="service-prev-title" >Kangaroo Valley Safari</h3>
                  </div>
                </v-card-title>
              </v-card>
              <v-card
              
                width="25vw"
                class="rouded overlay hidden-xs-and-up"
              >
                <v-img 
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 1)"
                  height="150px"
                >
                  <v-layout 
                    row
                    fill-height
                    align-end
                    justify-center
                  >
                    <v-flex                 
                      xs7>
                      <h1 class="white--text">More info</h1>
                    </v-flex>
                    <v-flex xs4>
                      <v-icon 
                        color="white" 
                        x-large
                      >arrow_forward</v-icon>
                    </v-flex>
                  </v-layout>
                </v-img>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </div>
   
</template>

<script>
  export default {
    data () {
      return {
        overlay: false,
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
    // methods:{
    //   overlay(){
    //     console.log('working')
    //     this.overlay = !overlay

    //   }
    // }
  }
</script>

<style>
 .overlay{
   display: none;
   position: absolute;
   top:0;
   left: 0;
   z-index: 100;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
 }
 .service-prev:hover .overlay{
   display: block
 }
 .service-prev:hover .service-prev-title{
   color: #30d3c5;
 }
</style>
