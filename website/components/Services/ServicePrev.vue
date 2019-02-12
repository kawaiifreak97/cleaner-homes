<template>
  <div 
    v-scroll-to="'#services'"
    style="position: relative;"
    class="thisCard"
    @click="selectService(name)"
  > 
    <v-card
      class="rounded prev-card"
    >
      <v-img
        :src="image"
        height="150px"
      />  
      <v-card-title primary-title>
        <div>
          <h3 class="thisTitle" >{{ name }}</h3>
        </div>
      </v-card-title>
    </v-card>
    <v-card
      class="overlay prev-card"
    >
      <v-img 
        :src="image"
        gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 0.7)"
        height="150px"
      >
        <v-layout 
          row
          fill-height
          align-end
          justify-center
          pb-2
        >
          <v-flex                 
            xs7
          >
            <h1 
              class="white--text"
              style="font-size: 2em;">More info</h1>
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
</template>

<script>
export default {
  props:{
    id:{
      required: true,
      type: String
    },
    name:{
      required: true,
      type: String
    },
    image:{
      required: true,
      type: String
    }
  },
  data(){
    return{
      overlay: false,  
      }
  },
  methods:{
    selectService(sub){
      this.$store.commit('selectService', {
        pushRoute: true,
        service: sub
      })
    }
  }
}
</script>

<style scoped>
  .small-card{
    min-width: 200px;
    max-width: 200px;
    margin: auto
  }
  .small-card:hover{
    color: #30d3c5;
  }
  .small-title{
    font-weight: 600;
  }
  .prev-card{
    min-width: 37.5vw;
    max-width: 37.5vw;
    cursor: pointer;
  }
  .overlay{
    display: none;
    position: absolute;
    top:0;
    left: 0;
    z-index: 100;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-width: 37.5vw;
    max-width: 37.5vw;
    cursor: pointer;
  }
  .thisCard:hover .overlay{
    display: block;
  }
  .thisCard:hover .thisTitle{
    color: #30d3c5;
  }
  @media only screen and (min-width: 959px) {
    .prev-card{
      min-width: 25vw;
      max-width: 25vw;
    }
    .overlay{
      min-width: 25vw;
      max-width: 25vw;
    }
  }
</style>
