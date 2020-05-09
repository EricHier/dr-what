
export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Medizinbrief Übersetzer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: "https://stats.erichier.tech/js/index.js",
      async: true,
      defer: true,
      "data-domain": "drwhat.de"
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "assets/scss/global",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss',
  ],

  purgeCSS: {
    enabled: (process.env.NODE_ENV === 'production'),
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  pwa: {
    meta: {
      name: "Medizibrief Übersetzer",
      nativeUI: true
    },
    manifest: {
      lang: 'de',
      name: "Medizibrief Übersetzer",
      short_name: "MB Übersetzer",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      theme_color: "#ffffff"
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
