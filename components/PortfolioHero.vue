<template>
  <!-- Dark Mode Toggle Button -->
  <button
    @click="isDark = !isDark"
    class="fixed top-4 right-4 z-50 p-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
    aria-label="Toggle dark mode"
  >
    <span v-if="isDark">🌞</span>
    <span v-else>🌜</span>
  </button>

  <section class="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-12" v-inspira>
        <h1 class="text-5xl font-bold text-gray-800 dark:text-white mb-2">Adil Chbada</h1>
        <p class="text-2xl mt-2 text-indigo-600 dark:text-indigo-400">
          👨‍💻 Full-Stack Developer
        </p>
        <p class="text-lg mt-2 text-gray-600 dark:text-gray-300">
          Crafting Scalable & High-Performance Applications
        </p>
      </div>

      <!-- Bio Section -->
      <div class="mb-16 max-w-3xl mx-auto text-center" v-inspira>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Passionate about building robust web platforms, I specialize in backend architecture,
          frontend experiences, and infrastructure optimization. Currently developing 
          <span class="font-bold text-indigo-600 dark:text-indigo-400">Digishare CMS</span>,
          a multi-platform CRM for WhatsApp and beyond.
        </p>
      </div>

      <!-- Current Projects Section -->
      <div class="mb-16" v-inspira>
        <h2 class="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">🔭 Current Projects</h2>
        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div class="p-8">
            <div class="flex items-center justify-center mb-4">
              <div class="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">Digishare CMS</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center">
              A comprehensive CRM platform for WhatsApp business integration and multi-channel communication
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack Section -->
      <div class="mb-16" v-inspira>
        <h2 class="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">🔥 Tech Stack</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Backend -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform" v-inspira>
            <div class="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-800 dark:text-white">Backend</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-2">
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Laravel</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Bun</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Elysia.js</li>
            </ul>
          </div>
          <!-- Frontend -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform" v-inspira>
            <div class="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-800 dark:text-white">Frontend</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-2">
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Vue 3</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">TypeScript</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Vuetify</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Flutter</li>
            </ul>
          </div>
          <!-- DevOps -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform" v-inspira>
            <div class="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-800 dark:text-white">DevOps</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-2">
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Docker</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">OVH</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">AWS</li>
            </ul>
          </div>
          <!-- Performance & DX -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform" v-inspira>
            <div class="inline-block p-3 bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-800 dark:text-white">Performance &amp; DX</h3>
            <ul class="text-gray-600 dark:text-gray-300 space-y-2">
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Vite</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">ESM</li>
              <li class="py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Modular Architectures</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Core Competencies Section -->
      <div class="mb-16" v-inspira>
        <h2 class="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">💡 Core Competencies</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <p class="text-gray-700 dark:text-gray-300">Scalable backend architectures</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <p class="text-gray-700 dark:text-gray-300">High-performance frontend experiences</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <p class="text-gray-700 dark:text-gray-300">Infrastructure optimization</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <p class="text-gray-700 dark:text-gray-300">DevOps automation</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <p class="text-gray-700 dark:text-gray-300">System integration</p>
          </div>
        </div>
      </div>

      <!-- Connect Section -->
      <div class="text-center" v-inspira>
        <h2 class="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">📫 Let's Connect</h2>
        <div class="flex justify-center space-x-8">
          <!-- GitHub Link -->
          <a
            href="https://github.com/adil-chbada/adil-chbada"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
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
            class="text-blue-600 hover:text-blue-500 transition-colors transform hover:scale-110"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
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

        <div class="mt-12 text-gray-600 dark:text-gray-400">
          <p class="italic">"Always experimenting, always optimizing." 🚀</p>
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
/* Add any additional custom styles here */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[v-inspira] {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
