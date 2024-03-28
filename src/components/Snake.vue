<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    :style="getSegmentStyle(segment, index)"
  >
    <img
      :src="`/src/assets/images/${getSegmentImage(index)}.png`"
      alt="Snake Segment"
      :class="index === 0 ? 'snake-head' : ''"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import type { Position } from '@/types/types'

const gameStore = useGameStore()

const snakePosition = computed(() => gameStore.snakePosition)

const head = 'snakeHead'
const body = 'snakeBody'
const tail = 'snakeTail'

function getSegmentImage(index: number) {
  if (index === 0) {
    return head
  } else if (index === snakePosition.value.length - 1) {
    return tail
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
        rotation = 180
        break
      case 'LEFT':
        rotation = -90
        break
    }
  }
  return {
    gridColumnStart: segment.x,
    gridRowStart: segment.y,
    transform: `rotate(${rotation}deg)`
  }
}
</script>

<style scoped>
.snake-head {
  position: absolute;
  width: 35px;
  transform: translate(-23%, -50%);
  z-index: 10;
  max-width: none;
}
</style>
