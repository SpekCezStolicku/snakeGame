<template>
  <h1
    v-if="!gameStore.gameStarted"
    class="absolute z-50 text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white lvl1 animate-pulse top-1/2 left-1/2"
  >
    Press any <b>key</b> to start the game.
  </h1>
</template>

<script lang="ts" setup>
import { useGameStore } from '@/store/gameSettings'

const gameStore = useGameStore()
</script>

<style scoped>
.lvl1 {
  box-shadow:
    16px 0 white,
    -16px 0 white,
    0 -16px white,
    0 16px white,
    4px 0 0 8px white,
    -4px 0 0 8px white,
    0 -4px 0 8px white,
    0 4px 0 8px white,
    20px 0 orange,
    -20px 0 orange,
    0 -20px orange,
    0 20px orange,
    0 0 0 12px orange,
    0 8px 0 8px orange,
    0 -8px 0 8px orange,
    8px 0 0 8px orange,
    -8px 0 0 8px orange;
  margin: 20px auto;
}
</style>
