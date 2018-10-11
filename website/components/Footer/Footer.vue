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
                <span class="footer-links">
                  {{ link.name }}
                </span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs3 >
            <v-layout column>
              <v-flex mb-2>
                <h4>Contact us</h4>
              </v-flex>
              <v-flex
                v-for="contactLink in contactLinks"  
                :key="contactLink.value"
                class="footer-links"
              >
                <span >
                  {{ contactLink.value }}
                </span>
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
            xs4
          >
            <div class="text-xs-left">
              <v-btn
                flat
              >
                Admin
              </v-btn>
            </div>
          </v-flex>
          <v-spacer/>
          <v-flex xs4>
            <div class="text-xs-center">
              <v-dialog
                v-model="dialog"
                width="500"
              >
                <v-btn
                  slot="activator"
                  flat
                >
                  @2018 trademark
                </v-btn>

                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >
                    Privacy Policy
                  </v-card-title>

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider/>

                  <v-card-actions>
                    <v-spacer/>
                    <v-btn
                      color="primary"
                      flat
                      @click="dialog = false"
                    >
                      I accept
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>     
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data(){
    return{
      dialog: false,
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


<style scoped>
  .footer-links{
    font-size: 1em;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
