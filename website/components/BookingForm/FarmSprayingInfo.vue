<template>
  <v-layout
    row
    wrap
  >
    <v-flex 
      xs12
      mb-1>
      <h3>Job info</h3>
    </v-flex>

    <v-flex xs12>
      <form>
        <v-text-field
          v-validate="'required|max:15'"
          v-model="days"
          :error-messages="errors.collect('days')"
          label="How many days work?"
          data-vv-name="days"
          required
        />
        <v-text-field
          v-validate="'required'"
          v-model="conditons"
          :error-messages="errors.collect('conditions')"
          label="Describe ground conditions"
          data-vv-name="conditions"
          required
        />
        <v-checkbox
          v-validate="'required'"
          v-model="water"
          :error-messages="errors.collect('water')"
          value="1"
          label=" Access to water tank + pump"
          data-vv-name="water"
          type="water"
          required
        />
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
      days: '',
      conditions: '',
      water: null,
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