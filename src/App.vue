<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameInsttructions from '@/components/GameInstructions.vue'
import GameHeader from '@/components/GameHeader.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-evenly">
    <GameHeader />
    <GameBoard />
    <GameInsttructions />
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
  background: url(./assets//images/bgPattern.svg);
}
</style>
