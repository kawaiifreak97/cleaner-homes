<template>
  <v-footer
    height="auto"
    color="#fafafa"
    class="mb-4"
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
          <v-flex 
            xs4
            sm3>
            <v-layout column>
              <v-flex mb-2>
                <h4>Company</h4>
              </v-flex>
              <v-flex
                v-for="link in links"
                :key="link.name"
              >
                <div
                  v-if="link.privacy" >
                  <div>
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <a
                        slot="activator"
                        class="black--text"
                      >
                        {{ link.name }}
                      </a>
                    </v-dialog>
                  </div>
                  
                </div>
                <a
                  v-else-if="!link.privacy"
                  class="footer-links black--text">
                  {{ link.name }}
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs4
            sm3 >
            <v-layout column>
              <v-flex mb-2>
                <h4>Contact us</h4>
              </v-flex>
              <v-flex
                v-for="contactLink in contactLinks"  
                :key="contactLink.value"
                class="footer-links"
              >
                <a
                  v-if="contactLink.name == 'email'"
                  href="mailto:gbexta1@gmail.com?subject=service inquiry"
                  class="black--text"
                >
                  {{ contactLink.value }}
                </a>
                <a
                  v-else
                  class="black--text"
                >
                  {{ contactLink.value }}
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs1
            sm3>
            <v-layout 
              class="text-xs-center"
            >
              <v-flex 
              >
                <div 
                  class="hidden-xs-only text-xs-center"
                >
                  <a
                    nuxt
                    href="/"
                    class="logo"
                  >
                    <work/>
                  </a>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
import work from '@/assets/svg/gradient-logo.svg'
export default {
  components:{
    work
  },
  data(){
    return{
      popup: false,
      dialog: false,
      links:[
        {
          name: 'about us'
        },
        {
          name: 'services'
        },
      ],
    }
  },
  computed: mapState({
    contactLinks: state => state.contact.contactLinks
  })
}
</script>


<style scoped>
  .footer-links{
    font-size: 1em;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
