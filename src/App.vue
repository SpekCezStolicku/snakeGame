<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import GameBoard from '@/components/GameBoard.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameFooter from '@/components/GameFooter.vue'
import GameController from '@/components/GameController.vue'

const gameStore = useGameStore()
const gameBoy = ref(null)

onMounted(() => {
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { height } = entry.contentRect
      gameStore.adjustTileSize(undefined, height)
    }
  })
  if (gameBoy.value) {
    observer.observe(gameBoy.value)
  }

  onUnmounted(() => {
    if (gameBoy.value) {
      observer.disconnect()
    }
  })
})
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <GameHeader />
    <div
      ref="gameBoy"
      class="flex flex-col 4k:flex-col md:flex-row items-center game-board p-2 md:p-5 4k:p-8 bg-green-400"
    >
      <div>
        <ScoreBoard />
        <GameBoard />
      </div>
      <GameController />
    </div>
    <GameFooter />
  </main>
</template>
