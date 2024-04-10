<template>
  <div
    v-if="store.isGameOver || state.showModal"
    class="absolute-center text-xl md:text-3xl font-bold md:p-5 bg-white px_border"
    :class="{ 'animate-easeIn': store.isGameOver || state.showModal }"
    :style="{ width: `${(store.playground.xTiles - 3) * store.tileSize}px` }"
  >
    <!-- Game over -->
    <div v-if="store.isGameOver" class="modal-content text-center w-full">
      <img
        src="/src/assets/images/gameOver.webp"
        class="mx-auto"
        alt="Game over"
        :width="store.tileSize * 7"
        :height="store.tileSize * 7"
      />
      <h1
        class="text-3xl md:text-5xl mx-auto text-gradient bg-gradient-to-r from-orange-500 to-red-800 mb-4 w-fit"
      >
        Game Over!
      </h1>
      <p class="mb-4 text-xl md:text-2xl" v-if="score < 0">
        Nibbled on tail, oh what a fail, game over, Snake's self-bite tale!
      </p>
      <p class="mb-4 text-xl md:text-2xl" v-else>
        End of line, you hit the sign, game over, Mr. Slithering Vine!
      </p>
      <p>
        Your score:
        <span class="text-gradient bg-gradient-to-r from-green-600 to-teal-800">{{ score }}</span>
      </p>
      <p>
        Your highscore:
        <span class="text-gradient bg-gradient-to-r from-blue-500 to-teal-800">{{
          highscore
        }}</span>
      </p>
      <button class="px_button mx-auto mt-5 px-3" @click="restartGame">Restart Game</button>
    </div>
    <GameRules v-if="state.showModal" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import GameRules from '@/components/GameRules.vue'
import { state } from '@/utils/utils'

const store = useGameStore()

const score = computed(() => store.score)
const highscore = computed(() => store.playerHighscore)

function restartGame() {
  store.resetGame()
}
</script>
