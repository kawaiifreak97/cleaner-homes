<template>
  <v-layout 
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
    <v-flex xs6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla fugit nihil enim tempora est eligendi voluptas magnam architecto a nobis corporis nostrum, dicta repudiandae itaque, incidunt cumque dolore quae.
      </p>
    </v-flex>

  </v-layout>
  
</template>

<script>
export default {
  data(){
    return{
      title: 'About Us'
    }
  }
}
</script>
