<template>
  <section
    id="board"
    class="mx-auto text-center z-0 place-items-center"
    :class="{ 'animate-wiggle': isGameOver }"
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
import { onMounted, computed, onUnmounted } from 'vue'
import { useGameStore } from '@/store/gameSettings'

// TYPES
import type { Direction } from '@/types/types'

// STORE
const gameStore = useGameStore()
const isGameOver = computed(() => gameStore.isGameOver)

// KEYBOARD EVENT
function handleKeydown(event: KeyboardEvent) {
  const keyDirectionMap: { [key: string]: Direction } = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT'
  }

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
    0 5px 12px 12px rgba(0, 0, 0, 0.5),
    inset 0 0 100vw 100vw beige;
}
</style>
