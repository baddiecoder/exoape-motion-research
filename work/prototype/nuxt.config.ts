export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/reset.css', '~/assets/css/tokens.css', '~/assets/css/layout.css'],
  typescript: {
    strict: true,
    typeCheck: false
  },
  app: {
    head: {
      title: 'Exoape Engine-only Spike'
    }
  },
  compatibilityDate: '2024-10-01'
})
