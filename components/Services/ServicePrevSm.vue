<template>
  <div class="text-xs-center">
    <v-btn
      :class="{selected : selectedService}" 
      :large= "$vuetify.breakpoint.smAndUp"
      round
      color="white"
      @click="selectService(id)"
    >
      {{ name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      required: true,
      type: String
    },
    name:{
      required: true,
      type: String
    },
  },  
  data(){
    return{
      selectedService: false,
      active: false,
    }
  },  
  methods:{
    selectService(id){
      this.$store.commit('selectService', {
        pushRoute: true,
        service: id
      })
    }
  }
}
</script>
<style scoped>
.small-card:hover{
  color: #30d3c5;
}
.small-title{
  font-weight: 600;
}
.selected{
  background-color: #12EB4B !important;
  color: white !important;
}
</style>  