<template>
  <div>
    <img
      :src="`/src/assets/images/loot/cherries.png`"
      alt="Loot"
      :style="{ width: `${gameStore.tileSize}px` }"
    />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'

const gameStore = useGameStore()
</script>
