<template>
  <v-layout 
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
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Card from '@/components/HowItWorks/card'
export default {
  components:{
    Card
  },
  data(){
    return{
      title: 'How it works',
      steps:[
        {
          title: 'Make a Booking',
          description: 'nfdfjsdofsldnljsdn'
        },
        {
          title: 'Make a Booking',
          description: 'nfdfjsdofsldnljsdn'
        },
        {
          title: 'Make a Booking',
          description: 'nfdfjsdofsldnljsdn'
        }
      ]

    }
  }
}
</script>



