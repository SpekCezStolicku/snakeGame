<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameInsttructions from '@/components/GameInstructions.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameModal from '@/components/GameModal.vue'
</script>

<template>
  <main class="select-none">
    <GameHeader />
    <ScoreBoard />
    <GameBoard />
    <GameInsttructions />
    <GameModal />
  </main>
</template>

<style>
:root {
  --burlywood: #deb887;
  --white: white;
  --green: #3cb371;
  --orange: #c58612;
  --blue: blue;
}
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
