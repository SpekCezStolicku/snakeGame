<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
</script>

<template>
  <main class="flex items-center justify-center">
    <GameBoard />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'VT323', 'Courier New', Courier, monospace;
}

main {
  width: 100vw;
  height: 100vh;
  background: url(./assets//images/pixelBg.svg);
}
</style>
