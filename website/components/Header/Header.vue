<template>
  <div>
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
      <div 
        text-xs-center
      >
        <a
          nuxt
          href="/"
          class="logo"     
        >
          <logoWhite />
        </a>
      </div>

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="link in links"
          :key="link.name"
          v-scroll-to="'#' + link.scrollto"
          :to="link.path"
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
            <a
              nuxt
              to="/"
              @click.stop="drawer = !drawer"
            >
              <logo />
            </a>          
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <span style="font-weight: 600">
                Cleaner Homes and Pastures
              </span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="link in navLinks"
          :key="link.name"
          class="v-list-link"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title
              v-scroll-to="'#' + link.scrollto"
              @click.stop="push(link.path)"
            >
              {{ link.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import logo from '@/assets/svg/logo-primary.svg'
import logoWhite from '@/assets/svg/logo-white.svg'
  export default {
    components:{
      logo,
      logoWhite
    },
    props:{
      headerColor:{
        required: true,
        type: String
      }
    },
    data () {
      return {
        drawer: null,
        scrollto: '#services',  
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    computed:{
      links(){
        if (this.$route.path == '/bookingPage') {
          return [{ name: 'home', path: '/', scrollto: ''}]
        } else{
          return this.$store.state.header.homeLinks
        }
      },
      navLinks(){
        if (this.$route.path == '/bookingPage') {
          return [{ name: 'home', path: '/', scrollto: ''}]
        } else{
          return this.$store.state.header.navLinks
        }
      }
    },
    methods:{
      push(path){
        console.log('hi')
        this.drawer = !this.drawer;
        $nuxt.$router.push(path)
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
