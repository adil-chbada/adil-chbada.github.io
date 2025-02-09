export default defineNuxtConfig({
  css: ['@inspira/ui/dist/style.css'],
  app: {
    baseURL: '/adil-chbada/', // For GitHub Pages
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
  }
})