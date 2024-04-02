<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    :style="getSegmentStyle(segment, index)"
  >
    <img :src="`/src/assets/images/${getSegmentImage(index)}.png`" alt="Snake Segment" />
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
const tail = 'tail'

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
