<template>
  <h2 class="text-xs-center letitle accent--text my-4">{{ text }}</h2>
</template>

<script>
export default {
  props:{
    text:{
      required: true,
      type: String
    }
  }
}
</script>

<style>
  .letitle{
    font-size: 3em !important;
  }
</style>