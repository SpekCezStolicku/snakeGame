<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameInstructions from '@/components/GameInstructions.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameModal from '@/components/GameModal.vue'
import GameFooter from '@/components/GameFooter.vue'
import GameController from '@/components/GameController.vue'
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <GameHeader />
    <div>
      <ScoreBoard />
      <GameBoard />
      <GameController />
    </div>
    <GameFooter />
    <GameInstructions />
    <GameModal />
  </main>
</template>
