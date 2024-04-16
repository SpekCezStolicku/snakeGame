<template>
  <GameModal class="px-3">
    <div>
      <h1 class="text-2xl md:text-3xl mb-3 w-fit mx-auto">Snake menu</h1>
      <div v-if="gameStore.player === '' || editName" class="flex items-center justify-center">
        <BaseInput v-model="playerName" />
        <BaseButton
          text="Ok"
          :disabled="playerName.length === 0"
          :proceed="true"
          @click="savePlayerName"
        />
      </div>
      <div v-else class="flex justify-center items-center my-5 text-xl md:text-2xl">
        <img class="mr-2 w-8 md:w-10" src="/src/assets//images/snake.png" alt="snake" />
        <p class="font-bold mr-5 text-gradient from-orange-500 to-red-800">
          {{ gameStore.player }}
        </p>
        <BaseButton @click="editName = !editName" :styled="false" icon="edit" text="edit" />
      </div>
      <div class="flex-col flex">
        <BaseButton text="World leaderboard" class="my-5" />
        <BaseButton text="Close menu" :danger="true" @click="modalStore.toggleModal('gameMenu')" />
      </div>
    </div>
  </GameModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameModal from './GameModal.vue'
import BaseButton from './forms/BaseButton.vue'
import BaseInput from './forms/BaseInput.vue'
import { useModalStore } from '@/store/modalStore'
import { useGameStore } from '@/store/gameSettings'

const modalStore = useModalStore()
const gameStore = useGameStore()

let editName = ref(false)
const playerName = ref('')

function savePlayerName() {
  gameStore.setPlayerName(playerName.value)
  editName.value = false
}
</script>
