<template>
  <v-layout 
    justify-center
    mb-4
  >
    <v-card
      hover
      raised  
      class="rounded stepCard"
    >
      <v-btn 
        color="white"
        despressed  
        fab
        absolute
        bottom
        style="left: 50%;transform: translateX(-50%)"
      >
        <span class="primary--text">1</span>
      </v-btn>
      <v-layout
        pb-4
        class="text-xs-center"
        row
        wrap
        justify-center
      >
        <v-flex 
          xs12
        >
          <div class="text-xs-center">
            <v-icon 
              color="primary"
              style="font-size:6em"
              x-large
            > home </v-icon>
          </div>
          
        </v-flex>
        <v-flex xs12>
          <h1>title</h1>
        </v-flex>
        <v-flex xs12>
          <p>description</p>
        </v-flex>
      </v-layout>


    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: {
    title:{
      required: true,
      type: String
    },
    description:{
      required: true,
      type: String
    }
  }

}
</script>


<style>
  .rounded{
    border-radius: 20px;
  }
  .stepCard{
    width: 50vw;
  }

  @media only screen and (min-width: 600px) {
    .stepCard{
      width: 20vw;
    }
  }
</style>
