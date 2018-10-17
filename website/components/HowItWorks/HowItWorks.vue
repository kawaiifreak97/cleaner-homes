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
        :step="2"
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
          title: 'Contact us',
          description: 'Call, email or fill out our booking form'
        },
        {
          title: 'Free quote',
          description: 'Well come and quote the job for free!'
        },
        {
          title: 'Rest easy',
          description: 'Well have the job finished in not time!'
        }
      ]

    }
  }
}
</script>



