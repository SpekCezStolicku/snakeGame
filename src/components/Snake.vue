<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    :style="getSegmentStyle(segment, index)"
    :class="index === 0 ? `w-[${gameStore.tileSize + 10}px] z-50 grid place-items-center` : ''"
  >
    <img
      :src="`/src/assets/images/${getSegmentImage(index)}.png`"
      alt="Snake Segment"
      :width="gameStore.tileSize"
      :class="index === 0 ? `w-[${gameStore.tileSize + 10}px] relative right-[.25px]` : ''"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import type { Position } from '@/types/types'

const gameStore = useGameStore()

const snakePosition = computed(() => gameStore.snakePosition)

const head = 'head'
const body = 'body'

function getSegmentImage(index: number) {
  if (index === 0) {
    return head
  } else {
    return body
  }
}

function getSegmentStyle(segment: Position, index: number) {
  let rotation = 0
  if (index === 0) {
    // Head rotation
    switch (gameStore.direction) {
      case 'UP':
        rotation = 0
        break
      case 'RIGHT':
        rotation = 90
        break
      case 'DOWN':
        rotation = -180
        break
      case 'LEFT':
        rotation = -90
        break
    }
  }
  return {
    gridColumnStart: segment.x != null ? segment.x : '',
    gridRowStart: segment.y != null ? segment.y : '',
    transform: `rotate(${rotation}deg)`
  }
}
</script>
