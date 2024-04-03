<template>
  <h1
    v-if="!gameStore.gameStarted"
    class="absolute z-50 text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white px-border animate-pulse top-1/2 left-1/2"
  >
    Press any <b>key</b> to start the game.
  </h1>
</template>

<script lang="ts" setup>
import { useGameStore } from '@/store/gameSettings'

const gameStore = useGameStore()
</script>

<style scoped>
.px-border {
  box-shadow:
    16px 0 var(--white),
    -16px 0 var(--white),
    0 -16px var(--white),
    0 16px var(--white),
    4px 0 0 8px var(--white),
    -4px 0 0 8px var(--white),
    0 -4px 0 8px var(--white),
    0 4px 0 8px var(--white),
    20px 0 var(--orange),
    -20px 0 var(--orange),
    0 -20px var(--orange),
    0 20px var(--orange),
    0 0 0 12px var(--orange),
    0 8px 0 8px var(--orange),
    0 -8px 0 8px var(--orange),
    8px 0 0 8px var(--orange),
    -8px 0 0 8px var(--orange);
  margin: 20px auto;
}
</style>
