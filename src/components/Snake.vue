<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    class="grid relative"
    :class="index === 0 ? `z-30 place-items-center` : `place-items-end`"
    :style="[
      getSegmentStyle(segment),
      index === 0
        ? { width: `${gameStore.tileSize + gameStore.tileSize / 2}px` }
        : { height: `${gameStore.tileSize}px` }
    ]"
  >
    <img
      :src="`/snake/${getSegmentImage(index)}.png`"
      alt="Snake Segment"
      :style="index === 0 ? { width: `${gameStore.tileSize + gameStore.tileSize / 2}px` } : ''"
      :class="index === 0 ? `` : `overflow-hidden`"
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
  }
  return body
}

function getSegmentStyle(segment: Position) {
  let rotation = 0
  const change = gameStore.directionChanges.find((dc) => dc.x === segment.x && dc.y === segment.y)
  const segmentDirection = change ? change.direction : segment.direction || gameStore.direction

  switch (segmentDirection) {
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

  return {
    gridColumnStart: segment.x,
    gridRowStart: segment.y,
    transform: `rotate(${rotation}deg)`
  }
}
</script>
