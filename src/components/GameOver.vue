<template>
  <GameModal>
    <div class="modal-content text-center w-full">
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
      <BaseButton
        text="Restart Game"
        :danger="true"
        class="mx-auto mt-5"
        @click="restartGame"
      ></BaseButton>
    </div>
  </GameModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import GameModal from '@/components/GameModal.vue'
import BaseButton from './forms/BaseButton.vue'

const store = useGameStore()

const score = computed(() => store.score)
const highscore = computed(() => store.playerHighscore)

function restartGame() {
  store.resetGame()
}
</script>
