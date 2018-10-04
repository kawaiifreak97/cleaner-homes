<template>
  <v-footer
    height="auto"
    color="#fafafa"
  >
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex xs12>
        <v-layout 
          row
          justify-center
        >
          <v-flex xs3>
            <v-layout column>
              <v-flex mb-2>
                <h4>About</h4>
              </v-flex>
              <v-flex
                v-for="link in links"
                :key="link.name"
              >
                {{ link.name }}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <v-layout column>
              <v-flex mb-2>
                <h4>Contact us</h4>
              </v-flex>
              <v-flex
                v-for="contactLink in contactLinks"  
                :key="contactLink.value"
              >
                {{ contactLink.value }}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <v-layout 
              column
              class="text-xs-center"
            >
              <v-flex 
                mb-2
              >
                <v-icon>home</v-icon>
              </v-flex>
              <v-flex>cleaner homes and pastures</v-flex>
              <v-flex mt-4>
                <v-layout 
                  row
                  justify-center
                  text-xs-center
                >
                  <v-flex
                    v-for="socialLink in socialLinks"
                    :key="socialLink.name"
                  >
                    <!-- <v-icon>{{ socialLink.name }}</v-icon> -->
                    <v-icon>home</v-icon>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex 
        xs9
        my-3
      > 
        <div>
          <v-divider />
        </div>
      </v-flex>

      <v-flex xs9>
        <v-layout
          row
          justify-space-between  
        >
          <v-flex 
            offset-xs-4
            xs6
          >
            <p>Admin</p>
          </v-flex>
          <v-spacer/>
          <v-flex xs2>
            <p>@2018 trademark</p>
          </v-flex>
        </v-layout>

        <!-- <div style="width: 20vw">admin</div>
        <v-spacer/>
        <div style="width: 20vw">yes</div> -->
        
        
        
      </v-flex>
      
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data(){
    return{
      links:[
        {
          name: 'company'
        },
        {
          name: 'services'
        },
        {
          name: 'privacy policy'
        },
        {
          name: 'terms & conditions'
        }
      ],
      contactLinks:[
        {
          name: 'email',
          value: 'cleanerhomes@gmail.com'
        },
        {
          name: 'phone-number',
          value: '+64 030 4729'
        }
      ],
      socialLinks:[
        {
          name: 'Fb'
        },
        {
          name: 'email'
        },
        {
          name: 'twitter'
        }
      ]
    }
  }
}
</script>


<style>
.border{
  border: thin solid red
}
</style>
