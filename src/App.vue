<script setup lang="ts">
import { onMounted } from 'vue'
import GameBoard from '@/components/GameBoard.vue'
import GameHeader from '@/components/GameHeader.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import GameFooter from '@/components/GameFooter.vue'
import GameController from '@/components/GameController.vue'
import MenuButton from '@/components/MenuButton.vue'

onMounted(() => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  if (isSafari) {
    const style = document.createElement('style')
    document.head.appendChild(style)
    if (style.sheet)
      style.sheet.insertRule(
        '.mac-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }',
        style.sheet.cssRules.length
      )
  }
})
</script>

<template>
  <main class="select-none flex flex-col justify-between">
    <div class="md:flex block items-center 2xl:block justify-evenly mx-auto w-full">
      <GameHeader />

      <!-- GAMEBOY -->
      <div
        class="flex flex-col mt-2 flex-wrap 4k:flex-col w-fit lg:flex-row items-center game-board p-2 md:p-5 4k:p-8 bg-repeat bg-amber-300 bg-[url('/src/assets/images/noise.png')]"
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
    </div>
    <GameFooter />
  </main>
</template>
