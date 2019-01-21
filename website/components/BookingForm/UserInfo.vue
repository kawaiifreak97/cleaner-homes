<template>
  <v-layout
    row
    wrap
  >
    <!-- <v-flex 
      xs12
      mb-1>
      <h3>Job location</h3>
    </v-flex> -->

    <v-flex xs11>
      <form @submit.prevent="validateBeforeSubmit">
        <v-text-field
          v-validate="'required|max:15|alpha'"
          v-model="name"
          :counter="10"
          :error-messages="errors.collect('name')"
          prepend-icon="face"
          label="Name"
          data-vv-name="name"
          required
        />
        <v-text-field
          v-validate="'alpha|max:15'"
          v-model="company"
          :error-messages="errors.collect('company')"
          prepend-icon="business_center"
          label="Company name"
          data-vv-name="company"
        />
        <v-text-field
          v-validate="'required|email'"
          v-model="email"
          :error-messages="errors.collect('email')"
          prepend-icon="email"
          label="E-mail"
          data-vv-name="email"
          required
        />
        <v-text-field
          v-validate="'required|numeric'"
          v-model="number"
          :error-messages="errors.collect('number')"
          prepend-icon="call"
          label="Phone number"
          data-vv-name="number"
        />
        <v-text-field
          v-validate="'required|alpha'"
          v-model="location"
          :error-messages="errors.collect('location')"
          prepend-icon="add_location"
          label="Job location"
          data-vv-name="location"
        />
        <v-menu
          :close-on-content-click="false"
          v-model="menu2"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Date of job commence"
            prepend-icon="event"
            data-vv-name="date"
            readonly
          />
          <v-date-picker 
            v-model="date" 
            @input="setDate()"/>
        </v-menu>
        <v-btn
          color="success"
          depressed
          type="submit"
        >
          Submit
        </v-btn> 
      </form>
    </v-flex>

  </v-layout>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      company: '',
      email: '',
      number: '',
      location: '',
      date: '',
      menu2: false,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),
    mounted () {
      this.$validator.localize('en', this.dictionary);

      this.$nuxt.$on('validateForm', function(){
        console.log('hi' + this.$validator.validateAll() )
        // this.test()
        // this.submit();
        this.$validator.validateAll()
      });
    },
    created() {
      // $on method will receive the updated count value from the sender component
      // this.$nuxt.$on('validateForm', function(){
      //   console.log('hi' )
      //   // this.test()
      //   // this.submit();
      //   this.$validator.validateAll()
      // });

    },
    beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('validateForm');
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            console.log('hi')
          this.$store.commit('stepIncrement')
            return;
          } else{
            alert('Correct them errors!');
          }
        });
      },
      setDate(){
        this.menu2 = false;
        this.$store.commit('setDate', this.date)
      },
    }
  }
</script>