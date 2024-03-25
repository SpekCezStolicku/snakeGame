<template>
  <div
    v-if="props.visible"
    :style="{ gridColumnStart: props.position.x, gridRowStart: props.position.y }"
  >
    <img :src="`/src/assets/images/loot/${props.image}.png`" alt="Loot" class="loot" />
  </div>
</template>

<script setup lang="ts">
import type { Position } from './GameBoard.vue'

const props = defineProps({
  visible: Boolean,
  image: String,
  position: { type: Object as () => Position, required: true }
})
</script>

<style scoped>
.loot {
  width: 20px;
}
</style>
