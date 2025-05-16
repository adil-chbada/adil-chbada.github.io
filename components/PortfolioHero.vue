<template>
  <!-- Main wrapper with refined layout and backdrop -->
  <div class="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-all duration-500">
    <!-- Decorative elements with enhanced positioning -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/30 opacity-20 blur-3xl"></div>
      <div class="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900/30 opacity-20 blur-3xl"></div>
      <div class="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900/30 opacity-20 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-red-200 dark:bg-red-900/30 opacity-10 blur-3xl"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
    </div>

    <!-- Dark Mode Toggle with NuxtIcon -->
    <button
      @click="isDark = !isDark"
      class="fixed top-6 right-6 z-50 p-3 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 text-indigo-600 dark:text-indigo-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      aria-label="Toggle dark mode"
    >
      <ClientOnly>
        <Icon v-if="isDark" name="ph:sun-duotone" class="w-6 h-6" />
        <Icon v-else name="ph:moon-stars-duotone" class="w-6 h-6" />
      </ClientOnly>
    </button>

    <!-- Main Content with improved spacing and layout -->
    <main class="relative z-10 py-16 px-4 md:py-24">
      <div class="container mx-auto max-w-7xl">
        <div class="flex flex-col items-center">
          <!-- Profile Header with avatar and enhanced layout -->
          <section class="w-full mb-24 flex flex-col items-center" v-inspira="1">
            <div class="relative mb-8">
              <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                AC
              </div>
              <div class="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <ClientOnly>
                  <Icon name="ph:check-circle-fill" class="w-6 h-6 text-green-500" />
                </ClientOnly>
              </div>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-center">Adil Chbada</h1>
            <div class="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-medium shadow-md mb-6">
              <ClientOnly>
                <Icon name="ph:code-duotone" class="w-5 h-5 mr-2" />
              </ClientOnly>
              <span>Full-Stack Developer</span>
            </div>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl text-center">
              Crafting Scalable & High-Performance Applications
            </p>
          </section>

          <!-- Two-column layout for main content on larger screens -->
          <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Left column (wide) -->
            <div class="lg:col-span-8 space-y-20">
              <!-- Bio Section with enhanced typography -->
              <section v-inspira="2">
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <ClientOnly>
                      <Icon name="ph:user-circle-duotone" class="w-8 h-8 mr-3 text-indigo-500 dark:text-indigo-400" />
                    </ClientOnly>
                    About Me
                  </h2>
                  <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Passionate about building robust web platforms, I specialize in backend architecture,
                    frontend experiences, and infrastructure optimization. Currently developing 
                    <span class="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 px-1">
                      Digishare CMS
                      <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transform translate-y-1 opacity-70"></span>
                    </span>,
                    a multi-platform CRM for WhatsApp and beyond.
                  </p>
                </div>
              </section>

              <!-- Current Projects Section -->
              <section v-inspira="3">
                <div class="mb-8 flex items-center">
                  <ClientOnly>
                    <Icon name="ph:rocket-launch-duotone" class="w-8 h-8 mr-3 text-indigo-500 dark:text-indigo-400" />
                  </ClientOnly>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Current Projects</h2>
                </div>
                
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-3"></div>
                  <div class="p-8">
                    <div class="flex items-start">
                      <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center shadow-inner mr-6">
                        <ClientOnly>
                          <Icon name="ph:device-mobile-camera-duotone" class="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        </ClientOnly>
                      </div>
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Digishare CMS</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                          A comprehensive CRM platform for WhatsApp business integration and multi-channel communication
                        </p>
                        <div class="flex flex-wrap gap-2">
                          <span class="px-3 py-1 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full flex items-center">
                            <ClientOnly>
                              <Icon name="ph:code-duotone" class="w-3 h-3 mr-1" />
                            </ClientOnly>
                            In Development
                          </span>
                          <span class="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full flex items-center">
                            <ClientOnly>
                              <Icon name="ph:briefcase-duotone" class="w-3 h-3 mr-1" />
                            </ClientOnly>
                            Business Solution
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Core Competencies Section with animated bars -->
              <section v-inspira="9">
                <div class="mb-8 flex items-center">
                  <ClientOnly>
                    <Icon name="ph:lightning-duotone" class="w-8 h-8 mr-3 text-indigo-500 dark:text-indigo-400" />
                  </ClientOnly>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Core Competencies</h2>
                </div>
                
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-8">
                  <div class="space-y-6">
                    <div class="skill-bar">
                      <div class="flex justify-between mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                          <ClientOnly>
                            <Icon name="ph:database-duotone" class="w-4 h-4 mr-2 text-indigo-500" />
                          </ClientOnly>
                          Scalable backend architectures
                        </span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-medium">95%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div class="skill-bar">
                      <div class="flex justify-between mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                          <ClientOnly>
                            <Icon name="ph:layout-duotone" class="w-4 h-4 mr-2 text-indigo-500" />
                          </ClientOnly>
                          High-performance frontend experiences
                        </span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-medium">90%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                    
                    <div class="skill-bar">
                      <div class="flex justify-between mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                          <ClientOnly>
                            <Icon name="ph:chart-line-up-duotone" class="w-4 h-4 mr-2 text-indigo-500" />
                          </ClientOnly>
                          Infrastructure optimization
                        </span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-medium">85%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                    
                    <div class="skill-bar">
                      <div class="flex justify-between mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                          <ClientOnly>
                            <Icon name="ph:git-branch-duotone" class="w-4 h-4 mr-2 text-indigo-500" />
                          </ClientOnly>
                          DevOps automation
                        </span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-medium">80%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style="width: 80%"></div>
                      </div>
                    </div>
                    
                    <div class="skill-bar">
                      <div class="flex justify-between mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                          <ClientOnly>
                            <Icon name="ph:plugs-connected-duotone" class="w-4 h-4 mr-2 text-indigo-500" />
                          </ClientOnly>
                          System integration
                        </span>
                        <span class="text-indigo-600 dark:text-indigo-400 font-medium">85%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            <!-- Right column (narrow) -->
            <div class="lg:col-span-4 space-y-20">
              <!-- Tech Stack Section -->
              <section v-inspira="4">
                <div class="mb-8 flex items-center">
                  <ClientOnly>
                    <Icon name="ph:stack-duotone" class="w-8 h-8 mr-3 text-indigo-500 dark:text-indigo-400" />
                  </ClientOnly>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                </div>
                
                <div class="space-y-6">
                  <!-- Backend -->
                  <div class="rounded-3xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" v-inspira="5">
                    <div class="h-2 bg-blue-500"></div>
                    <div class="p-6">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md mr-3">
                          <ClientOnly>
                            <Icon name="ph:database-duotone" class="w-5 h-5 text-white" />
                          </ClientOnly>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 dark:text-white">Backend</h3>
                      </div>
                      <ul class="space-y-2">
                        <li class="flex items-center py-2 px-3 rounded-lg bg-blue-50/80 dark:bg-gray-700 text-blue-800 dark:text-blue-200">
                          <span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Laravel
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-blue-50/80 dark:bg-gray-700 text-blue-800 dark:text-blue-200">
                          <span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Bun
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-blue-50/80 dark:bg-gray-700 text-blue-800 dark:text-blue-200">
                          <span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Elysia.js
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <!-- Frontend -->
                  <div class="rounded-3xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" v-inspira="6">
                    <div class="h-2 bg-green-500"></div>
                    <div class="p-6">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md mr-3">
                          <ClientOnly>
                            <Icon name="ph:layout-duotone" class="w-5 h-5 text-white" />
                          </ClientOnly>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 dark:text-white">Frontend</h3>
                      </div>
                      <ul class="space-y-2">
                        <li class="flex items-center py-2 px-3 rounded-lg bg-green-50/80 dark:bg-gray-700 text-green-800 dark:text-green-200">
                          <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Vue 3
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-green-50/80 dark:bg-gray-700 text-green-800 dark:text-green-200">
                          <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>TypeScript
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-green-50/80 dark:bg-gray-700 text-green-800 dark:text-green-200">
                          <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Vuetify
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-green-50/80 dark:bg-gray-700 text-green-800 dark:text-green-200">
                          <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Flutter
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <!-- DevOps -->
                  <div class="rounded-3xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" v-inspira="7">
                    <div class="h-2 bg-purple-500"></div>
                    <div class="p-6">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md mr-3">
                          <ClientOnly>
                            <Icon name="ph:cloud-duotone" class="w-5 h-5 text-white" />
                          </ClientOnly>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 dark:text-white">DevOps</h3>
                      </div>
                      <ul class="space-y-2">
                        <li class="flex items-center py-2 px-3 rounded-lg bg-purple-50/80 dark:bg-gray-700 text-purple-800 dark:text-purple-200">
                          <span class="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>Docker
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-purple-50/80 dark:bg-gray-700 text-purple-800 dark:text-purple-200">
                          <span class="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>OVH
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-purple-50/80 dark:bg-gray-700 text-purple-800 dark:text-purple-200">
                          <span class="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>AWS
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <!-- Performance & DX -->
                  <div class="rounded-3xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1" v-inspira="8">
                    <div class="h-2 bg-red-500"></div>
                    <div class="p-6">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md mr-3">
                          <ClientOnly>
                            <Icon name="ph:lightning-duotone" class="w-5 h-5 text-white" />
                          </ClientOnly>
                        </div>
                        <h3 class="font-bold text-xl text-gray-900 dark:text-white">Performance</h3>
                      </div>
                      <ul class="space-y-2">
                        <li class="flex items-center py-2 px-3 rounded-lg bg-red-50/80 dark:bg-gray-700 text-red-800 dark:text-red-200">
                          <span class="w-2 h-2 rounded-full bg-red-500 mr-2"></span>Vite
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-red-50/80 dark:bg-gray-700 text-red-800 dark:text-red-200">
                          <span class="w-2 h-2 rounded-full bg-red-500 mr-2"></span>ESM
                        </li>
                        <li class="flex items-center py-2 px-3 rounded-lg bg-red-50/80 dark:bg-gray-700 text-red-800 dark:text-red-200">
                          <span class="w-2 h-2 rounded-full bg-red-500 mr-2"></span>Modular Architectures
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Connect & Contact Section -->
              <section v-inspira="10" class="sticky top-24">
                <div class="mb-8 flex items-center">
                  <ClientOnly>
                    <Icon name="ph:chat-circle-text-duotone" class="w-8 h-8 mr-3 text-indigo-500 dark:text-indigo-400" />
                  </ClientOnly>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Connect</h2>
                </div>
                
                <!-- Social Links -->
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-6 mb-6">
                  <div class="grid grid-cols-2 gap-4">
                    <!-- GitHub Link -->
                    <a
                      href="https://github.com/adil-chbada/adil-chbada"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-gray-800 dark:group-hover:bg-gray-900 transition-colors mb-3">
                        <ClientOnly>
                          <Icon name="ph:github-logo-duotone" class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white transition-colors" />
                        </ClientOnly>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium">GitHub</span>
                    </a>
                    
                    <!-- LinkedIn Link -->
                    <a
                      href="https://www.linkedin.com/in/adil-chbada/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                    >
                      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-600 transition-colors mb-3">
                        <ClientOnly>
                          <Icon name="ph:linkedin-logo-duotone" class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white transition-colors" />
                        </ClientOnly>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <!-- Contact Card -->
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-6 mb-6">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <ClientOnly>
                      <Icon name="ph:envelope-simple-duotone" class="w-5 h-5 mr-2 text-indigo-500" />
                    </ClientOnly>
                    Get in Touch
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">Interested in collaborating or have a project in mind?</p>
                  <a 
                    href="mailto:contact@example.com" 
                    class="w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <ClientOnly>
                      <Icon name="ph:paper-plane-right-duotone" class="w-5 h-5 mr-2" />
                    </ClientOnly>
                    Send Message
                  </a>
                </div>
                
                <!-- Inspiring Quote -->
                <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl overflow-hidden shadow-xl">
                  <div class="bg-white/10 backdrop-blur-sm p-6 relative">
                    <ClientOnly>
                      <Icon name="ph:quotes-duotone" class="absolute top-4 left-4 w-8 h-8 text-white/20" />
                    </ClientOnly>
                    <div class="text-center px-4 py-2">
                      <p class="text-white text-lg italic font-medium leading-relaxed">
                        "Always experimenting, always optimizing."
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <!-- Footer -->
          <footer class="mt-24 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© {{ new Date().getFullYear() }} Adil Chbada. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core';
import { ref, onMounted } from 'vue';

// Automatically sync dark mode with the document's root class
const isDark = useDark();

// Staggered animation for elements
onMounted(() => {
  const elements = document.querySelectorAll('[v-inspira]');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 150 * index); // Slightly slower animation for better perception
  });
});
</script>

<style>
/* Custom grid pattern for background */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[v-inspira] {
  opacity: 0;
}

[v-inspira].visible {
  animation: fadeInUp 0.7s ease-out forwards;
}

/* Skill bar animation */
.skill-bar div div {
  animation: grow 1.5s ease-out forwards;
  transform-origin: left;
  transform: scaleX(0);
}

@keyframes grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Gradient text animation */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradientFlow 3s ease infinite;
}

/* Fancy hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
