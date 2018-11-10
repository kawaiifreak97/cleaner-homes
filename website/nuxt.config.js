const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    // { src: '~/plugins/icons.js', ssr:false }
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
    ['nuxt-fontawesome', {
      // component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        // {
        //   set:'@fortawesome/fontawesome-free-brands',
        //   icons: ['fab']
        // }
      ]
    }],
    ['storyblok-nuxt', { accessToken:'A2K4fPrQrUumCYDFlLUMtAtt', cacheProvider: 'memory' }]
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      // {
      //   set:'@fortawesome/fontawesome-free-brands',
      //   icons: ['fab']
      // }
    ]
  },
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
      //nuxt svg plugin
      // const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      // svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'vue-svg-loader',
      // });

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
