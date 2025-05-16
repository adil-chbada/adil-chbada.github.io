// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  
  app: {
    // Remove the baseURL since we're deploying to root
    head: {
      title: 'Adil Chbada - Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    // Remove the base configuration
  },

  modules: ['@vueuse/nuxt', '@nuxt/icon'],

  // Build configuration
  build: {
    transpile: ['vue'],
  },

  // Generate configuration for static hosting
  generate: {
    fallback: true
  },

  // Nitro configuration for static hosting
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    }
  },

  compatibilityDate: '2025-02-09',

  devtools: { enabled: true }
})