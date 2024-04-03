<template>
  <img
    v-if="gameStore.currentLoot !== null"
    :src="`/src/assets/images/loot/${gameStore.currentLoot.image}.png`"
    alt="Loot"
    class="object-cover"
    :style="{
      maxWidth: `${gameStore.tileSize}px`,
      maxHeight: `${gameStore.tileSize}px`,
      gridColumnStart: `${gameStore.currentLootPosition.x}`,
      gridRowStart: `${gameStore.currentLootPosition.y}`
    }"
  />
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'

const gameStore = useGameStore()
</script>
