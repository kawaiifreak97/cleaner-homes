<template>
  <v-layout 
    justify-center
    row
    mb-4
    pb-4
  >
    <v-flex xs6>
      <v-card 
        class="rounded"
        width="50vw">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          height="200px"
          style="position:relative"
        >
          <v-btn
            class="buttonuk"
            flat
            icon
            fab
          >
            <v-icon 
              class="white--text"
              large>
              arrow_back
            </v-icon>
          </v-btn>
        </v-img>

        <v-card-title style="position:relative">
          <v-btn
            absolute
            right
            top
            color="white"
            round
            class="primary--text"
          >
            book now
          </v-btn>
          <div> 
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
          <v-spacer/>
          <v-btn 
            icon 
            @click="show = !show"
          >
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-slide-y-transition>
          <v-layout   
            v-show="show"
            row
            wrap
            px-2
            pb-2
          >
            <v-flex
              v-for="tag in tags"  
              :key="tag.name"
              xs3
            >
              <v-chip 
                color="primary"
                class="white--text"
              > 
                <span style="font-size: 0.75em;">{{ tag.name }}</span>
              </v-chip>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      show: false,
      tags:[
        {
          name: 'windows'
        },
        {
          name: 'windows'
        },
        {
          name: 'windows'
        },
        {
          name: 'windows'
        },
        {
          name: 'windows'
        },
      ]
    }
  }
}
</script>

<style>
  .buttonuk{
    position: relative;
    top: 0px;
    left: 0px;
  }
</style>


