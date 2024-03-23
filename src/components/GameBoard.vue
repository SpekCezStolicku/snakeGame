<template>
  <section id="board" class="text-center w-[620px] h-[620px] my-20">
    <div
      v-for="(segment, index) in snakePosition"
      :key="`segment-${index}`"
      class="snake-segment"
      :style="{ gridColumnStart: segment.x, gridRowStart: segment.y }"
    >
      <img
        :src="`/src/assets/images/${getSegmentImage(index)}.png`"
        alt="Snake Segment"
        :class="index === 0 ? 'snake-head' : ''"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

type Position = {
  x: number
  y: number
}
const level: Ref<number> = ref(1)
const gameSpeed: Ref<number> = ref(500 / level.value)
let snakePosition = ref<Position[]>([
  { x: 16, y: 16 },
  { x: 16, y: 17 },
  { x: 16, y: 18 }
])

// GET IMAGES
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

// DIRECTION AND MOVES
const direction = ref('UP')

function handleKeydown(event: KeyboardEvent) {
  const keyDirectionMap: { [key: string]: string } = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT'
  }

  const newDirection = keyDirectionMap[event.key as keyof typeof keyDirectionMap]
  if (newDirection) {
    direction.value = newDirection
  }
}

function moveSnake() {
  const newPosition = { ...snakePosition.value[0] }

  switch (direction.value) {
    case 'UP':
      newPosition.y -= 1
      break
    case 'DOWN':
      newPosition.y += 1
      break
    case 'LEFT':
      newPosition.x -= 1
      break
    case 'RIGHT':
      newPosition.x += 1
      break
  }

  snakePosition.value = [newPosition, ...snakePosition.value.slice(0, -1)]
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  setInterval(moveSnake, gameSpeed.value)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
#board {
  display: grid;
  z-index: 0;
  grid-template-columns: repeat(31, 20px);
  grid-template-rows: repeat(31, 20px);
  background: #80d5a6;
  border: 5px dashed mediumseagreen;
  box-shadow:
    0 0 0 2.5px #226741,
    0 0 0 12.5px #fff,
    inset 0 0 0 2.5px #226741,
    0 5px 12px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 6px #fff,
    inset 0 0 100vw 100vw beige;
}

.snake-head {
  width: 35px;
  position: absolute;
  transform: translate(-23%, -50%);
  z-index: 10;
}
</style>
