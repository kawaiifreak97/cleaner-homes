<template>
  <form 
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot"
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="15"
      label="Name"
      prepend-icon="face"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="otherName"
      :error-messages="otherNameErrors"
      class="hide"
      label="Last name bot"
      name="bot"
      prepend-icon="face"
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="company"
      :error-messages="companyErrors"
      :counter="15"
      prepend-icon="business_center"
      label="Company name"
      @input="$v.company.$touch()"
      @blur="$v.company.$touch()"
    />
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      prepend-icon="email"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />
    <v-text-field
      v-model="number"
      :error-messages="numberErrors"
      prepend-icon="call"
      label="Phone number"
      required
      @input="$v.number.$touch()"
      @blur="$v.number.$touch()"
    />
    <v-text-field
      v-model="location"
      :error-messages="locationErrors"
      :counter="25"
      prepend-icon="add_location"
      label="Job location"
      required
      @input="$v.location.$touch()"
      @blur="$v.location.$touch()"
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
        :error-messages="dateErrors"
        label="Date of job commence"
        prepend-icon="event"
        readonly
        required
        @input="$v.date.$touch()"
        @blur="$v.date.$touch()"
      />
      <v-date-picker 
        v-model="date" 
        @input="setDate()"/>
    </v-menu>

    <v-btn 
      type="submit"
    >submit</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, numeric,} from 'vuelidate/lib/validators'

  function alphaSpace (value) {
    let reg = /^[a-zA-Z ]*$/;
    return reg.test(value)
  }
  function alphaNumSpace (value) {
    let reg = /^[a-zA-Z0-9 ]*$/;
    return reg.test(value)
  }

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, alphaSpace,  maxLength: maxLength(15) },
      otherName: { alphaSpace, maxLength: maxLength(10)  },
      company: { alphaSpace, maxLength: maxLength(15) },
      email: { required, email },
      number: { required, numeric},
      date: { required },
      location:{ required, alphaNumSpace, maxLength: maxLength(25) },
    },
    data: () => ({
      name: '',
      otherName:'',
      email: '',
      date:'',
      menu2:'',
      location: '',
      number: '',
      company: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    computed: {
      otherNameErrors(){
        const errors = []
        if (!this.$v.otherName.$dirty) return errors
        !this.$v.otherName.alphaNumSpace && errors.push('Feild can only contain numbers and letters')
        !this.$v.otherName.maxLength && errors.push('Name must be at most 10 characters long')
        return errors
      },
      locationErrors () {
        const errors = []
        if (!this.$v.location.$dirty) return errors
        !this.$v.location.required && errors.push('Job location is required')
        !this.$v.location.alphaNumSpace && errors.push('Feild can only contain numbers and letters')
        !this.$v.name.maxLength && errors.push('Name must be at most 25 characters long')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.date.$dirty) return errors
        !this.$v.date.required && errors.push('Date is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        !this.$v.name.alphaSpace && errors.push('Name can only contain letters.')
        return errors
      },
      companyErrors () {
        const errors = []
        if (!this.$v.company.$dirty) return errors
        !this.$v.company.maxLength && errors.push('Company name must be at most 15 characters long')
        !this.$v.company.alphaSpace && errors.push('Company name can only contain letters')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      numberErrors () {
        const errors = []
        if (!this.$v.number.$dirty) return errors
        !this.$v.number.numeric && errors.push('Must be numeric value')
        !this.$v.number.required && errors.push('Phone number is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch();
        this.$store.commit('stepIncrement')
      },
      setDate(){
        this.menu2 = false;
        // this.$store.commit('setDate', this.date)
      }
    }
  }
</script>
<style scoped>
.hide{
  display: none;
}
</style>
