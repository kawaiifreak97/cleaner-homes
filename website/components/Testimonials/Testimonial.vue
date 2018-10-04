<template>
  <v-card
    class="rounded"
    width="40vw"
  >
    <v-layout
      py-3
      row
      justify-center
    >
      <v-flex xs3>
        <v-layout 
          fill-height
          row
          align-start
          justify-center
        >
          <div class="text-xs-center">
            <v-icon 
              color="black"
              large
            >format_quote</v-icon>
          </div>
          
        </v-layout>
      </v-flex>
      <v-flex xs8>
        <v-layout
          column
        >
          <v-flex>
            <h1>clients quote</h1>
          </v-flex>
          <v-flex>
            <h4 class="primary--text">clients name</h4>
          </v-flex>
          <v-flex>
            <h4>clients position and company  </h4>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>
