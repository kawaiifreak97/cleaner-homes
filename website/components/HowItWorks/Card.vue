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
        :small="$vuetify.breakpoint.xsOnly"
        color="white"
        despressed  
        fab
        absolute
        bottom
        style="left: 50%;transform: translateX(-50%)"
      >
        <span class="primary--text btn-text">{{ step }}</span>
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
          hidden-xs-only
        >
          <div class="text-xs-center">
            <v-icon 
              color="primary"
              class="icon-responsive"
            > {{ stepIcon }} </v-icon>
          </div>

          
        </v-flex>
        <v-flex 
          hidden-sm-and-up
          xs12
        >
          <div style="height:25px;"/>
        </v-flex>
        <v-flex xs12>
          <h1>{{ title }}</h1>
        </v-flex>
        <v-flex xs10>
          <p>{{ description }} </p>
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
    },
    step:{
      required: true,
      type: String
    },
  },
  computed: {
    stepIcon(){
      switch (this.step) {
        case '1':
          return 'ring_volume';
          break;
        case '2': 
          return 'attachment'
        break;
        case '3': 
          return 'sentiment_very_satisfied'
        break;
      
        default: 
          return 'home'
        break;
      }
    }
  },

}
</script>


<style>
  .rounded{
    border-radius: 20px;
  }
  .stepCard{
    width: 50vw;
  }
  .icon-responsive{
    font-size: 4em;
  }

  .btn-text{
    font-size: 16px;
    font-weight: 600;
  }

  @media only screen and (min-width: 600px) {
    .stepCard{
      width: 20vw;
    }
    .icon-responsive{
      font-size: 4.5em;
    }
  }
</style>
