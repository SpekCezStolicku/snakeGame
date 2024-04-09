<template>
  <div
    v-if="!gameStore.gameStarted"
    class="absolute z-50 text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white px_border animate-[pulse_3s_linear_infinite] top-1/2 left-1/2 mx-auto text-center"
    :style="{ maxWidth: `${(gameStore.playground.xTiles - 3) * gameStore.tileSize}px` }"
  >
    <h1
      class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-800 mb-4 text-4xl"
    >
      {{ displayWelcomeText() }}
    </h1>
    <h2 class="mb-5">
      Before you slither and slide, take a peek at the
      <span @click="toggleSwitch(true)" class="underline text-orange-600 font-bold cursor-pointer"
        >rules inside!</span
      >
    </h2>
    <p>Press any <b>key</b> to start the game.</p>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from '@/store/gameSettings'
import { toggleSwitch } from '@/utils/utils'

const gameStore = useGameStore()

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
