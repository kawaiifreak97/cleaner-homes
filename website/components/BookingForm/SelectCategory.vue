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
            :value="active"
            class="accent--text"
            round
            @click.native="select(toggle, active, serviceCategory.name)"
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
  computed:{
    serviceCategories(){
      return this.$store.state.services.serviceCategories
    }
  },
  mounted() {
    this.$store.commit('selectCategory', {name: 'Domestic', active: true});
  },
  methods:{
    select(toggle, active, name){
      //toggles class
      toggle(); 
      this.$store.commit('selectCategory', {name: name, active: active});
      
    }
  },
}
</script>

