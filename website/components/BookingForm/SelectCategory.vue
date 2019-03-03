<template>
  <v-layout 
    justify-start
    row 
    wrap
    my-2 
    fill-height
  >
    <v-flex
      v-for="serviceCategory in serviceCategories"
      :key="serviceCategory.name"
      xs12
      sm7 
    >
      <v-btn
        :color="serviceCategory.active ? 'secondary' : 'white'"
        :class="{'white--text': serviceCategory.active}"
        :value="serviceCategory.active"
        class="accent--text"
        round
        @click.native="select(serviceCategory.name)"
      >
        {{ serviceCategory.name }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed:{
    serviceCategories(){
      return this.$store.state.services.serviceCategories
    },
  },
  methods:{
    select(name){
       this.$store.dispatch('selectCategory', {name: name});
    }
  },
}
</script>

