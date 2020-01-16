<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex 
      xs12
    >
      <v-card
        class="rounded"
        style="min-width: 30vw"
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
                >
                  format_quote
                </v-icon>
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs9>
            <v-layout
              column
            >
              <v-flex>
                <h3 style="font-weight:400">
                  {{ quote }}
                </h3>
              </v-flex>
              <v-flex>
                <h4 
                  class="primary--text"
                  style="font-weight:400"
                >
                  {{ name }}
                </h4>
              </v-flex>
              <v-flex>
                <h4 style="font-weight:200">
                  {{ company }}
                </h4>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

 <script>
 export default {
   props:{
     name:{
       required: false,
       type: String,
       default: ''
     },
     company: {
       required: false,
       type: String,
       default: ''
     },
     quote: {
       required: true,
       type: String,
       default: ''
     }
   }
 }
 </script>
 