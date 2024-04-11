import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Store
const gameStore = useGameStore()

function checkAndUpdateSize() {
  gameStore.adjustTileSize(window.innerWidth)
}

checkAndUpdateSize()
window.addEventListener('resize', checkAndUpdateSize)

app.mount('#app')
