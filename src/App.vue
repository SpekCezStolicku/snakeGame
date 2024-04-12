<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameFooter from '@/components/GameFooter.vue'
import GameController from '@/components/GameController.vue'
import MenuButton from '@/components/MenuButton.vue'
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <GameHeader />

    <!-- GAMEBOY -->
    <div
      class="flex flex-col flex-wrap 4k:flex-col lg:flex-row items-center game-board p-2 md:p-5 4k:p-8 bg-repeat bg-amber-300 bg-[url('/src/assets/images/noise.png')]"
    >
      <div>
        <ScoreBoard />
        <GameBoard />
      </div>
      <div class="flex lg:flex-col-reverse flex-row 4k:flex-row justify-evenly items-center">
        <GameController />
        <MenuButton />
      </div>
    </div>
    <GameFooter />
  </main>
</template>
