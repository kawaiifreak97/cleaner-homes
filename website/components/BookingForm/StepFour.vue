<template>
  <v-layout
    row
    wrap
  >
    <v-flex 
      xs12
      mb-1>
      <h3>Job location</h3>
    </v-flex>

    <v-flex xs12>
      <form>
        <v-text-field
          v-validate="'required|max:15'"
          v-model="name"
          :counter="10"
          :error-messages="errors.collect('name')"
          label="Name"
          data-vv-name="name"
          required
        />
        <v-text-field
          v-validate="'max:10'"
          v-model="company"
          :counter="10"
          :error-messages="errors.collect('company')"
          label="Company name"
          data-vv-name="company"
          required
        />
        <v-text-field
          v-validate="'required|email'"
          v-model="email"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        />
        <v-text-field
          v-validate="'required|number'"
          v-model="number"
          :error-messages="errors.collect('number')"
          label="Phone number"
          data-vv-name="number"
          required
        />
        <v-text-field
          v-validate="'required'"
          v-model="location"
          :error-messages="errors.collect('location')"
          label="Job location"
          data-vv-name="location"
          required
        />
        <!-- <v-select
          v-validate="'required'"
          :items="items"
          v-model="select"
          :error-messages="errors.collect('select')"
          label="Select"
          data-vv-name="select"
          required
        />
        <v-checkbox
          v-validate="'required'"
          v-model="checkbox"
          :error-messages="errors.collect('checkbox')"
          value="1"
          label="Option"
          data-vv-name="checkbox"
          type="checkbox"
          required
        /> -->
        <v-btn 
          color="primary"
          @click="submit"
        >submit</v-btn>
        <v-btn @click="clear">cancel</v-btn>
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
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
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
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>