<template>
  <v-layout>
    <v-img
      src="http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg"
      gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 1)"
      style="height:90vh"
    >

      <!--  put fill height on v-container, if put on v-layout code breaks -->
      <v-container 
        fluid
        fill-height   
      >
        <!-- set max width to vh, if set to % code breaks -->
        <v-layout
          row 
          wrap 
          align-center
          justify-center
          class="border"
          style="max-width: 90vw; max-height: 60vh"
        >
          <v-flex 
            xs10
            md6
            class="border">
            <v-layout 
              row   
              wrap 
              justify-center
              class="white--text"
            >
              <v-flex 
                xs12
                sm9
                md12
              >
                <h1 class="heroTitle text-xs-center text-sm-left">
                  House cleaning & <br>
                  Farm spraying
                </h1>
              </v-flex>
              <v-flex 
                xs12 
                hidden-sm-and-down
              >
                <h3 style="font-weight: 200">
                  Freeing up your time so you can focus <br>
                  on what really matters
                </h3>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs10
            md2
          >
            <v-layout 
              class="border"
              row 
              wrap
              justify-center  
            >
              <v-flex 
                xs6
                md12
                class="border">
                <div class="text-xs-center">
                  <v-btn 
                    :large="$vuetify.breakpoint.smAndUp"
                    round   
                    ma-0   
                    class="primary--text"            
                  >
                    {{ test2 }}
                  </v-btn>
                </div>
              </v-flex>
              <v-flex 
                xs6
                md12
                class="border">
                <div class="text-xs-center">
                  <v-btn 
                    :large="$vuetify.breakpoint.smAndUp"
                    round   
                    ma-0      
                    class="primary--text"         
                  >
                    {{ test }}
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      test: 'Services',
      test2: 'Book now'
    }
  },
  mounted () {
    console.log(this.$vuetify.breakpoint)
  },
}
</script>

<style>
/* .border{
  border: thin solid red;
} */
.heroTitle{
  font-weight: bold;
  color: white;
  font-size: 2em;
}

@media only screen and (min-width: 600px) {
  .heroTitle{
    font-size: 48px;
  }
}
</style>

