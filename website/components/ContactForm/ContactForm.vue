<template>
  <v-card class="rounded elevation-20">
    <v-layout
      row
      wrap
      justify-center
      fill-height
      align-center
      class="text-xs-center"
    >
      <v-flex 
        xs12
        my-2
      >
        <h1>
          Call us on 
        </h1>
        <h3 
          style="font-weight: 400"
          color="primary"
        >{{ phone }}</h3>
      </v-flex>
      <v-flex   
        xs8
      >
        <v-layout
          row
          justify-center
          fill-height
          align-center
        >
          <v-flex xs3>
            <v-divider />
          </v-flex>
          <v-flex 
            xs5
          >
            <div class="text-xs-center">
              <logo/>
            </div>
          </v-flex>
          <v-flex xs3>
            <v-divider />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex 
        xs12
        my-2
      >
        <h1> Email us at </h1>

        <a href="mailto:gbexta1@gmail.com?subject=service inquiry">
          <h3 
            style="font-weight: 400"
          >
            {{ email }}
          </h3>
        </a>
      </v-flex>
    </v-layout>
  </v-card>

</template>

<script>
import { mapState } from 'vuex'
import logo from '@/assets/svg/logo-primary.svg'
export default {
  components:{
    logo
  },
  computed: mapState({
    phone: state => state.contact.contactLinks[0].value,
    email: state => state.contact.contactLinks[1].value
  })
}
</script>
