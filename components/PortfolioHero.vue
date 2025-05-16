<template>
  <!-- Main wrapper with enhanced background elements -->
  <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 overflow-hidden">
    <!-- Animated decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-20 blur-3xl animate-float-delay"></div>
      <div class="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-200 dark:bg-purple-900 opacity-10 blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-200 dark:bg-pink-900 opacity-10 blur-3xl animate-float-slower"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full max-h-screen">
        <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
    </div>

    <!-- Header with navigation menu -->
    <header class="relative z-20 py-6 px-6 md:px-12 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">AC</div>
        <span class="font-bold text-gray-800 dark:text-white">Adil Chbada</span>
      </div>
      
      <nav class="hidden md:flex items-center space-x-6">
        <a href="#about" class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors">About</a>
        <a href="#projects" class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors">Projects</a>
        <a href="#skills" class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors">Skills</a>
        <a href="#contact" class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors">Contact</a>
      </nav>
      
      <!-- Dark Mode Toggle Button with improved design -->
      <button
        @click="isDark = !isDark"
        class="p-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        aria-label="Toggle dark mode"
      >
        <span v-if="isDark" class="block transform transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <span v-else class="block transform transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </span>
      </button>
    </header>

    <main class="relative z-10 pt-8 pb-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <!-- Hero Section with improved layout -->
        <section id="about" class="mb-24">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Left column: Avatar and Social Links -->
            <div class="lg:col-span-4 flex flex-col items-center lg:items-start" v-inspira="1">
              <div class="relative mb-8">
                <div class="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white text-5xl font-bold">
                  AC
                </div>
                <div class="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <!-- Social Links -->
              <div class="flex space-x-4 mb-6">
                <a href="https://github.com/adil-chbada/adil-chbada" target="_blank" rel="noopener noreferrer" class="social-icon">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.235 0 1.62-.015 2.925-.015 3.33 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/adil-chbada/" target="_blank" rel="noopener noreferrer" class="social-icon">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M20.447 20.452H17.22v-5.569c0-1.328-.027-3.042-1.852-3.042-1.853 0-2.137 1.445-2.137 2.94v5.671H10.02V9h3.102v1.561h.044c.432-.817 1.491-1.676 3.07-1.676 3.283 0 3.888 2.161 3.888 4.977v6.59zM5.337 7.433c-1.013 0-1.833-.82-1.833-1.833s.82-1.833 1.833-1.833 1.833.82 1.833 1.833-.82 1.833-1.833 1.833zm1.775 13.019H3.562V9h3.55v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.722v20.555C0 23.229.792 24 1.771 24h20.451C23.208 24 24 23.229 24 22.277V1.722C24 .771 23.208 0 22.225 0z" />
                  </svg>
                </a>
                <a href="#contact" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </a>
              </div>
              
              <!-- Status indicators -->
              <div class="flex flex-col space-y-3 w-full max-w-xs">
                <div class="flex items-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Currently Working On</div>
                    <div class="font-medium text-gray-800 dark:text-white">Digishare CMS</div>
                  </div>
                </div>
                
                <div class="flex items-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Status</div>
                    <div class="font-medium text-gray-800 dark:text-white">Available for Projects</div>
                  </div>
                </div>
                
                <div class="flex items-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm">
                  <div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Location</div>
                    <div class="font-medium text-gray-800 dark:text-white">Casablanca, Morocco</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right column: Bio and Details -->
            <div class="lg:col-span-8" v-inspira="2">
              <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Adil Chbada</h1>
              
              <div class="flex flex-wrap gap-3 mb-6">
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-medium shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Full-Stack Developer</span>
                </div>
                
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-base font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>5+ Years Experience</span>
                </div>
                
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-base font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>High-Performance Apps</span>
                </div>
              </div>
              
              <!-- Bio with card design -->
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 transform hover:shadow-2xl transition-all duration-300">
                <div class="flex items-start mb-4">
                  <div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">About Me</h3>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Passionate about building robust web platforms, I specialize in backend architecture,
                      frontend experiences, and infrastructure optimization. Currently developing 
                      <span class="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 px-1">
                        Digishare CMS
                        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transform translate-y-1 opacity-70"></span>
                      </span>,
                      a multi-platform CRM for WhatsApp and beyond.
                    </p>
                  </div>
                </div>
                
                <!-- Quick Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">42+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">Technologies Mastered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Current Projects Section with enhanced card -->
        <section id="projects" class="mb-24" v-inspira="3">
          <h2 class="text-center mb-12">
            <div class="flex items-center justify-center mb-3">
              <span class="relative">
                <span class="absolute inset-0 transform translate-x-1 translate-y-1 rounded-lg bg-indigo-300 dark:bg-indigo-800"></span>
                <span class="relative block w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </span>
              </span>
            </div>
            <span class="block text-3xl font-bold text-gray-900 dark:text-white">Current Projects</span>
          </h2>
          
          <div class="max-w-4xl mx-auto">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-4"></div>
              <div class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <!-- Project icon/image -->
                  <div class="md:col-span-3 flex justify-center">
                    <div class="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Project details -->
                  <div class="md:col-span-9">
                    <div class="flex flex-wrap items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Digishare CMS</h3>
                      <div class="flex space-x-2">
                        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full flex items-center">
                          <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                          Active
                        </span>
                        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Business</span>
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                      A comprehensive CRM platform for WhatsApp business integration and multi-channel communication
                    </p>
                    
                    <!-- Technology pills -->
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">Laravel</span>
                      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">Vue 3</span>
                      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">WhatsApp API</span>
                      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">Docker</span>
                    </div>
                    
                    <!-- Progress bar -->
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <div class="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full" style="width: 65%"></div>
                    </div>
                    <div class="text-right text-xs text-gray-500 dark:text-gray-400">65% Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tech Stack Section with improved card layout -->
        <section id="skills" class="mb-24" v-inspira="4">
          <h2 class="text-center mb-12">
            <div class="flex items-center justify-center mb-3">
              <span class="relative">
                <span class="absolute inset-0 transform translate-x-1 translate-y-1 rounded-lg bg-red-300 dark:bg-red-800"></span>
                <span class="relative block w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.<template>
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
