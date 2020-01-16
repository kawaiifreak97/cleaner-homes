<template>
  <v-layout 
    justify-center
    row
    fill-height
  >
    <v-flex 
      xs12
      sm9
      md7
    >
      <v-card 
        class="rounded serviceFull"
      >
        <v-img
          :src="image"
          :alt="alt"
          height="200px"
          style="position:relative"
        >
          <v-btn
            nuxt
            to="/"
            class="buttonuk"
            flat
            icon
            fab
          >
            <v-icon 
              class="white--text"
              large>
              arrow_back
            </v-icon>
          </v-btn>
        </v-img>

        <v-card-title style="position:relative">
          <v-btn
            :large="$vuetify.breakpoint.smAndUp"
            nuxt
            absolute
            right
            top
            color="white"
            round
            class="primary--text"
            @click="selectSub()"
          >
            book now
          </v-btn>
          <div> 
            <h1 class="mb-0"> {{ name }} </h1>
            <div>{{ description }}</div>
          </div>  
          <v-spacer/>
          <v-btn 
            icon 
            @click="show = !show"
          >
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-slide-y-transition>
          <v-layout   
            v-show="show"
            row
            wrap
            px-2
            pb-2
          >
            <v-flex
              v-for="tag in tags"  
              :key="tag.tag_name"
              class="text-xs-center"
              shrink
              xs6
              sm3
            >
              <v-chip 
                color="primary"
                outline
              > 
                <span style="font-size: 1em;">{{ tag.tag_name }}</span>
              </v-chip>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:{
    name: {
      required: true,
      type: String
    },
    description:{
      required: true,
      type: String
    },
    tags:{
      required: true,
      type: Array
    },
    image:{
      required: true,
      type: String
    },
    alt:{
      required: true,
      type: String
    }
  },
  data(){
    return{
      show: false,
    }
  },
  methods: {
    selectSub(){
      this.$store.commit('stepIsThree')
      this.$store.commit('fromServicesSection')
    }
  },
}
</script>

<style scoped>
  .buttonuk{
    position: relative;
    top: 0px;
    left: 0px;
  }
  /* .serviceFull{
    width: 80vw
  }
  @media only screen and (min-width: 600px) {
    .serviceFull{
      width: 50vw
    }
  } */
</style>


