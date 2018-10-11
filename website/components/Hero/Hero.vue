<template>
  <v-layout>
    <v-img
      src="http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg"
      style="height:90vh; position: relative; z-index: 0;"
    >
      <div
        fill-height
        class="bottom-gradient"
      />
      <!--  put fill height on v-container, if put on v-layout code breaks -->
      <v-container 
        fluid
        fill-height  
        style="position:relative; z-index:100;"

      >
        <!-- set max width to vh, if set to % code breaks -->
        <v-layout
          row 
          wrap 
          align-center
          justify-center
          style="max-width: 90vw; max-height: 60vh"
        >
          <v-flex 
            xs10
            md6
          >
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
                <h3 class="hero-subtitle">
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
              row 
              wrap
              justify-center  
            >
              <v-flex 
                xs6
                md12
              >
                <div class="text-xs-center">
                  <Button>{{ test2 }}</Button>
                </div>
              </v-flex>
              <v-flex 
                xs6
                md12
              >
                <div class="text-xs-center">
                  <div class="text-xs-center">
                    <Button>{{ test }}</Button>
                  </div>
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
.bottom-gradient {
  background-image: linear-gradient(to top right, rgba(48,211,197,.9), rgba(18,235,75,.89));
  position: absolute;
  z-index: 50;
  height:100%;
  width: 100%;
}
.heroTitle{
  font-weight: bold;
  color: white;
  font-size: 1.85em;
}
.hero-subtitle{
  font-weight: 200;
  font-size: 1.2em;
}

@media only screen and (min-width: 600px) {
  .heroTitle{
    font-size: 3em;
  }
}
</style>

