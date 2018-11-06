<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <v-layout
        row
        wrap
      >
        <v-flex 
          xs12
        >
          <h3>Sq metres</h3>
        </v-flex>
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
        <v-flex 
          xs12
          mb-3
        >
          <h3>Rooms</h3>
        </v-flex>
        
        <v-flex 
          xs12
          sm11
        >
          <v-layout
            style="overflow-x: scroll"
            row
            justify-space-between
            ml-1
          >
            <v-flex 
              v-for="roomType in roomTypes"  
              :key="roomType.name" 
              xs6
              sm3
              mx-1
            > 
              <Room
                :name="roomType.name"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
      py-2>
      <v-layout
        row
        wrap
      >
        <v-flex 
          xs12
          mb-3
        >
          <h3>Add ons</h3>
        </v-flex>
        
        <v-flex 
          xs12
          sm11
        >
          <v-layout
            row
            justify-space-between
            style="overflow-x: scroll"
          >
            <v-flex 
              v-for="Addon in Addons"  
              :key="Addon.name" 
              xs6
              sm3
              mx-1
              my-1
            > 
              <Addon :name="Addon.name"/>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Room from '@/components/BookingForm/ServiceInfo/Room'
import Addon from '@/components/BookingForm/ServiceInfo/Addon'
export default {
  components:{
    Room,
    Addon
  },
  data(){
    return{
      Addons:[
        {
          name: 'windows interior'
        },
        {
          name: 'oven'
        },
        {
          name: 'windows'
        },
        {
          name: 'ho'
        },
        {
          name: 'hso'
        }
      ],
      roomTypes:[
        {
          name: 'Bedrooms'
        },
        {
          name: 'Kitchens'
        },
        {
          name: 'Bathrooms'
        },
        {
          name: 'Story'
        }
      ],
      slider: 45,
      number: 4,
    }
  }
}
</script>


