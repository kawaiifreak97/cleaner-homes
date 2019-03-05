<template>
  <v-card
    class="mx-auto rounded booking"
    max-width="90vw"
  >
    <v-card-title 
      v-show="stepNumber <= 3"
      class=" headline font-weight-regular justify-space-between">
      <span class="">{{ currentStep.title }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="stepNumber"
      />
    </v-card-title>
    <v-container>
      <v-window 
        v-model="stepNumber"
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
    <v-card-actions v-show="stepNumber <= 3">
      <v-btn
        :disabled="backBtn"
        flat
        @click="decrement()"
      >
        Back
      </v-btn>
      <v-spacer/> 
      <v-btn
        v-if="stepNumber <= 2"
        :disabled="isValid"
        color="primary"
        depressed
        @click="validate()"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

  import { mapGetters } from 'vuex'

  import SelectCategory from '@/components/BookingForm/SelectCategory'
  import SelectSubCategory from '@/components/BookingForm/SelectSubCategory'

  import DateAndTime from '@/components/BookingForm/DateAndTime'
  import UserInfo from '@/components/BookingForm/UserInfo'

  import FormComplete from '@/components/BookingForm/FormComplete'

  export default {
    components:{ 
      SelectCategory,
      SelectSubCategory,
      DateAndTime,
      UserInfo,
      FormComplete
    },
    computed: {
      ...mapGetters([
        'selectedCategory',
        'selectedSubCategory',
      ]),
      selectedService(){
        return this.$store.state.services.selectedService.name
      },
      stepNumber(){
        return this.$store.state.bookingForm.step
      },
      steps(){
        return this.$store.state.bookingForm.steps
      },
      isValid () {
        switch (this.stepNumber) {
          case 1:
            let enabled = true;
            if (this.selectedCategory.selected) {
              enabled = false;
            }else{
              enabled = true
            }
            return enabled
          break;
          case 2: 
            let subEnabled = true;
            // console.log('case 2:')
            // console.log(this.selectedSubCategory)
            if (this.selectedSubCategory) {
              subEnabled = false;
            }else{
              subEnabled = true
            }
            return subEnabled
          break;
          case 3: 
            return 'pls'
          break;
          default:
            break;
        }
        return 'hi'
      },
      currentStep () {
        switch (this.stepNumber) {
          case 1: 
            return {
              component: 'SelectCategory',
              title: 'Service category'
            }; 
          break;
          case 2: 
            return {
              component: 'SelectSubCategory',
              title: 'Service'
            }; 
          break;
          case 3: 
            return {
              component: 'UserInfo',
              title: this.selectedService
            }; 
          break;
          case 4: 
            return {
                component: 'FormComplete',
                title: 'Submitted',
              }; 
          break;
          default:
            return 'sorry something went wrong'
          break;
        }
      },
      backBtn(){
        switch (this.stepNumber) {
          case 1:
            return true
            break;
          case 2: 
            return false
            break;
          case 3: 
            let disabled = false;
            if (this.$store.state.services.fromServicesSection) {
              disabled = true;
            }else{
              disabled = false
            }
            return disabled
            break;

          default:
            return true
            break;
        }
        
      }
    },
    methods: {
      validate(){
        this.$store.commit('stepIncrement')
      },
      decrement(){
        this.$store.dispatch('stepDecrement')
      }
    }
  }
</script>

<style scoped>

.booking{
  width: 90vw;
}

@media only screen and (min-width: 600px) {
  .booking{
    width: 50vw
  }
} 
</style>


