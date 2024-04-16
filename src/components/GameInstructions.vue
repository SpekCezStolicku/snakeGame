<template>
  <div
    v-if="!gameStore.gameStarted"
    class="absolute z-50 text-xl md:text-3xl bg-white px_border mx-auto text-center"
    :style="{ width: `${(gameStore.playground.xTiles - 5) * gameStore.tileSize}px` }"
  >
    <h1 class="font-bold text-gradient from-green-600 to-teal-800 mb-4">
      {{ displayWelcomeText() }}
    </h1>
    <div v-if="gameStore.player === ''" class="flex items-center justify-center">
      <BaseInput v-model="playerName" />
      <BaseButton text="Ok" :proceed="true" @click="savePlayerName" />
    </div>
    <h2 class="mb-5 text-lg md:text-2xl">
      Before you slither and slide, take a peek at the
      <span
        @click="modalStore.toggleModal('gameRules')"
        class="underline text-orange-600 font-bold cursor-pointer"
        >rules inside!</span
      >
    </h2>
    <div>
      <BaseButton
        class="w-full px-4 my-2 md:my-4 text-xl md:text-2xl font-bold animate-[pulse_2s_linear_infinite]"
        text="Let's play!"
        @click="gameStore.startGame()"
      >
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseButton from '@/components/forms/BaseButton.vue'
import BaseInput from './forms/BaseInput.vue'
import { useGameStore } from '@/store/gameSettings'
import { useModalStore } from '@/store/modalStore'

const gameStore = useGameStore()
const modalStore = useModalStore()

const playerName = ref('')

function savePlayerName() {
  gameStore.setPlayerName(playerName.value)
}

const welcomeTitleText = `Welcome to the slithering grounds, where cunning and twists know no bounds!`
const alterTitleText = `Back for more hiss and twist? Let's see if you can top your last tryst!`

function displayWelcomeText() {
  if (localStorage.getItem('firstVisit') === null) {
    localStorage.setItem('firstVisit', 'true')
    return welcomeTitleText
  }
  return alterTitleText
}
</script>
