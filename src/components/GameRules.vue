<template>
  <GameModal>
    <div class="text-xs md:text-xl">
      <p class="mb-2 text-gradient from-green-600 to-teal-800">
        1. Starting at a speed of 480,000 px/h, this game's snake moves lightning-fast from the
        get-go!
      </p>
      <p class="mb-2 text-gradient from-orange-500 to-red-800">
        2. If the snake bites its own body, each segment costs 50 points; dip below 0, and it's game
        over!
      </p>
      <p class="mb-2 text-gradient from-blue-500 to-teal-800">
        3. Edges aren't teleport portals here; hit them and you'll break your nose!
      </p>
      <p class="mb-4">
        4. Some fruits are tastier and more filling, while others are sour—don't let the snake go
        hungry!
      </p>
      <div
        class="grid grid-cols-4 mb-2 text-center"
        v-for="(item, index) in gameStore.loot"
        :key="index"
      >
        <div class="flex items-center justify-start">
          <img
            :src="getSrc(item.image)"
            :width="gameStore.tileSize - 5"
            class="h-fit mr-2"
            :alt="item.name"
          />
          <h1 :aria-level="index">{{ item.name }}</h1>
        </div>

        <p>Score: {{ item.score }}</p>
        <p>
          Speed: <span class="font-bold">{{ invertNumber(item.snakeSpeed) }}</span>
        </p>
        <p>
          Size: <span class="font-bold">{{ item.bodyIncrease }}</span>
        </p>
      </div>
      <BaseButton
        text="Nothing can stop me now!"
        :proceed="true"
        @click="modalStore.toggleModal('gameRules')"
        class="mt-4 text-xs md:text-xl w-full"
      >
      </BaseButton>
    </div>
  </GameModal>
</template>

<script setup lang="ts">
import GameModal from './GameModal.vue'
import BaseButton from './forms/BaseButton.vue'
import { useGameStore } from '@/store/gameSettings'
import { useModalStore } from '@/store/modalStore'
import { invertNumber } from '@/utils/utils'

const gameStore = useGameStore()
const modalStore = useModalStore()

const getSrc = (src: string) => {
  return new URL(`/public/loot/${src}.png`, import.meta.url).href
}
</script>
