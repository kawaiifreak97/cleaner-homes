<template>
  <div class="text-xs-center">
    <v-btn
      round
      color="white"
      large
    >
      {{ id }}
      <v-icon 
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
  methods:{
    link(id){
      this.$router.push("/" + this.id)
    }
  },
}
</script>
<style>
.small-card:hover{
  color: #30d3c5;
}
.small-title{
  font-weight: 600;
}
</style>  