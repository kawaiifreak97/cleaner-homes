<template>
  <div >
    <v-toolbar
      :color="HeaderColor"
      scroll-off-screen
      fixed
      dark
      flat 
    >
      <v-toolbar-side-icon 
        class="burger"
        @click.stop="drawer = !drawer"
      />

      <div text-xs-center>
        <v-btn
          nuxt
          to="/"
          flat 
          icon
          class="logo"
        >
          <v-icon>home</v-icon>
        </v-btn>
      </div>

      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-scroll-to="'#' + link.scrollto"
          v-for="link in links"
          :key="link.name"
          :to="'/' + link.path"
          flat
          nuxt
          
        >
          {{ link.name }}
        </v-btn>       
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        class="pt-4" 
        dense
      >
        <v-list-tile>
          <v-list-tile-action>
            <v-btn
              icon
              fab
              nuxt
              to="/"
            >
              <v-icon>home</v-icon>
            </v-btn>          
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>LOGO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="link in links"
          :key="link.name"
          class="v-list-link"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    props:{
      HeaderColor:{
        required: true,
        type: String
      }
    },
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        links:[
          {
            name: 'How it works',
            path:'',
            scrollto: 'how-it-works'
          },
          {
            name: 'Book now',
            path:'bookingPage',
            scrollto: ''
            
          }
        ]
      }
    }
  }
 
</script>

<style scoped>
  .logo{
      display: none
    }
  .testuk{
    top:10;
    z-index:100;
  }
  .v-list-link:hover{
    color: #30d3c5;
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) {
    .burger{
      display: none;
    }
    .logo{
      display: initial;
    }
  }
</style>
