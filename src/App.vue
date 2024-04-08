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
