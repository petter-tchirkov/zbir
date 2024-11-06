// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  css: ['assets/css/style.css'],
  nitro: {
    static: true
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            red: '#EC1923',
            'dark-red': "#8b0000"
          }
        }
      }
    }
  }
})
