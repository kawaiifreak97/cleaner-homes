<template>
  <div class="text-xs-center">
    <v-btn
      :class="{selected : selectedCategory}" 
      :large= "$vuetify.breakpoint.smAndUp"
      round
      color="white"
      @click="link(id)"
    >
      <p 
        :class="{selected : selectedCategory}" 
        style="margin-bottom: 0 !important">
        {{ id }}
      </p>
      
      <v-icon 
        :class="{selected : selectedCategory}" 
        right
        color="accent"
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
  computed:{
    selectedCategory(){
      return this.$store.getters['selectedCategory'](this.id)
    }
  },
  methods:{
    link(id){
      this.$store.dispatch('bookingForm/selectCategory', this.id)
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
  color: #12EB4B !important;
}
</style>  