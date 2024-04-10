<template>
  <div
    v-if="!gameStore.gameStarted"
    class="absolute-center text-3xl bg-white px_border animate-[pulse_3s_linear_infinite] mx-auto text-center"
    :style="{ maxWidth: `${(gameStore.playground.xTiles - 3) * gameStore.tileSize}px` }"
  >
    <h1 class="font-bold text-gradient from-green-600 to-teal-800 mb-4">
      {{ displayWelcomeText() }}
    </h1>
    <h2 class="mb-5 text-2xl">
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
