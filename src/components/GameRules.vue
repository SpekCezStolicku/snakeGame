<template>
  <div class="text-xl">
    <p class="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-800">
      1. Starting at a speed of 480,000 px/h, this game's snake moves lightning-fast from the
      get-go!
    </p>
    <p class="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800">
      2. If the snake bites its own body, each segment costs 50 points; dip below 0, and it's game
      over!
    </p>
    <p class="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-800">
      3. Edges aren't teleport portals here; hit them and you'll break your nose!
    </p>
    <p class="mb-4">
      4. Some fruits are tastier and more filling, while others are sour—don't let the snake go
      hungry!
    </p>
    <div class="grid grid-cols-4 gap-7 mb-2" v-for="(item, index) in gameStore.loot" :key="index">
      <div class="flex items-center justify-start">
        <img
          :src="`/src/assets/images/loot/${item.image}.png`"
          :width="gameStore.tileSize"
          class="h-fit mr-2"
          :alt="item.name"
        />
        <h1>{{ item.name }}</h1>
      </div>

      <p>Score: {{ item.score }}</p>
      <p>
        Speed: <span class="font-bold">{{ invertNumber(item.snakeSpeed) }}</span>
      </p>
      <p>
        Size: <span class="font-bold">{{ item.bodyIncrease }}</span>
      </p>
    </div>
  </div>
  <p @click="toggleSwitch(false)" class="absolute cursor-pointer top-3 right-3 font-bold">X</p>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/gameSettings'
import { toggleSwitch, invertNumber } from '@/utils/utils'

const gameStore = useGameStore()
</script>
