<template>
  <v-layout 
    v-if="this.$store.state.services.activeCat"
    justify-start
    row 
    wrap
    my-2 
    fill-height
  >
    <v-flex
      v-for="subCategory in selectedCategory.services"
      :key="subCategory.name"
      xs12
      sm7 
    >
      
      <v-btn
        :color="subCategory.content.active ? 'secondary' : 'white'"
        :class="{'white--text': subCategory.content.active}"
        :value="subCategory.content.active"
        class="accent--text"
        round
        @click="select(subCategory.name)"
      >
        {{ subCategory.name }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed:{
    selectedCategory(){
      return this.$store.getters['selectedCategory']
    },
  },
  methods:{
    select(subCategory){
      this.$store.dispatch('selectSubCategory',  {
        subCategory: subCategory,
      })

    }
  }
}
</script>

