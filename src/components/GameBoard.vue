<template>
  <section id="board" class="text-center w-[620px] h-[620px] mb-10 mx-auto">
    <Snake />
    <GameLoot />
  </section>
</template>

<script setup lang="ts">
import Snake from './Snake.vue'
import GameLoot from './GameLoot.vue'
import { computed, onMounted, onUnmounted } from 'vue'
import { useGameStore } from '@/store/gameSettings'

// TYPES
import type { Direction } from '@/types/types'

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
