<template>
  <h1
    v-if="!gameStore.gameStarted"
    class="absolute z-50 text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white px_border animate-pulse top-1/2 left-1/2"
  >
    Press any <b>key</b> to start the game.
  </h1>
</template>

<script lang="ts" setup>
import { useGameStore } from '@/store/gameSettings'

const gameStore = useGameStore()
</script>
