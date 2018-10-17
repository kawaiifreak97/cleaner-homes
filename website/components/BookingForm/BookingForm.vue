<template>
  <v-stepper 
    v-model="e1"
    vertical
    class="booking-form"
  >
    <v-stepper-step 
      :complete="e1 > 1" 
      step="1"
      editable
    >Service</v-stepper-step>

    <v-stepper-content step="1">
      <v-layout 
        justify-start
        row 
        wrap
        my-2 
        fill-height
      >
        <v-flex
          v-for="service in services"
          :key="service.name"
          xs12
          sm7 
        >
          <ServicePrevSm :id="service.name" />
        </v-flex>
      </v-layout>

      <v-btn
        color="primary"
        @click="e1 = 2"
      >
        Continue
      </v-btn>

      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>



    <v-stepper-step 
      :complete = "e6 > 2"
      editable
      step="2"
    >options</v-stepper-step>

    <v-stepper-content step="2">
      <ServiceInfo/>
      <v-btn
        color="primary"
        @click="e1 = 3"
      >
        Continue
      </v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>


    <v-stepper-step
      :complete = "e6 > 3" 
      editable
      step="3"
    >Your details</v-stepper-step>

    <v-stepper-content step="3">
      <StepThree/>
      
      <v-btn
        color="primary"
        @click="e1 = 4"
      >
        Continue
      </v-btn>

      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>


    <v-stepper-step 
      :complete = "e6 > 4"
      editable
      step="4"
    >date and time</v-stepper-step> 

    <v-stepper-content step="4">
      <StepFour/>
    </v-stepper-content>
  </v-stepper>

  <!-- <v-stepper 
    v-model="e6" 
    vertical>
    <v-stepper-step 
      :complete="e6 > 1" 
      step="1">
      Select an app
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1"/>
      <v-btn @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step 
      :complete="e6 > 2" 
      step="2">Configure analytics for this app</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1"/>
      <v-btn @click="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step 
      :complete="e6 > 3" 
      step="3">Select an ad format and name ad unit</v-stepper-step>

    <v-stepper-content step="3">
      <v-card height="200px"/>
      <v-btn @click="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card height="200px"/>>
      <v-btn @click="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper> -->
</template>

<script>
import ServicePrevSm from '@/components/Services/ServicePrevSm'
import ServicePrev from '@/components/Services/ServicePrev'

import ServiceInfo from '@/components/BookingForm/ServiceInfo/ServiceInfo'
import StepThree from '@/components/BookingForm/StepThree'
import StepFour from '@/components/BookingForm/StepFour'
  export default {
    components:{
      ServicePrevSm,  
      ServicePrev,
      ServiceInfo,
      StepThree,
      StepFour    
    },
    data () {
      return {
        e6: 1,
        e1: 1,
        services:[
          {
            name: 'Farm spraying'
          },
          {
            name: 'Commercial cleaning'
          },
          {
            name: 'Domestic cleaning'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .booking-form{
    max-width: 90vw;
  }
</style>




