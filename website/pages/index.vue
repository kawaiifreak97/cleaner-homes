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
      id="services"
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
    fetch (context) {
      if (context.store.state.storyblok.hasFetched) {
        console.log('hasFetched data')
        return 'has fetched'
      }else{
        return context.app.$storyapi.get('cdn/stories',{
          version: 'draft'
        }).then((res) => {
          console.log('fetching...')
          context.store.dispatch('storyblok', res.data.stories)
        })
      }
    },
    data(){
      return{
        title: 'Services'
      }
    },
    computed: {
      hasFetched(){
        return this.$store.state.storyblok.hasFetched
      }
    },
  }
</script>

