<template>
  <div
    v-if="store.isGameOver"
    class="modal absolute z-50 text-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold p-5 bg-white px_border"
    :style="{ width: `${(store.playground.xTiles - 3) * store.tileSize}px` }"
  >
    <div v-if="store.isGameOver" class="modal-content text-center w-full">
      <img
        src="/src/assets/images/gameOver.webp"
        class="mx-auto"
        alt="Game over"
        :width="store.tileSize * 6"
        :height="store.tileSize * 6"
      />
      <h1
        class="text-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800 mb-4 w-fit"
      >
        Game Over!
      </h1>
      <p class="mb-4" v-if="score < 0">
        Nibbled on tail, oh what a fail, game over, Snake's self-bite tale!
      </p>
      <p class="mb-4" v-else>End of line, you hit the sign, game over, Mr. Slithering Vine!</p>
      <p>
        Your score:
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-800">{{
          score
        }}</span>
      </p>
      <p>
        Your highscore:
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-800">{{
          highscore
        }}</span>
      </p>
      <button class="px_button mx-auto my-5 px-3" @click="restartGame">Restart Game</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'

const store = useGameStore()

const score = computed(() => store.score)
const highscore = computed(() => store.playerHighscore)

function restartGame() {
  store.resetGame()
}
</script>
