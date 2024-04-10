<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameFooter from '@/components/GameFooter.vue'
import GameController from '@/components/GameController.vue'
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <GameHeader />
    <div class="game-board p-2 md:p-5 bg-green-600">
      <ScoreBoard />
      <GameBoard />
      <GameController />
    </div>
    <GameFooter />
  </main>
</template>
