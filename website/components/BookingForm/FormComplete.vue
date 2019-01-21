<template>
  <v-layout
    column
    class="text-xs-center"
  >
    <v-flex xs3>
      <div class="logo text-xs-center">
        <logo/>
      </div>
    </v-flex>
    <v-flex>
      <div style="height: 25px"/>
    </v-flex>
    <v-flex xs12>
      <h1 class="font-weight-bold">Complete!</h1>
    </v-flex>
    <v-flex xs1>
      <p>
        Thank you for booking with us. <br>
        We will get back to you shortly.
      </p>
    </v-flex>
    <v-flex>
      <div style="height: 25px"/>
    </v-flex>
    <v-flex xs7>
      <v-btn
        nuxt
        to="/"
        color="primary"
      >
        Home
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import logo from '@/assets/svg/Asset.svg'
export default {
  components:{
      logo
    },
}
</script>
<style scoped>
.logo{
  max-width: 150px;
  max-height: 150px;
  margin: auto

}
</style>

