const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Cleaner homes and pastures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', 
        content: 'For all your agricultural spraying and house cleaning needs. farm spraying, gorse, ragwort, thistles, builders clean, office clean, window clean, move out clean. servicing dunedin, balclutha, waihola, queenstown, wanaka, gore ' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo-primary.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel:'stylesheet', href:"https://fonts.googleapis.com/css?family=Muli:200,400" },
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.0.6/css/all.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify.js',
    '@/plugins/globalComponents.js',
    '@/plugins/scrollto.js',
    { src: '~/plugins/nuxt-vuex-router-sync.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    '@/plugins/submitForm.js'
  ],

  /*
  ** Global CSS
  */
 css: [
  '~/assets/style/app.styl',
  'swiper/dist/css/swiper.css'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    ['storyblok-nuxt', { accessToken:'A2K4fPrQrUumCYDFlLUMtAtt', cacheProvider: 'memory' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  }
}
