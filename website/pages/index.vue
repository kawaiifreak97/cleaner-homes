<template>
  <v-layout 
    row 
    wrap
  >
    <v-flex xs12>
      <Hero />
    </v-flex>
    <v-flex 
      xs12
    >
      <HowItWorks />
    </v-flex>
    <v-flex 
      xs12
    >
      <v-layout
        row
        wrap
        justify-center
      >
        <v-flex xs12>
          <Title>{{ title }}</Title>
        </v-flex>
        <v-flex xs12>
          <nuxt-child/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
    >
      <About/>
    </v-flex>
    <v-flex 
      xs12
    >
      <Testimonials/>
    </v-flex>
    <v-flex 
      xs12
      mb-4
    >
      <Add/>
    </v-flex>

  </v-layout>
</template>

<script>
  export default{
    data(){
      return{
        title: 'Services'
      }
    }
  }
</script>

