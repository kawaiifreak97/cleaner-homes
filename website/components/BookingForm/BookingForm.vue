<template>
  <v-stepper 
    v-model="e1"
    vertical
    class="booking-form rounded elevation-9"
  >
    <v-stepper-step 
      :complete="e1 > 1" 
      step="1"
      editable
    >Service</v-stepper-step>

    <v-stepper-content step="1">
      <StepOne/>
      <v-btn
        color="primary"
        @click="++e1"
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
        @click="++e1"
      >
        Continue
      </v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>



    <!-- <v-stepper-step 
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
    </v-stepper-content> -->


    <v-stepper-step
      :complete = "e6 > 3" 
      editable
      step="3"
    >Your details</v-stepper-step>

    <v-stepper-content step="3">
      <FarmSprayingInfo/>
      <!-- <StepThree/>  -->
      
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
</template>

<script>
import ServiceCategory from '@/components/BookingForm/ServiceCategory'
import ServicePrev from '@/components/Services/ServicePrev'

import ServiceInfo from '@/components/BookingForm/ServiceInfo/ServiceInfo'

import StepOne from '@/components/BookingForm/StepOne'
import StepThree from '@/components/BookingForm/StepThree'
import StepFour from '@/components/BookingForm/StepFour'

import FarmSprayingInfo from '@/components/BookingForm/FarmSprayingInfo'
  export default {
    components:{
      ServiceCategory,  
      ServicePrev,
      ServiceInfo,
      StepOne,
      StepThree,
      StepFour,
      FarmSprayingInfo  
    },
    data () {
      return {
        e6: 1,
        e1: 1,
        toggle_none: null
      }
    }
  }
</script>

<style scoped>
  .booking-form{
    max-width: 90vw;
  }
</style>




