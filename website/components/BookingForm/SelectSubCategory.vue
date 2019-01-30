<template>
  <v-layout 
    justify-start
    row 
    wrap
    my-2 
    fill-height
  >
    hi
    
    bye
    {{ selectedCategory.services }}
    <v-flex
      v-for="subCategory in selectedCategory.services"
      :key="subCategory.name"
      xs12
      sm7 
    >
      <v-btn
        :color="selectedSubCategory.name == subCategory.name ? 'secondary' : 'white'"
        :class="{'white--text': selectedSubCategory.name == subCategory.name }"
        class="accent--text"
        round
        @click.native="selectSubCategory(selectedCategory.name, subCategory.name)"
      >
        {{ subCategory.name }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      active: true
    }
  },
  computed:{
    selectedCategory(){
      return this.$store.getters['selectedCategory']
    },
    selectedSubCategory(){
     return this.$store.getters['selectedService']
    }
    // selectedSubCategory(name){
    //   return this.$store.getters['selectedService'](name)
    // }
  },
  methods:{
    selectSubCategory( Category, subCategory){
      this.active = !this.active;

      this.$store.commit('selectSubCategory',  {
        category: Category,
        subCategory: subCategory,
        active: this.active,
        pushRoute: false
      })

    }
  }
}
</script>

