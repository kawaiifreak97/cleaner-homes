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
        :title="step.content.step_title"
        :description="step.content.step_description"
        :step="step.content.step_number"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Card from '@/components/HowItWorks/Card'
export default {
  components:{
    Card
  },
  computed: {
    title(){
      return this.$store.state.howItWorks.title
    },
    steps(){
      return this.$store.state.howItWorks.steps
    }
  },
}
</script>



