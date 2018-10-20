<template>
  <v-layout 
    id="how-it-works"
    row
    wrap
    justify-center
    
  > 
    <v-flex xs12>
      <Title>
        {{ title }}
      </Title>
    </v-flex>
    <v-flex 
      v-for="step in steps"
      :key="step.title"
      xs12
      sm3
    >
      <Card
        :title="step.title"
        :description="step.description"
        :step="3"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Card from '@/components/HowItWorks/card'
import {mapState} from 'vuex'
export default {
  components:{
    Card
  },
  computed: mapState({
    title: state => state.howItWorks.title,
    steps: state => state.howItWorks.steps
  })
}
</script>



