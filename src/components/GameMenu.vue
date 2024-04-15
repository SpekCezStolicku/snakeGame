<template>
  <GameModal>
    <div>
      <h1 class="text-3xl mb-3">Snake menu</h1>
      <button @click="modalStore.toggleModal('gameMenu')">Close button</button>
    </div>
  </GameModal>
</template>

<script setup lang="ts">
import GameModal from './GameModal.vue'
import { useModalStore } from '@/store/modalStore'

const modalStore = useModalStore()
</script>
