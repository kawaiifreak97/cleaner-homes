<template>
  <v-btn
    :large="$vuetify.breakpoint.smAndUp"
    round
    color="white"
    ma-0
  >
    <span class="primary--text btn-text" >
      <slot> Book now </slot> 
    </span>
  </v-btn>
</template>

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


