<template>
  <v-layout 
    id="scrolltest"
    row
    wrap
    justify-center
    class="text-xs-center"
  >
    <v-flex xs10>
      <Title>
        {{ title }}
      </Title>
    </v-flex>
    <v-flex 
      xs10 
      sm6
    >
      <p> {{ description }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    title: state =>  state.about.title,
    description: state => state.about.description
  })
}
</script>
