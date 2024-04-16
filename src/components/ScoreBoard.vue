<template>
  <div
    class="grid grid-cols-[1fr_1fr_auto] mb-3 text-md md:text-2xl mx-auto"
    :style="{ width: `${containerWidth}px` }"
  >
    <p>
      Score: <b>{{ gameStore.score }}</b>
    </p>
    <p class="font-bold" :class="levelColor">Level {{ gameStore.level }}</p>
    <div class="flex items-center justify-center">
      <img src="/src/assets/images/crown.png" alt="crown" :width="crownWidth" />
      <p class="md:text-xl">
        Your Highscore: <b>{{ gameStore.playerHighscore }}</b>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'
import { computed } from 'vue'

// store
const gameStore = useGameStore()

// computed sizes
const containerWidth = computed(() => gameStore.tileSize * gameStore.playground.xTiles)
const crownWidth = computed(() => gameStore.tileSize + 8)

// Change color every level
const levelColors = ['text-red-900', 'text-blue-700', 'text-green-800', 'text-purple-700']
const levelColor = computed(() => levelColors[(gameStore.level % levelColors.length) - 1])
</script>
