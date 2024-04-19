<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(segment, index) in snakePosition"
    :key="`segment-${index}`"
    class="grid absolute"
    :class="index === 0 ? `z-30 place-items-center mb-1` : `place-items-end`"
    :style="[
      getSegmentStyle(segment, index),
      index === 0
        ? { width: `${gameStore.tileSize + gameStore.tileSize / 2}px` }
        : { height: `${gameStore.tileSize}px` }
    ]"
  >
    <img
      :src="`/src/assets/images/${getSegmentImage(index)}.png`"
      alt="Snake Segment"
      :style="
        index === 0
          ? { width: `${gameStore.tileSize + gameStore.tileSize / 2}px` }
          : { width: `${gameStore.tileSize}px` }
      "
      :class="index === 0 ? `` : `overflow-hidden`"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/store/gameSettings'
import type { Position } from '@/types/types'

const gameStore = useGameStore()
const snakePosition = computed(() => gameStore.snakePosition)

const lastRotation = ref(new Map())

const directionToDegrees = {
  UP: 0,
  RIGHT: 90,
  DOWN: 180,
  LEFT: 270
}

function getSegmentImage(index: number) {
  return index === 0 ? 'head' : 'body'
}

function getSegmentStyle(segment: Position, index: number) {
  const change = gameStore.directionChanges.find((dc) => dc.x === segment.x && dc.y === segment.y)
  let currentDirection = segment.direction || gameStore.direction
  let targetDirection = change ? change.direction : currentDirection
  let currentRotation = lastRotation.value.get(index) || directionToDegrees[currentDirection]
  let targetRotation = directionToDegrees[targetDirection]

  // Vypočítaj najkratšiu možnú rotáciu
  let rotationDifference = (targetRotation - currentRotation + 360) % 360
  if (rotationDifference > 180) {
    rotationDifference -= 360 // Zmena pre otočenie v opačnom smere, ak je kratšie
  }

  // Aktualizuj rotáciu iba pri zmenách
  if (change) {
    currentRotation += rotationDifference
    lastRotation.value.set(index, currentRotation)
  }
  console.log(currentRotation)

  const x =
    segment.x * gameStore.tileSize - (gameStore.tileSize * (gameStore.playground.xTiles + 1)) / 2
  const y =
    segment.y * gameStore.tileSize - (gameStore.tileSize * (gameStore.playground.yTiles + 1)) / 2

  return {
    transform: `translate(${x}px, ${y}px) rotate(${currentRotation}deg)`,
    transition: `transform ${gameStore.currentSpeed}ms linear`
  }
}
</script>
