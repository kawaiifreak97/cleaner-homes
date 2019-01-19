<template>
  <v-layout 
    justify-start
    row 
    wrap
    my-2 
    fill-height
  >
    <v-flex
      v-for="subCategory in selectedCategory.subCategories"
      :key="subCategory.name"
      xs12
      sm7 
    >
      <v-btn
        :color="selectedSubCategory.name == subCategory.name ? 'secondary' : 'white'"
        :class="{'white--text': selectedSubCategory.name == subCategory.name }"
        class="accent--text"
        round
        @click.native="selectSubCategory(selectedCategory, subCategory.name)"
      >
        {{ subCategory.name }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      active: true
    }
  },
  computed:{
    ...mapGetters([
      'selectedCategory',
      'selectedSubCategory'
    ])
  },
  methods:{
    selectSubCategory( Category, subCategory){

      this.active = !this.active;

      this.$store.commit('selectSubCategory',  {
        thisSubCategory: subCategory,
        thisCategory: Category,
        active: this.active
      })

    }
  }
}
</script>

