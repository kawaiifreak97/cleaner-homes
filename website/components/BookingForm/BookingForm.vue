<template>
  <v-card
    class="mx-auto rounded"
    max-width="90vw"
    width="50vw"
  >
    <v-card-title 
      v-show="step <= 3"
      class=" headline font-weight-regular justify-space-between">
      <span class="">{{ currentStep.title }}</span>
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

    <v-card-actions v-show="step <= 3">
      <v-btn
        :disabled="step === 1 "
        flat
        @click="decrement()"
      >
        Back
      </v-btn>
      <v-spacer/>

      <v-btn
        v-if="step <= 2"
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
      activeCategory(){
        return this.$store.state.services.activeCategory
      },
      activeSubCategory(){
        return this.$store.state.services.activeSubCategory
      },
      step(){
        return this.$store.state.bookingForm.step
      },
      isValid () {
        switch (this.step) {
          case 1:
            let enabled = true;
            if (this.activeCategory) {
              enabled = false;
            }else{
              enabled = true
            }
            return enabled
          break;
          case 2: 
            let subEnabled = true;
            if (this.activeSubCategory) {
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
      steps(){
        return this.$store.state.bookingForm.steps
      },
      currentStep () {
        switch (this.step) {
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
              title: this.selectedSubCategory.name
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
      }
    },
    methods: {
      validate(){
        this.$store.commit('stepIncrement')
      },
      decrement(){
        this.$store.commit('stepDecrement')
      }
    }
  }
</script>

