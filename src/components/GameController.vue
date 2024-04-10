<template>
  <div class="grid grid-cols-3 grid-rows-3 p-4 my-5 w-fit mx-auto bg-slate-300 rounded-full">
    <div
      class="col-start-2 row-start-1 mx-auto w-[70px] h-[70px] flex justify-center bg-black border-orange-500 border-4 border-b-0"
      @click="setDirection('UP')"
    >
      <img
        class="-rotate-90 cursor-pointer select-none mx-auto"
        src="/src/assets/images/arrow.png"
        width="40"
        alt="arrowUp"
      />
    </div>
    <div
      class="col-start-1 row-start-2 mx-auto w-[70px] h-[70px] flex justify-center bg-black border-orange-500 border-4 border-r-0"
      @click="setDirection('LEFT')"
    >
      <img
        class="rotate-180 cursor-pointer select-none mx-auto"
        src="/src/assets/images/arrow.png"
        width="40"
        alt="arrowLeft"
      />
    </div>
    <div
      class="col-start-2 row-start-3 mx-auto w-[70px] h-[70px] flex justify-center bg-black border-orange-500 border-4 border-t-0"
      @click="setDirection('DOWN')"
    >
      <img
        class="rotate-90 cursor-pointer select-none mx-auto"
        src="/src/assets/images/arrow.png"
        width="40"
        alt="arrowDown"
      />
    </div>
    <div
      class="col-start-3 row-start-2 mx-auto w-[70px] h-[70px] flex justify-center bg-black border-orange-500 border-4 border-l-0"
      @click="setDirection('RIGHT')"
    >
      <img
        class="cursor-pointer select-none mx-auto"
        src="/src/assets/images/arrow.png"
        width="40"
        alt="arrowRight"
      />
    </div>
    <div class="bg-black w-[70px] h-[70px] flex justify-center col-start-2 row-start-2">
      <div class="w-full h-full border-4 border-orange-500 rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'
// TYPES
import type { Direction } from '@/types/types'

// STORE
const gameStore = useGameStore()

function setDirection(direction: Direction) {
  if (direction !== gameStore.direction && gameStore.nextDirection == null) {
    const oppositeDirectionMap: { [key in Direction]: Direction } = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT'
    }

    if (gameStore.direction !== oppositeDirectionMap[direction]) {
      gameStore.setDirection(direction)
    }
  }
}
</script>
