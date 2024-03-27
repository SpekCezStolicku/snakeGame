<template>
  <div class="flex items-center justify-between scoreboard">
    <h1>
      Score: <b>{{ gameStore.score }}</b>
    </h1>
    <div class="flex items-center justify-center hightscore">
      <img src="/src/assets/images/crown.png" alt="crown" width="25" />
      <h1>
        Highscore: <b>{{ gameStore.score }}</b>
      </h1>
      <button>Leaderboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'

// store
const gameStore = useGameStore()
</script>
