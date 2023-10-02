// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/7eminar/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
  },
  modules: [ 'nuxt-swiper',
    ['@nuxtjs/google-fonts', {
      families: {
        'Raleway': true,
        download: true,
        inject: true
      }
    }]
  ],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_vars.scss"; @import "@/assets/_mixins.scss"; @import "@/assets/_fonts.scss"; @import "@/assets/_normalize.scss";',
          
        }
      }
    }
  }
})
