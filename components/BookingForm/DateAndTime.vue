<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <h3>Date</h3>
    </v-flex>
    <v-flex xs11>
      <v-menu
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker without buttons"
          prepend-icon="event"
          readonly
        />
        <v-date-picker 
          v-model="date" 
          @input="setDate()"/>
      </v-menu>
    </v-flex>
    <v-flex xs12>
      <h3>Time</h3>
    </v-flex>
    <v-flex xs11>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu1"
        :nudge-right="40"
        :return-value.sync="time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Picker in menu"
          prepend-icon="access_time"
          readonly
        />
        <v-time-picker
          v-if="menu1"
          v-model="time"
          full-width
          @change="$refs.menu.save(time); setTime()"
        />
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      time: null,
      menu1: false,
      date: '',
      menu2: false,
    }
  },
  methods:{
    setDate(){
      this.menu2 = false;
      this.$store.commit('setDate', this.date)
    },
    setTime(){
      this.$store.commit('setTime', this.time)
    }
  }
}
</script>
