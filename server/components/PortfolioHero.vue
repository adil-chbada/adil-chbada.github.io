<script setup lang="ts">
const portfolioData = {
  name: "Adil Chbada",
  title: "Full-Stack Developer",
  tagline: "Crafting Scalable & High-Performance Apps",
  currentProject: "Digishare CMS",
  techStack: {
    Backend: ['Laravel', 'Bun', 'Elysia.js'],
    Frontend: ['Vue 3', 'TypeScript', 'Vuetify', 'Flutter'],
    DevOps: ['Docker', 'OVH', 'AWS'],
    Performance: ['Vite', 'ESM', 'Modular Architectures']
  },
  socials: {
    LinkedIn: 'https://www.linkedin.com/in/adil-chbada/',
    GitHub: 'https://github.com/yourusername',
    Twitter: 'https://twitter.com/yourhandle'
  }
};

// Interactive mouse follower
const { x, y } = useMouse();
const cursorStyle = computed(() => ({
  transform: `translate(${x.value}px, ${y.value}px)`
}));
</script>

<template>
  <div class="cyber-container">
    <!-- Animated cursor trail -->
    <div class="cursor-trail" :style="cursorStyle"></div>
    
    <main class="cyber-main">
      <!-- Header Section -->
      <header class="cyber-header">
        <div class="cyber-glitch" data-text="ADIL CHBADA">ADIL CHBADA</div>
        <div class="cyber-subtitle">{{ portfolioData.tagline }}</div>
        <div class="cyber-current-project">
          <span class="cyber-flash">⚡</span> Building {{ portfolioData.currentProject }}
        </div>
      </header>

      <!-- Tech Stack Grid -->
      <div class="cyber-grid">
        <div v-for="(items, category) in portfolioData.techStack" :key="category" class="cyber-card">
          <div class="cyber-card-border"></div>
          <h3 class="cyber-card-title">{{ category }}</h3>
          <div class="cyber-card-items">
            <div v-for="(tech, index) in items" :key="index" class="cyber-item">
              <span class="cyber-hover-target">{{ tech }}</span>
              <div class="cyber-hover-line"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="cyber-socials">
        <a 
          v-for="(url, platform) in portfolioData.socials" 
          :key="platform" 
          :href="url" 
          class="cyber-button"
          target="_blank"
        >
          <span class="cyber-button-content">{{ platform }}</span>
          <span class="cyber-button-glitch"></span>
          <span class="cyber-button-gradient"></span>
        </a>
      </div>

      <!-- Animated Background Elements -->
      <div class="cyber-bg">
        <div class="cyber-line"></div>
        <div class="cyber-line"></div>
        <div class="cyber-line"></div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.cyber-container {
  min-height: 100vh;
  background: #0a0a0f;
  color: #00ff9d;
  font-family: 'Roboto Mono', monospace;
  overflow-x: hidden;
}

.cursor-trail {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #00ff9d55;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  transition: transform 0.1s;
}

.cyber-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.cyber-glitch {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  animation: glitch 2s infinite;
}

@keyframes glitch {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}

.cyber-glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.cyber-subtitle {
  font-size: 1.5rem;
  color: #00ff9d;
  margin: 1rem 0;
  text-shadow: 0 0 10px #00ff9d33;
}

.cyber-current-project {
  font-size: 1.2rem;
  color: #ff00c1;
  animation: pulse 2s infinite;
}

.cyber-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.cyber-card {
  background: #0a0a1a;
  border: 1px solid #00ff9d33;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s;
}

.cyber-card:hover {
  transform: translateY(-5px);
}

.cyber-card-border {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #00ff9d, transparent 50%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
}

.cyber-card-title {
  color: #ff00c1;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 15px #ff00c155;
}

.cyber-item {
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
}

.cyber-item:hover .cyber-hover-line {
  width: 100%;
}

.cyber-hover-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0;
  background: #00ff9d;
  transition: width 0.3s;
}

.cyber-socials {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
}

.cyber-button {
  position: relative;
  padding: 1rem 2rem;
  background: #0a0a1a;
  border: 1px solid #00ff9d;
  color: #00ff9d;
  overflow: hidden;
  transition: all 0.3s;
}

.cyber-button:hover {
  background: #00ff9d11;
  box-shadow: 0 0 15px #00ff9d33;
}

.cyber-button-glitch {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00ff9d, #ff00c1);
  opacity: 0;
  transition: opacity 0.3s;
  mix-blend-mode: screen;
}

.cyber-button:hover .cyber-button-glitch {
  opacity: 0.2;
}

.cyber-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.1;
}

.cyber-line {
  position: absolute;
  background: linear-gradient(to right, #00ff9d33, transparent);
  height: 1px;
  width: 100%;
  animation: scanline 6s infinite linear;
}

@keyframes scanline {
  from { transform: translateY(-100%) }
  to { transform: translateY(100vh) }
}

@media (max-width: 768px) {
  .cyber-glitch {
    font-size: 2.5rem;
  }
}
</style>