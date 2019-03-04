<template>
  <form 
    name="booking-form"
    method="post"
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="form.name"
      :error-messages="nameErrors"
      :counter="15"
      label="Name"
      name="name"
      prepend-icon="face"
      required
      @input="$v.form.name.$touch()"
      @blur="$v.form.name.$touch()"
    />
    <input type="hidden" name="booking-form" value="le-form" />
    <v-text-field
      v-model="form.otherName"
      :error-messages="otherNameErrors"
      class="hide"
      label="bot"
      name="bot"
      prepend-icon="face"
      @input="$v.form.otherName.$touch()"
      @blur="$v.form.otherName.$touch()"
    />
    <v-text-field
      v-model="form.company"
      :error-messages="companyErrors"
      :counter="15"
      prepend-icon="business_center"
      label="Company name"
      name="company"
      @input="$v.form.company.$touch()"
      @blur="$v.form.company.$touch()"
    />
    <v-text-field
      v-model="form.email"
      :error-messages="emailErrors"
      label="Email"
      name="email"
      prepend-icon="email"
      required
      @input="$v.form.email.$touch()"
      @blur="$v.form.email.$touch()"
    />
    <v-text-field
      v-model="form.number"
      :error-messages="numberErrors"
      prepend-icon="call"
      label="Phone number"
      name="number"
      required
      @input="$v.form.number.$touch()"
      @blur="$v.form.number.$touch()"
    />
    <v-text-field
      v-model="form.location"
      :error-messages="locationErrors"
      :counter="25"
      prepend-icon="add_location"
      label="Job location"
      name="location"
      required
      @input="$v.form.location.$touch()"
      @blur="$v.form.location.$touch()"
    />
    <v-menu
      :close-on-content-click="false"
      v-model="form.menu2"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
      
    >
      <v-text-field
        slot="activator"
        v-model="form.date"
        :error-messages="dateErrors"
        label="Date of job commence"
        name="date"
        prepend-icon="event"
        readonly
        required
        @input="$v.form.date.$touch()"
        @blur="$v.form.date.$touch()"
      />
      <v-date-picker 
        v-model="form.date" 
        @input="setDate()"/>
    </v-menu>

    <v-btn 
      type="submit"
    >submit</v-btn>
  </form>
</template>

<script>
  import axios from "axios";
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
      form:{
        name: { required, alphaSpace,  maxLength: maxLength(15) },
        otherName: { alphaSpace, maxLength: maxLength(10)  },
        company: { alphaSpace, maxLength: maxLength(15) },
        email: { required, email },
        number: { required, numeric},
        date: { required },
        location:{ required, alphaNumSpace, maxLength: maxLength(25) },
      }
      
    },
    data: () => ({
      form:{
        name: '',
        otherName:'',
        email: '',
        date:'',
        menu2:'',
        location: '',
        number: '',
        company: '',
      },
    }),

    computed: {
      otherNameErrors(){
        const errors = []
        if (!this.$v.form.otherName.$dirty) return errors
        !this.$v.form.otherName.alphaNumSpace && errors.push('Feild can only contain numbers and letters')
        !this.$v.form.otherName.maxLength && errors.push('Name must be at most 10 characters long')
        return errors
      },
      locationErrors () {
        const errors = []
        if (!this.$v.form.location.$dirty) return errors
        !this.$v.form.location.required && errors.push('Job location is required')
        !this.$v.form.location.alphaNumSpace && errors.push('Feild can only contain numbers and letters')
        !this.$v.form.name.maxLength && errors.push('Name must be at most 25 characters long')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.form.date.$dirty) return errors
        !this.$v.form.date.required && errors.push('Date is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.form.name.$dirty) return errors
        !this.$v.form.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.form.name.required && errors.push('Name is required.')
        !this.$v.form.name.alphaSpace && errors.push('Name can only contain letters.')
        return errors
      },
      companyErrors () {
        const errors = []
        if (!this.$v.form.company.$dirty) return errors
        !this.$v.form.company.maxLength && errors.push('Company name must be at most 15 characters long')
        !this.$v.form.company.alphaSpace && errors.push('Company name can only contain letters')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.form.email.$dirty) return errors
        !this.$v.form.email.email && errors.push('Must be valid e-mail')
        !this.$v.form.email.required && errors.push('E-mail is required')
        return errors
      },
      numberErrors () {
        const errors = []
        if (!this.$v.form.number.$dirty) return errors
        !this.$v.form.number.numeric && errors.push('Must be numeric value')
        !this.$v.form.number.required && errors.push('Phone number is required')
        return errors
      }
    },

    methods: {
      encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      submit () {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.$store.commit('stepIncrement');
          const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          axios.post(
            "/",
            this.encode({
              "form-name": "booking-form",
              ...this.form
            }),
            axiosConfig
          );
        }
        
      },
      setDate(){
        this.menu2 = false;
      }
    }
  }
</script>
<style scoped>
.hide{
  display: none;
}
</style>
