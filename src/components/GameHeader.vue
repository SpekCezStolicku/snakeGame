<template>
  <img
    src="/src/assets/images/snakeLogo.png"
    alt="snake logo"
    class="w-[80px] md:w-[100px] 4k:w-[120px] mx-auto"
    :style="{ width: `${imageSize}px` }"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'

// STORE
const gameStore = useGameStore()
const imageSize = computed(() => gameStore.tileSize * 6)
</script>
