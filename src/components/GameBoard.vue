<template>
  <section
    id="board"
    class="mx-auto mb-10 text-center z-0 place-items-center"
    :style="{
      width: `${gameStore.tileSize * gameStore.playground.xTiles}px`,
      height: `${gameStore.tileSize * gameStore.playground.yTiles}px`,
      gridTemplateColumns: `repeat(${gameStore.playground.xTiles}, ${gameStore.tileSize}px)`,
      gridTemplateRows: `repeat(${gameStore.playground.yTiles}, ${gameStore.tileSize}px)`
    }"
  >
    <Snake />
    <GameLoot />
  </section>
</template>

<script setup lang="ts">
import Snake from './Snake.vue'
import GameLoot from './GameLoot.vue'
import { onMounted, onUnmounted, watch } from 'vue'
import { useGameStore } from '@/store/gameSettings'

// TYPES
import type { Direction } from '@/types/types'

// STORE
const gameStore = useGameStore()
let intervalId: number | undefined

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
  const newDirection = keyDirectionMap[event.key as keyof typeof keyDirectionMap]

  if (newDirection && newDirection !== gameStore.direction && gameStore.nextDirection == null) {
    const oppositeDirectionMap: {
      [key in Direction]: Direction
    } = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT'
    }

    if (gameStore.direction !== oppositeDirectionMap[newDirection]) {
      gameStore.setDirection(newDirection)
    }
  }
}

function startGame() {
  gameStore.getRandomLoot()

  clearInterval(intervalId)
  intervalId = setInterval(() => {
    if (gameStore.gameStarted) {
      gameStore.moveSnake()
    } else {
      clearInterval(intervalId)
    }
  }, gameStore.currentSpeed)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  watch(
    () => gameStore.currentSpeed,
    () => {
      if (gameStore.gameStarted) {
        clearInterval(intervalId)
        intervalId = setInterval(() => {
          if (gameStore.gameStarted) {
            gameStore.moveSnake()
          } else {
            clearInterval(intervalId)
          }
        }, gameStore.currentSpeed)
      }
    }
  )
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  clearInterval(intervalId)
})

onUnmounted(() => {
  clearInterval(intervalId)
  window.removeEventListener('keydown', handleKeydown)
})

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
  background: #80d5a6;
  border: 5px dashed var(--green);
  box-sizing: content-box;
  box-shadow:
    0 0 0 2.5px #226741,
    0 0 0 12.5px var(--white),
    inset 0 0 0 2.5px #226741,
    0 5px 12px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 6px var(--white),
    inset 0 0 100vw 100vw beige;
}
</style>
