<template>
  <img
    v-if="gameStore.currentLoot !== null"
    :src="getSrc(gameStore.currentLoot.image)"
    alt="Loot"
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
const getSrc = (src: string) => {
  return new URL(`/public/loot/${src}.png`, import.meta.url).href
}
</script>
