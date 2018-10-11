<template>
  <div>
    <v-tabs
      slot="extension"
      v-model="model"
      centered
      color="#fafafa"
      slider-color="primary"
    >
      <v-tab
        v-for="serviceCategory in serviceCategories"
        :key="serviceCategory.name"
        ripple
      >
        <span class="tab-text">
          {{ serviceCategory.name }}
        </span>
      </v-tab>
      <v-tab-item
        v-for="serviceCategory in serviceCategories"
        :key="serviceCategory.name"
      >
        <v-layout 
          row 
          wrap
          justify-center
          my-2 
        >
          <v-flex
            v-for="service in serviceCategory.services"
            :key="service.name"
            hidden-sm-and-up
            xs8
          >
            <ServicePrevSm :id="service.link"/>
          </v-flex>
          <v-flex 
            v-for="service in serviceCategory.services"
            :key="service.name"
            :mx-4="$vuetify.breakpoint.mdAndUp"
            hidden-xs-only
            xs12
            sm5
            md3
            my-2
          >
            <ServicePrev :id="service.link"/>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
    <nuxt-child/>
  </div>
</template>

<script>
import ServicePrev from '@/components/Services/ServicePrev'
import ServicePrevSm from '@/components/Services/ServicePrevSm'
  export default {
    components:{
      ServicePrev,
      ServicePrevSm
    },
    data () {
      return {
        overlay: false,
        tabStart: 'tab-2',
        serviceCategories:[
          {
            name: 'Commercial',
            link: 'commercial',
            services:[
              {
                name: 'windows',
                link: 'windows'
              },
              {
                name: 'window',
                link: 'window'
              },
              {
                name: 'windo',
                link: 'windo'
              }
            ]

          },
          {
            name: 'Domestic',
            link: '',
            services:[
              {
                name: 'wfindows',
                link: 'windowsq'
              },
              {
                name: 'wifnd',
                link: 'wqind'
              }
            ]
          },
          {
            name: 'Farm spraying',
            link: 'farm-spraying',
            services:[
              {
                name: 'windoqws',
                link: 'wisndows'
              },
              {
                name: 'wisndow',
                link: 'wisdndow'
              },
              {
                name: 'widndo',
                link: 'widndo'
              },
              {
                name: 'wdin',
                link: 'wdin'
              },
              {
                name: 'wdind',
                link: 'widnd'
              }
            ]
          },
        ],
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
<style scoped>
  .tab-text{
    font-size: 0.75em;
  }
  @media only screen and (min-width: 600px) {
    .tab-text{
      font-size: 1em;
    }
  }
</style>



