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
        v-for="serviceCategory in serviceCategories"
        :key="serviceCategory.name"
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
            {{ serviceCategory.name }}
          </v-btn>
        </v-item>
      </v-flex>
    </v-layout>
  </v-item-group>
</template>

<script>
export default {
  data(){
    return{
      serviceCategories:[
        {
          name: 'Farm spraying'
        },
        {
          name: 'Commercial cleaning'
        },
        {
          name: 'Domestic cleaning'
        }
      ]
    }
  }
}
</script>

