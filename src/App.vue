<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameInsttructions from '@/components/GameInstructions.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
</script>

<template>
  <main class="select-none">
    <GameHeader />
    <ScoreBoard />
    <GameBoard />
    <GameInsttructions />
  </main>
</template>

<style scoped>
main {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'VT323', 'Courier New', Courier, monospace;
  width: 100vw;
  height: 100vh;
  background: url(./assets//images/bgPattern.svg);
}
</style>
