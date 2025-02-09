// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  
  app: {
    baseURL: '/adil-chbada/',
    buildAssetsDir: 'assets',
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

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
    // Add base configuration for GitHub Pages
    base: '/adil-chbada/',
  },

  // Modules
  modules: [
    '@vueuse/nuxt',
  ],

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

  // Development configuration
  devtools: { enabled: true }
})