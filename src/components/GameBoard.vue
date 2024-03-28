<template>
  <section id="board" class="text-center w-[620px] h-[620px] mb-10 mx-auto">
    <Snake />
    <GameLoot :position="getRandomPosition" />
  </section>
</template>

<script setup lang="ts">
import Snake from './Snake.vue'
import GameLoot from './GameLoot.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGameStore } from '@/store/gameSettings'

// TYPES
import type { Direction, Position, Fruit } from '@/types/types'

// STORE
const gameStore = useGameStore()
const currentSpeed = computed(() => gameStore.gameSpeed / gameStore.level)

// KEYBOARD EVENTS
function handleKeydown(event: KeyboardEvent) {
  if (!gameStore.gameStarted) {
    gameStore.isGameStarted()
    startGame()
    return
  }

  const keyDirectionMap: { [key: string]: Direction } = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT'
  }

  // Direction rules
  const oppositeDirectionMap: {
    [key in Direction]: Direction
  } = {
    UP: 'DOWN',
    DOWN: 'UP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT'
  }

  const newDirection = keyDirectionMap[event.key as keyof typeof keyDirectionMap]
  // Prevent snake going to opposite direction
  if (newDirection && gameStore.direction !== oppositeDirectionMap[newDirection]) {
    gameStore.setDirection(newDirection)
  }
}

// LOOT SPAWN AND LOGIC
const fruits = [
  { name: 'Apple', image: 'apple', score: 10 },
  { name: 'Banana', image: 'banana', score: 15 },
  { name: 'Cherries', image: 'cherries', score: 20 },
  { name: 'Grape', image: 'grape', score: 25 },
  { name: 'Lemon', image: 'lemon', score: 30 },
  { name: 'Peach', image: 'peach', score: 35 },
  { name: 'Melon', image: 'melon', score: 40 },
  { name: 'Pineapple', image: 'pineapple', score: 45 },
  { name: 'Strawberry', image: 'strawberry', score: 50 }
]

const currentFruit = ref<Fruit | null>(null)
function getRandomPosition(): Position {
  return {
    x: Math.floor(Math.random() * 31) + 1,
    y: Math.floor(Math.random() * 31) + 1
  }
}

function spawnFruit() {
  const fruit = fruits[Math.floor(Math.random() * fruits.length)]
  currentFruit.value = { ...fruit, position: getRandomPosition() }
}

function startGame() {
  const intervalId = setInterval(() => {
    if (gameStore.gameStarted) {
      gameStore.moveSnake()
    } else {
      clearInterval(intervalId)
    }
  }, currentSpeed.value)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
#board {
  display: grid;
  z-index: 0;
  grid-template-columns: repeat(31, 20px);
  grid-template-rows: repeat(31, 20px);
  background: #80d5a6;
  border: 5px dashed mediumseagreen;
  box-shadow:
    0 0 0 2.5px #226741,
    0 0 0 12.5px #fff,
    inset 0 0 0 2.5px #226741,
    0 5px 12px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 6px #fff,
    inset 0 0 100vw 100vw beige;
}
</style>
