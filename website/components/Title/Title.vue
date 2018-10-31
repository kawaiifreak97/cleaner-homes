<template>
  <h2 class="text-xs-center letitle grey-darken-3--text my-4">
    <slot>Title</slot>
  </h2>
</template>

<style>
  .letitle{
    font-size: 2.5em ;
  }
  @media only screen and (min-width: 600px) {
  .leTitle{
    font-size: 3em;
  }
}
</style>