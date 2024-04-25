<template>
  <section
    id="board"
    class="grid game-board relative mx-auto mb-5 md:mb-10 z-0 place-items-center bg-orange-100"
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
    <GameInstructions />
    <GameOver v-if="gameStore.isGameOver" />
    <GameRules v-if="modalStore.gameRules" />
    <GameMenu v-if="modalStore.gameMenu" />
    <LeaderBoard v-if="modalStore.leaderBoard" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, onUnmounted } from 'vue'
import Snake from './Snake.vue'
import GameLoot from './GameLoot.vue'
import GameInstructions from '@/components/GameInstructions.vue'
import GameRules from '@/components/GameRules.vue'
import GameMenu from '@/components/GameMenu.vue'
import LeaderBoard from './LeaderBoard.vue'
import GameOver from '@/components/GameOver.vue'
import { useGameStore } from '@/store/gameSettings'
import { useModalStore } from '../store/modalStore'

// TYPES
import type { Direction } from '@/types/types'

// STORE
const gameStore = useGameStore()
const modalStore = useModalStore()
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
