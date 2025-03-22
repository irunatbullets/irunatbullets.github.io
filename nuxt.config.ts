// https://nuxt.com/docs/api/configuration/nuxt-config
import { execSync } from 'child_process'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
  modules: ['@unocss/nuxt', 'nuxt-directus'],
  app: {
    baseURL: '',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    public: {
      directus: {
        url: 'https://content.murraynuttall.com/',
      },
      assetsUrl: 'https://content.murraynuttall.com/assets/',
      lastPublished: execSync('git log -1 --format=%cd --date=iso')
        .toString()
        .trim(),
    },
  },
})
