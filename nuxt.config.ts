// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],
  modules: [
    '@unocss/nuxt',
    'nuxt-content-assets',
    '@nuxt/content'
  ],
  app: {
    baseURL: "",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
})
