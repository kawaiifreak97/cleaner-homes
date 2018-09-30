<template>
  <div class="testuk">
    <v-toolbar
      fixed
      dark
      flat 
      color="transparent"
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
        dense>

        <v-list-tile
          v-for="link in links"
          :key="link.name"
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
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        links:[
          {
            name: 'services',
            path:'services'
            
          },
          {
            name: 'contact',
            path:'services'
          },
          {
            name: 'book now',
            path:'services'
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
  @media only screen and (min-width: 600px) {
    .burger{
      display: none;
    }
    .logo{
      display: initial;
    }
  }
</style>
