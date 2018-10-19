<template>
  <v-img
    src="http://www.riversongcochrane.com/assets/HeroImages/15-SRV-108-Riversong-Homepage-Hero-Banner.jpg"
    gradient="to top right, rgba(48, 211, 197, 1), rgba(18, 235, 75, 1)"
    style="height:25vh"
  >
    <v-layout 
      row
      wrap
      justify-center
      fill-height
      align-center
      class="text-xs-center white--text"
    >
      <v-flex 
        xs12 
        sm6
      >
        <div class="add-text">
          What are you <br>
          waiting for?
        </div>
      </v-flex>
      <v-flex 
        xs12 
        sm6
      >
        <Button :link="'bookingPage'">Book now</Button>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<style scoped>
  .add-text{
    font-size: 2rem;
    font-weight: bold;
  }
  @media only screen and (min-width: 600px) {
  .add-text{
    font-size: 2.4rem;
  }
}

</style>

