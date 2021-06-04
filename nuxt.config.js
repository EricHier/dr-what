
export default {
  target: "static",
  ssr: false,

  /*
  ** Headers of the page
  */
  head: {
    title: "Online in Echtzeit Arztbriefe analysieren | Dr.What?",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Was habe ich denn überhaupt? Hast du deinen Arztbrief oder einen medizinischen Fachbegriff nicht verstanden? Bei Dr.What? deinen Arztbrief hochladen und kostenlos analysieren lassen." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
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
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "assets/scss/global",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/fontawesome.js"
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/pwa",
    "nuxt-purgecss",
  ],

  purgeCSS: {
    enabled: (process.env.NODE_ENV === "production"),
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  pwa: {
    meta: {
      name: "Dr.What?",
      nativeUI: true
    },
    manifest: {
      lang: "de",
      name: "Dr.What?",
      short_name: "Dr.What?",
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
