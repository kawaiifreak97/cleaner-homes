<template>
  <v-btn
    :v-scroll-to="`#${scrollto}`"
    :large="$vuetify.breakpoint.smAndUp"
    :to="'/' + link "
    round
    color="white"
    ma-0
  >
    <span class="primary--text btn-text" >
      <slot> Book now </slot> 
    </span>
    
  </v-btn>
</template>

<script>
  export default{
    props:{
      link:{
        required: false,
        type: String,
        default: ''
      },
      scrollto:{
        required: false,
        type: String,
        default: ''
      }
    },
    computed:{
      scroll(){
        if (this.scrollto) {
          const id =`#${this.scrollto}`;
          console.log(id)
          return id
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .btn-text{
    font-size: 1rem
  }

  @media only screen and (min-width: 600px) {
  .btn-text{
    font-size: 1.2rem;
  }
}
</style>


