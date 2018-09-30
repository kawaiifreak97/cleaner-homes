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
          justify-center>
          <v-flex xs6>
            <div style="position: relative"> 
              <v-card
                class="rounded"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  height="150px"
                />
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  </div>
                </v-card-title>
              </v-card>
              <v-card
                class="rouded overlay"
              >
                <v-img 
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 1)"
                  height="150px"
                  width="400px"
                >
                  <v-layout 
                    row
                    fill-height
                    align-end
                    justify-center
                  >
                    <v-flex xs10>
                      <h1 class="white--text">More info</h1>
                      <v-icon 
                        color="white" 
                        large
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
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>

<style>
 .overlay{
   position: absolute;
   top:0;
   left: 0;
   z-index: 100;
 }
</style>
