<template>
  <v-item-group>
    <v-layout 
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
        <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :color="active ? 'secondary' : 'white'"
            :class="{'white--text': active}"
            :value="active"
            class="accent--text"
            round
            @click="select(toggle, active, selectedCategory.name, subCategory.name)"
          >
            {{ subCategory.name }}
          </v-btn>
        </v-item>
      </v-flex>
    </v-layout>
  </v-item-group>
</template>

<script>
export default {
  computed:{
    selectedCategory(){
      return this.$store.getters['selectedCategory']
    },
  },
  methods:{
    select(toggle, active, Category, subCategory){

      toggle();

      let changeActive = !active

      this.$store.commit('selectSubCategory',  {
        category: Category,
        subCategory: subCategory,
        active: changeActive,
      })

    }
  }
}
</script>

