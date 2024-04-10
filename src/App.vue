<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameInstructions from '@/components/GameInstructions.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameModal from '@/components/GameModal.vue'
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <GameHeader />
    <div>
      <ScoreBoard />
      <GameBoard />
    </div>
    <GameInstructions />
    <GameModal />
  </main>
</template>
