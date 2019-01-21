<template>
  <div>
    
  </div>
</template>

<script>
import ServicePrev from '@/components/Services/ServicePrev'
import ServicePrevSm from '@/components/Services/ServicePrevSm'
  export default {
    components:{
      ServicePrev,
      ServicePrevSm
    },
    data() {
      return {
        tabs: null,
        overlay: false,
        tabStart: '',
        model: '#Domestic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    computed: {
      serviceCategories() {
        return this.$store.state.services.serviceCategories
      },
    }
  }
</script>
<style scoped>
  .tab-text{
    font-size: 0.75em;
  }
  @media only screen and (min-width: 600px) {
    .tab-text{
      font-size: 1em;
    }
  }
</style>



