<template>
  <div
    class="absolute z-[60] text-xl md:text-3xl font-bold md:p-5 bg-white pixel-border animate-easeIn p-2"
    :style="{ width: `${(store.playground.xTiles - 3) * store.tileSize}px` }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'

const store = useGameStore()
</script>

<style scoped>
.pixel-border {
  background: white;
  box-shadow:
		
	/* Inner Background Color */
    0 calc(0.125rem * -3) 0 calc(0.125rem * -1) white,
    0 calc(0.125rem * 3) 0 calc(0.125rem * -1) white,
    0 calc(0.125rem * -6) 0 calc(0.125rem * -2) white,
    0 calc(0.125rem * 6) 0 calc(0.125rem * -2) white,
    0 calc(0.125rem * -9) 0 calc(0.125rem * -4) white,
    0 calc(0.125rem * 9) 0 calc(0.125rem * -4) white,
    0 calc(0.125rem * -12) 0 calc(0.125rem * -6) white,
    0 calc(0.125rem * 12) 0 calc(0.125rem * -6) white,
    /* Pixel Border Layer 1 */ calc(0.125rem * -1) 0 0 0 black,
    0.125rem 0 0 0 black,
    0 calc(0.125rem * -2) 0 0 black,
    0 calc(0.125rem * 2) 0 0 black,
    0 calc(0.125rem * -5) 0 calc(0.125rem * -1) black,
    0 calc(0.125rem * 5) 0 calc(0.125rem * -1) black,
    0 calc(0.125rem * -7) 0 calc(0.125rem * -2) black,
    0 calc(0.125rem * 7) 0 calc(0.125rem * -2) black,
    0 calc(0.125rem * -10) 0 calc(0.125rem * -4) black,
    0 calc(0.125rem * 10) 0 calc(0.125rem * -4) black,
    0 calc(0.125rem * -13) 0 calc(0.125rem * -6) black,
    0 calc(0.125rem * 13) 0 calc(0.125rem * -6) black,
    /* Pixel Border Layer 2 */ calc(0.125rem * -2) 0 0 0 white,
    calc(0.125rem * 2) 0 0 0 white,
    0 calc(0.125rem * -1) 0 0.125rem white,
    0 0.125rem 0 0.125rem white,
    0 calc(0.125rem * -4) 0 0 white,
    0 calc(0.125rem * 4) 0 0 white,
    0 calc(0.125rem * -6) 0 calc(0.125rem * -1) white,
    0 calc(0.125rem * 6) 0 calc(0.125rem * -1) white,
    0 calc(0.125rem * -8) 0 calc(0.125rem * -2) white,
    0 calc(0.125rem * 8) 0 calc(0.125rem * -2) white,
    0 calc(0.125rem * -11) 0 calc(0.125rem * -4) white,
    0 calc(0.125rem * 11) 0 calc(0.125rem * -4) white,
    0 calc(0.125rem * -14) 0 calc(0.125rem * -6) white,
    0 calc(0.125rem * 14) 0 calc(0.125rem * -6) white,
    /* Border Layer 3: --pixel-border-3 */ calc(0.125rem * -3) 0 0 0 black,
    calc(0.125rem * 3) 0 0 0 black,
    0 0 0 calc(0.125rem * 2) black,
    0 calc(0.125rem * -3) 0 0.125rem black,
    0 calc(0.125rem * 3) 0 0.125rem black,
    0 calc(0.125rem * -5) 0 0 black,
    0 calc(0.125rem * 5) 0 0 black,
    0 calc(0.125rem * -7) 0 calc(0.125rem * -1) black,
    0 calc(0.125rem * 7) 0 calc(0.125rem * -1) black,
    0 calc(0.125rem * -9) 0 calc(0.125rem * -2) black,
    0 calc(0.125rem * 9) 0 calc(0.125rem * -2) black,
    0 calc(0.125rem * -12) 0 calc(0.125rem * -4) black,
    0 calc(0.125rem * 12) 0 calc(0.125rem * -4) black,
    0 calc(0.125rem * -15) 0 calc(0.125rem * -6) black,
    0 calc(0.125rem * 15) 0 calc(0.125rem * -6) black;
}
</style>
