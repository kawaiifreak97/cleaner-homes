<template>
  <div 
    style="position: relative"
    class="thisCard"
  > 
    <!-- <v-card
      class="rounded"
      width="25vw"
    >
      <v-img
        src="http://jennian.co.nz/wp-content/uploads/2016/07/Queenstown-Showhome-Interior.jpg"
        height="150px"
      />
      <v-card-title primary-title>
        <div>
          <h3 class="thisTitle" >Kangaroo Valley Safari</h3>
        </div>
      </v-card-title>
    </v-card> -->
    <div 
      width="25vw"
      class="rouded overlay"
    >
      <v-img 
        src="http://jennian.co.nz/wp-content/uploads/2016/07/Queenstown-Showhome-Interior.jpg"
        gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 1)"
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
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      overlay: false,  
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style>
 /* .overlay{
   display: none;
   position: absolute;
   top:0;
   left: 0;
   z-index: 100;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
 } */
 .thisCard:hover .overlay{
   display: block
 }
 .thisCard:hover .thisTitle{
   color: #30d3c5;
 }
</style>
