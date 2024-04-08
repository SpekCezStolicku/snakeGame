<template>
  <div
    class="flex items-center justify-between scoreboard mb-6 text-2xl mx-auto"
    :style="{ width: `${gameStore.tileSize * gameStore.playground.xTiles}px` }"
  >
    <h1>
      Score: <b>{{ gameStore.score }}</b>
    </h1>
    <h1 class="font-bold">Level {{ gameStore.level }}</h1>
    <div class="flex items-center justify-center hightscore">
      <img src="/src/assets/images/crown.png" alt="crown" width="25" />
      <h1>
        Your Highscore: <b>{{ gameStore.playerHighscore }}</b>
      </h1>
      <button class="hidden px-4 text-xl font-bold">Leaderboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'

// store
const gameStore = useGameStore()
</script>
