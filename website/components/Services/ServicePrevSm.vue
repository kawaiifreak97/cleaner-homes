<template>
  <div class="text-xs-center">
    <v-btn
      :class="{selected : selectedService}" 
      :large= "$vuetify.breakpoint.smAndUp"
      round
      color="white"
      @click="select()"
    >
      {{ id }}
      <v-icon 
        :class="{selected : selectedService}" 
        right
        color="primary"
      >cloud_upload</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      required: true,
      type: String
    }
  },  
  data(){
    return{
      selectedService: false
    }
  },

  methods:{
    link(id){
      this.$router.push("/" + this.id)
    },
    select(id){
      this.selectedService = !this.selectedService;
    }
  },
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