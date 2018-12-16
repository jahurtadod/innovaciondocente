/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/innovaciondocente/'
} : {};

module.exports = {
  /**
   * router base
   */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    },
    ...routerBase
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Proyecto Ascendere',
    htmlAttrs: {
      xmlns: "http://www.w3.org/1999/xhtml",
      'xml:lang': "es",
      lang: "es",
      dir: "ltr"
    },
    nativeUI: true,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        name: 'msapplication-TileImage',
        content: '/icon.png'
      },
      {
        name: 'msapplication-TileColor',
        content: '#044a80'
      },
      {
        name: 'theme-color',
        content: '#044a80'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/solid.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/brands.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/fontawesome.css'
      }
    ]
  },
  loading: {
    color: '#e9ecef',
    height: '3px'
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: 'white',
    background: "#044a80"
  },
  mode: 'spa',
  manifest: {
    name: 'Innovación Docente',
    lang: 'es',
    short_name: 'Ascendere',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: "#044a80",
    theme_color: "#044a80",
  },
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    optimization: {
      splitChunks: {
        name: true
      }
    },
    extractCSS: true,
    vendor: [
      'vee-validate',
      'axios',
      'vue-lazyload',
      'firebase/app',
      'firebase/firestore',
    ]
  },
  css: [
    '@/assets/style.scss',
    '@/assets/router-transition.scss',
    '@/assets/bootstrap/bootstrap-grid.scss',
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [{
      src: '~/plugins/vee-validate.js',
      ssr: true
    },
    {
      src: '~/plugins/filters.js',
      ssr: true
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: true
    },
    {
      src: '~/plugins/firebase.js',
      ssr: true
    }
  ]
}
