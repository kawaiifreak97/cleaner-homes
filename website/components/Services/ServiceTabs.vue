<template>
  <div>
    <v-tabs
      slot="extension"
      v-model="tab"
      centered
    >
      <v-tabs-slider color="primary"/>

      <v-tab
        v-for="serviceCategory in serviceCategories"
        :key="serviceCategory.name"
        :href="`#tab-${serviceCategory.name}`"
        @click="selectTab(serviceCategory)"
      >
        {{ serviceCategory.name }}
      </v-tab>
    </v-tabs>
    

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="serviceCategory in serviceCategories"
        :value="`tab-${serviceCategory.name}`"
        :key="serviceCategory.name"
      >

        <v-layout 
          row 
          wrap
          justify-center
          my-2 
        >
          <template v-for="service in serviceCategory.services">
            <v-flex
              :key="service.name"
              hidden-sm-and-up
              xs8
            >
              <ServicePrevSm 
                :id="service.name"
                :name="service.content.name"
                :category="serviceCategory.name"/>
            </v-flex>
            <v-flex 
              :key="service.name"
              :mx-4="$vuetify.breakpoint.mdAndUp"
              hidden-xs-only
              xs12
              sm5
              md3
              my-2
            >
              <ServicePrev 
                :name="service.content.name"
                :id="service.name"
                :image="service.content.image"
                :category="serviceCategory.name"
              />
            </v-flex>
          </template>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ServicePrev from '@/components/Services/ServicePrev'
import ServicePrevSm from '@/components/Services/ServicePrevSm'
  export default {
    components:{
      ServicePrev,
      ServicePrevSm
    },
    data() {
      return {
        tab: 'tab-Domestic',
        overlay: false,
        tabStart: '',
        activeServiceCat: {}
      }
    },
    computed: {
      serviceCategories(){
        return this.$store.state.services.serviceCategories
      },
      services(){
        return this.$store.state.services.selectedService.services
      },
      ...mapGetters([
        'selectedCategory',
        'selectedSubCategory'
      ])
    },
    mounted() {
      this.$store.commit('selectCategory', {name: 'Domestic', active: false});
    },
    methods:{
      selectTab(serviceCat){
        this.activeServiceCat = serviceCat;

        this.$store.commit('selectCategory', {name: serviceCat.name, active: true});
      },
    },
    
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



