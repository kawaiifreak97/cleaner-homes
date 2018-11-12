<template>
  <v-stepper 
    v-model="e1"
    vertical
    class="booking-form rounded elevation-9"
  >
    <template 
      v-for="step in steps"
    >
      <v-stepper-step 
        :key="step.name"
        :complete="e1 > step.step" 
        :step="step.step"
      >
        {{ step.name }}
      </v-stepper-step>
      <v-stepper-content 
        :key="step.step"
        :step="step.step"
      >
        <StepOne v-if="step.step == 1"/>

        <ServiceType v-if="step.step == 2"/>

        <template v-if="step.step == 3 ">
          <FarmSprayingInfo v-if="selectedCategory.name == 'Farm spraying'"/>
          <ServiceInfo v-else />
        </template>

        
        <StepThree v-if="step.step == 4" />

        <StepFour v-if="step.step == 5"/>
        <v-btn
          color="primary"
          @click="++e1"
        >
          Continue
        </v-btn>

        <v-btn 
          v-if="step.step > 1"
          flat
          @click="resetStep(step.step)"
        >
          Back
        </v-btn>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>

<script>
import { mapGetters } from 'vuex'

import ServicePrev from '@/components/Services/ServicePrev'
import ServiceType from '@/components/BookingForm/ServiceType'

import ServiceInfo from '@/components/BookingForm/ServiceInfo/ServiceInfo'

import StepOne from '@/components/BookingForm/StepOne'
import StepThree from '@/components/BookingForm/StepThree'
import StepFour from '@/components/BookingForm/StepFour'

import FarmSprayingInfo from '@/components/BookingForm/FarmSprayingInfo'
  export default {
    components:{ 
      ServicePrev,  
      ServiceType,
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
        toggle_none: null,
        steps:[
          {
            name: 'one',
            step: 1,
            editable: true
          },
          {
            name: 'two',
            step: 2,
            editable: true
          },
          {
            name: 'three',
            step: 3,
            editable: true
          },
          {
            name: 'four',
            step: 4,
            editable: true
          },
          {
            name: 'five',
            step: 5,
            editable: true
          },
        ]
      }
    },
    computed:{
      ...mapGetters([
        'selectedCategory',
        'selectedSubCategory'
        
      ])
    },
    methods:{
      resetStep(step){
        --this.e1;

        if (step == 1) {
          console.log('step')
        }
        if (step == 2) {
          console.log('step 2')
          this.$store.dispatch('resetCategory')
        }
        if (step == 3) {
          
        }
        if (step == 3) {
          console.log('step')
        }

      }
    }
  }
</script>

<style scoped>
  .booking-form{
    max-width: 90vw;
  }
</style>




