<template>
  <v-btn
    :large="$vuetify.breakpoint.smAndUp"
    round
    color="white"
    ma-0
  >
    <span class="primary--text">
      <slot> Book now </slot> 
    </span>
  </v-btn>
</template>

<script>
export default {
  
}
</script>

