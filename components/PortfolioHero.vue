<template>
  <!-- Dark Mode Toggle Button -->
  <button
    @click="isDark = !isDark"
    class="fixed top-4 right-4 z-50 p-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
  >
    <span v-if="isDark">🌞</span>
    <span v-else>🌜</span>
  </button>

  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-12" v-inspira>
        <h1 class="text-4xl font-bold dark:text-white">Hi, I'm Adil Chbada! 🚀</h1>
        <p class="text-xl mt-2 dark:text-gray-300">
          👨‍💻 Full-Stack Developer | Crafting Scalable &amp; High-Performance Apps
        </p>
      </div>

      <!-- Bio Section -->
      <div class="mb-12 text-center" v-inspira>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Passionate about building robust web platforms, I specialize in backend architecture,
          frontend experiences, and infrastructure optimization. Currently developing <span class="font-bold">Digishare CMS</span>,
          a multi-platform CRM for WhatsApp and beyond.
        </p>
      </div>

      <!-- Tech Stack Section -->
      <div class="mb-12" v-inspira>
        <h2 class="text-3xl font-semibold text-center mb-6 dark:text-white">🔥 Tech Stack</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Backend -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center" v-inspira>
            <h3 class="font-bold text-lg mb-2 dark:text-white">Backend</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Laravel</li>
              <li>Bun</li>
              <li>Elysia.js</li>
            </ul>
          </div>
          <!-- Frontend -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center" v-inspira>
            <h3 class="font-bold text-lg mb-2 dark:text-white">Frontend</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Vue 3</li>
              <li>TypeScript</li>
              <li>Vuetify</li>
              <li>Flutter</li>
            </ul>
          </div>
          <!-- DevOps -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center" v-inspira>
            <h3 class="font-bold text-lg mb-2 dark:text-white">DevOps</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Docker</li>
              <li>OVH</li>
              <li>AWS</li>
            </ul>
          </div>
          <!-- Performance & DX -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center" v-inspira>
            <h3 class="font-bold text-lg mb-2 dark:text-white">Performance &amp; DX</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Vite</li>
              <li>ESM</li>
              <li>Modular Architectures</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Connect Section -->
      <div class="text-center" v-inspira>
        <h2 class="text-3xl font-semibold mb-6 dark:text-white">📫 Let's Connect</h2>
        <div class="flex justify-center space-x-6">
          <!-- GitHub Link -->
          <a
            href="https://github.com/adil-chbada/adil-chbada"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                   3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                   0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 
                   1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.81 
                   1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                   0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                   0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 
                   2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 
                   1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 
                   0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.235 
                   0 1.62-.015 2.925-.015 3.33 0 .315.21.69.825.57C20.565 
                   22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <!-- LinkedIn Link -->
          <a
            href="https://www.linkedin.com/in/adil-chbada/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-400 transition-colors"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <title>LinkedIn</title>
              <path
                d="M20.447 20.452H17.22v-5.569c0-1.328-.027-3.042-1.852-3.042-1.853 
                   0-2.137 1.445-2.137 2.94v5.671H10.02V9h3.102v1.561h.044c.432-.817 
                   1.491-1.676 3.07-1.676 3.283 0 3.888 2.161 3.888 4.977v6.59zM5.337 
                   7.433c-1.013 0-1.833-.82-1.833-1.833s.82-1.833 
                   1.833-1.833 1.833.82 1.833 1.833-.82 1.833-1.833 
                   1.833zm1.775 13.019H3.562V9h3.55v11.452zM22.225 
                   0H1.771C.792 0 0 .771 0 1.722v20.555C0 23.229.792 24 
                   1.771 24h20.451C23.208 24 24 23.229 24 22.277V1.722C24 
                   .771 23.208 0 22.225 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDark } from '@vueuse/core';

// Automatically sync dark mode with the document's root class
const isDark = useDark();
</script>

<style scoped>
/* Add any additional custom styles or Inspira UI overrides here */
</style>
