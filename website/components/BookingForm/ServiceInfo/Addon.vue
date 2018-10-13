<template>
  <v-card 
    :class="{selected : selectedAddon}"
    class="rounded cursor-pointer"
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
          :class="[{ 'white--text' : selectedAddon}, 'secondary--text']"
          large
          style="font-size: 3em"
        >
          home
        </v-icon>
      </v-flex>
      <v-flex 
        xs12
      >
        <h4
          :class="{ 'white--text' : selectedAddon}"
          pa-1
          class="text-xs-center secondary--text"
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
    background-color: #30d3c5 !important;
  }
</style>


