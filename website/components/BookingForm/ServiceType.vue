<template>
  <!-- <v-item-group> -->
  <v-layout 
    justify-start
    row 
    wrap
    my-2 
    fill-height
  >
    <!-- <h1>{{ selectedCategory }}</h1> -->
    <v-flex
      v-for="subCategory in selectedCategory.subCategories"
      :key="subCategory.name"
      xs12
      sm7 
    >
      <!-- <v-item> -->
      {{ selectedSubCategory }}
      <v-btn
        :color="selectedSubCategory.name == subCategory.name ? 'secondary' : 'white'"
        :class="{'white--text': selectedSubCategory.name == subCategory.name }"
        class="accent--text"
        round
        @click.native="selectSubCategory(selectedCategory, subCategory.name)"
      >
        {{ subCategory.name }}
      </v-btn>
      <!-- </v-item> -->
    </v-flex>
  </v-layout>
  <!-- </v-item-group> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'selectedCategory',
      'selectedSubCategory'
    ])
  },
  methods:{
    selectSubCategory( Category, subCategory){


      // console.log(name)

      this.$store.commit('selectSubCategory',  {
        thisSubCategory: subCategory,
        thisCategory: Category
      })

    }
  }
}
</script>

