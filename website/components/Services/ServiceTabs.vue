<template>
  <div>
    <v-tabs
      slot="extension"
      v-model="model"
      centered
      color="#fafafa"
      slider-color="primary"
    >
      <!-- <template
        v-for="serviceCategory in serviceCategories"
      >
        <v-tab
          :key="serviceCategory.name"
          :href="`#${serviceCategory.name}`"
          ripple
        >
          <span class="tab-text">
            {{ serviceCategory.name }}
          </span> 
        </v-tab>

        <v-tabs-items 
          :key="serviceCategory.name"
          v-model="tabs" 
          class="white elevation-1"
        >
          <v-tab-item
            v-for="i in 3"
            :value="'hello-' + i"
            :key="i"
          >
            <v-card>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items 
          :key="serviceCategory.name"
          v-model="model"
        >
          <v-tab-item
            :key="serviceCategory.name"
            :id="`#${serviceCategory.name}`"
          >
            <h1>hi</h1>
            <v-layout 
              row 
              wrap
              justify-center
              my-2 
            >
              <v-flex
                v-for="service in serviceCategory.services"
                :key="service.content.name"
                hidden-sm-and-up
                xs8
              >
                <ServicePrevSm 
                  :id="service.name"
                  :name="service.content.name"/>
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
                <ServicePrev 
                  :category="serviceCategory.name"
                  :name="service.content.name"
                  :id="service.name"
                  :image="service.content.image"/>
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs-items> 
      </template> -->
    </v-tabs>
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
    data() {
      return {
        tabs: null,
        overlay: false,
        tabStart: '',
        model: '#Domestic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    computed: {
      serviceCategories() {
        return this.$store.state.services.serviceCategories
      },
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



