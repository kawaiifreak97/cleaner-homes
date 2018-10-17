<template>
  <v-card 
    class="rounded cursor-pointer addon-card"
    ripple 
  >
    <v-layout
      row
      wrap
      justify-center
      class="text-xs-center"
      @click="select()"
    >
      <v-flex xs12>
        <v-icon 
          :class="[{ 'secondary--text' : selectedAddon}, 'accent--text']"
          :large="$vuetify.breakpoint.smAndUp"
          style="font-size: 3em"
        >
          home
        </v-icon>
      </v-flex>
      <v-flex 
        xs12
      >
        <h4
          :class="[{ 'secondary--text' : selectedAddon}, 'accent--text']"
          pa-1
          class="text-xs-center"
        >
          {{ name }}
        </h4>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props:{
    name:{
      required: true,
      type: String
    }
  },
  data(){
    return{
      selectedAddon: false
    }
  },
  methods:{
    select(){
      this.selectedAddon = !this.selectedAddon;
      console.log('selected: ' + this.selectedAddon)
    }
  }
}
</script>

<style scoped>
  .selected{
    background-color: #12EB4B !important;
  }
  .addon-card{
    min-width: 25vw;
  }

  @media only screen and (min-width: 600px) {
  .addon-card{
    min-width: 15vw;
  }
}
</style>


