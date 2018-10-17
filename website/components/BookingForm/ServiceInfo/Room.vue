<template>
  <v-card 
    class="rounded room-card"
  >
    <v-layout
      row
      wrap
      justify-center
      class="text-xs-center"
    >
      <v-flex xs12>
        <v-icon 
          large
          class="primary--text"
          style="font-size: 3em"
        >
          home
        </v-icon>
      </v-flex>
      <v-flex 
        my-2
        xs12
      >
        <h4>
          {{ number }} {{ name }}
        </h4>
      </v-flex>
      <v-flex xs12>
        <v-layout
          row
          fill-height
          justify-center
          class="primary border-bottom"
        >
          <v-flex xs6>
            <v-btn 
              flat
              icon
              @click="add()"
            >
              <v-icon 
                color="white"
                large
              >
                add
              </v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn 
              flat
              icon
              @click="subtract()"
            >
              <v-icon 
                color="white"
                large
              >
                remove
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default{
  props:{
    name:{
      required: true,
      type: String
    }
  },
  data(){
    return{
      number: 0,
      selected: false
    }
  },
  methods:{
    add(){
      this.number++
    },
    subtract(){
      this.number--
    },

  }
}
</script>

<style scoped>
  .border-bottom{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .room-card{
    min-width: 25vw;
  }

  @media only screen and (min-width: 600px) {
  .room-card{
    min-width: 10vw;
  }
}

</style>