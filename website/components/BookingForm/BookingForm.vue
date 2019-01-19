<template>
  <v-card
    class="mx-auto rounded"
    max-width="90vw"
    width="70vw"
  >
    <v-card-title class=" title font-weight-regular justify-space-between">
      <span>{{ currentStep.title }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      />
    </v-card-title>

    <v-container>
      <v-window 
        v-model="step"
      >
        <v-window-item 
          v-for="step in steps"
          :key="step.name"
          :value="step.number"
        >
          <keep-alive>
            <component :is="currentStep.component"/>
          </keep-alive>
        </v-window-item>
      </v-window>
    </v-container>

    <v-divider/>

    <v-card-actions>
      <v-btn
        :disabled="step === 1 "
        flat
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer/>

      <v-btn
        v-if="step <= 4"
        :disabled="isValid"
        color="primary"
        depressed
        @click="validate()"
      >
        Next
      </v-btn>
      <v-btn
        v-if="step == 5"
        color="success"
        depressed
        @click="step++"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  Vue.use(VeeValidate)

  import { mapGetters } from 'vuex'

  import SelectCategory from '@/components/BookingForm/SelectCategory'
  import SelectSubCategory from '@/components/BookingForm/SelectSubCategory'

  import CommercialCleaning from '@/components/BookingForm/ServiceInfo/CommercialCleaning'
  import DomesticCleaning from '@/components/BookingForm/ServiceInfo/DomesticCleaning'
  import FarmSpraying from '@/components/BookingForm/ServiceInfo/FarmSpraying'

  import DateAndTime from '@/components/BookingForm/DateAndTime'
  import UserInfo from '@/components/BookingForm/UserInfo'

  import Submitted from '@/components/BookingForm/Submitted'

  export default {
    components:{ 
      SelectCategory,
      SelectSubCategory,
      CommercialCleaning,
      DomesticCleaning,
      FarmSpraying,
      DateAndTime,
      UserInfo,
      Submitted
    },
    data: () => ({
      step: 1,
    }),

    computed: {
      ...mapGetters([
        'selectedCategory',
        'selectedSubCategory',
      ]),
      activeCategory(){
        return this.$store.state.bookingForm.activeCategory
      },
      activeSubCategory(){
        return this.$store.state.bookingForm.activeSubCategory
      },
      isValid () {
        switch (this.step) {
          case 1:
            let validated = true;
            if (this.activeCategory) {
              validated = false;
            }else{
              validated = true
            }
            return validated
          break;
          case 2: 
            console.log('validating sub')
            let subValidated = true;
            if (this.activeSubCategory) {
              subValidated = false;
              console.log('validated sub')
            }else{
              subValidated = true
            }
            return subValidated
          break;
          case 3: 
            return 'pls'
          break;
          default:
            break;
        }
        return 'hi'
      },
      steps(){
        return this.$store.state.bookingForm.steps
      },
      currentStep () {
        switch (this.step) {
          case 1: 
            return {
              component: 'SelectCategory',
              title: 'Select category'
            }; 
          break;
          case 2: 
            return {
              component: 'SelectSubCategory',
              title: 'select type'
            }; 
          break;
          case 3: 
            switch (this.selectedCategory.name) {
              case 'Domestic':
                return {
                  component: 'DomesticCleaning',
                  title: this.selectedSubCategory.name
                };
                break;
              case 'Commercial':
                return {
                  component: 'CommercialCleaning',
                  title: this.selectedSubCategory.name
                };
                break;
              case 'Farm spraying':
                return {
                  component: 'FarmSpraying',
                  title: this.selectedSubCategory.name
                };
                break; 
              break;
            }
          break;
          case 4: 
            return {
              component: 'DateAndTime',
              title: 'date & time'
            }; 
          break;
          case 5: 
            return {
              component: 'UserInfo',
              title: 'your info'
            }; 
          break;
          default: 
            return {
                component: 'Submitted',
                title: 'Submitted',
                home: true
              }; 
          break;
        }
      }
    },
    
    methods: {
      validate(){
        ++this.step
      }
    }
  }
</script>

<style scoped>
/* @media only screen and (min-width: 600px) {
  .form{
    width: 
  } */
/* } */
</style>
