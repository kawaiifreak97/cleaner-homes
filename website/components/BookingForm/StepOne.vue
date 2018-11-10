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
            @click.native="select(toggle, serviceCategory.name)"
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
      yes:'',
    }
  },
  computed:{
    serviceCategories(){
      return this.$store.state.bookingForm.serviceCategories
    }
  },
  watch: {
    serviceCategory: function(){
      console.log(' sdk')
    }
  },
  methods:{
    select(toggle, name){
      
      //toggles class
      toggle(); 

      this.$store.commit('selectCategory', name)

    }
  }
  
}
</script>

