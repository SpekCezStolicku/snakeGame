<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    :style="{ gridColumnStart: segment.x, gridRowStart: segment.y }"
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
</script>

<style scoped>
.snake-head {
  position: absolute;
  width: 35px;
  transform: translate(-23%, -50%);
  z-index: 10;
}
</style>
