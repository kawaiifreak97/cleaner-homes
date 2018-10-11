<template>
  <v-stepper 
    v-model="e1"
    verticle
  >
    <v-stepper-header>
      <v-stepper-step 
        :complete="e1 > 1" 
        step="1"
        editable
      >Service</v-stepper-step>

      <v-divider/>

      <v-stepper-step 
        :complete="e1 > 2" 
        step="2"
        editable
      >
        Service
      </v-stepper-step>

      <v-divider/>

      <v-stepper-step 
        editable
        step="3"
      >options</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-layout 
          row 
          wrap
          justify-center
          my-2 
          fill-height
        >
          <v-flex
            v-for="service in services"
            :key="service.name"
            xs8
          >
            <ServicePrev :id="service.name" />
          </v-flex>
        </v-layout>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-layout 
          row 
          wrap
          justify-center
          my-2 
          fill-height
        >
          <v-flex
            v-for="service in services"
            :key="service.name"
            xs8
          >
            <ServicePrevSm :id="service.name" />
          </v-flex>
        </v-layout>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-layout
          row
          wrap
        >
          <v-flex xs12>
            <v-layout
              row
              wrap
            >
              <h3>Sq metres</h3>
              <v-flex xs12>
                <v-slider
                  v-model="slider"
                  thumb-label="always"
                />
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout
              row
              wrap
            >
              <v-flex xs12>
                <h3>Rooms</h3>
              </v-flex>
              
              <v-flex xs4>
                <v-card class="rounded">
                  <v-layout
                    row
                    wrap
                    justify-center
                    class="text-xs-center"
                  >
                    <v-flex xs12>
                      <v-icon 
                        large
                        class="primary--text"
                        style="font-size: 3em"
                      >
                        home
                      </v-icon>
                    </v-flex>
                    <v-flex xs12>
                      <v-subheader>
                        {{ number }} Bedrooms
                      </v-subheader>
                    </v-flex>
                    <v-flex xs12>
                      <v-layout
                        row
                        fill-height
                        justify-center
                        class="primary border-bottom"
                      >
                        <v-flex xs6>
                          <v-icon 
                            color="white"
                            large
                          >
                            add
                          </v-icon>
                        </v-flex>
                        <v-flex xs6>
                          <v-icon 
                            color="white"
                            large
                          >
                            remove
                          </v-icon>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import ServicePrevSm from '@/components/Services/ServicePrevSm'
import ServicePrev from '@/components/Services/ServicePrev'
  export default {
    components:{
      ServicePrevSm,  
      ServicePrev
    },
    data () {
      return {
        number: 4,
        slider: 45,
        e1: 3,
        services:[
          {
            name: 'Farm spraying'
          },
          {
            name: 'Commercial cleaning'
          },
          {
            name: 'Domestic cleaning'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.border-bottom{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>

