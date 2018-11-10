<template>
  <v-item-group>
    <v-layout 
      justify-start
      row 
      wrap
      my-2 
      fill-height
    >
      <!-- <h1>{{ selectedCategory.subCategories }}</h1> -->
      <v-flex
        v-for="subCategory in selectedCategory.subCategories"
        :key="subCategory.name"
        xs12
        sm7 
      >
        <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :color="active ? 'secondary' : 'white'"
            :class="{'white--text': active}"
            class="accent--text"
            round
            @click.native="toggle"
          >
            {{ subCategory.name }}
          </v-btn>
        </v-item>
      </v-flex>
    </v-layout>
  </v-item-group>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'selectedCategory',
    ])
  }
}
</script>

