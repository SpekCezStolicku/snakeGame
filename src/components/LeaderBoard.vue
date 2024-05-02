<template>
  <GameModal>
    <div class="text-sm md:text-xl">
      <div class="flex items-center justify-center mx-auto mb-5">
        <img src="/src/assets/images/leaderSnake.png" alt="leader snake" class="w-6 md:w-8" />
        <h1 class="font-bold text-2xl md:text-3xl underline">Top Scores</h1>
        <img
          src="/src/assets//images/leaderSnake.png"
          alt="leader snake"
          class="w-6 md:w-8 scale-x-[-1]"
        />
      </div>
      <div class="grid grid-cols-3 border-b-2 mb-2 font-normal">
        <p class="text-start">Player name</p>
        <p class="text-center">Total score</p>
        <p class="text-end">Snake length</p>
      </div>
      <div class="grid grid-cols-3" v-for="(score, index) in scores" :key="index">
        <p
          class="text-left flex items-center flex-nowrap"
          :class="{
            'text-amber-500': index === 0,
            'text-slate-400': index === 1,
            'text-orange-500': index === 2
          }"
        >
          <span class="text-black mr-2"> {{ index + 1 }}. </span>
          <img
            v-if="index === 0"
            class="w-5 md:w-7"
            src="/src/assets/images/crown.png"
            alt="crown"
          />
          {{ score.playerName }}
        </p>
        <p class="text-center">{{ score.score }}</p>
        <p class="text-right">{{ score.snakeLength }}</p>
      </div>
      <BaseButton
        class="mt-4 w-full"
        text="I can do better"
        @click="modalStore.toggleModal('leaderBoard')"
      />
    </div>
  </GameModal>
</template>

<script setup lang="ts">
import GameModal from './GameModal.vue'
import BaseButton from '@/components/forms/BaseButton.vue'
import { onMounted, ref } from 'vue'
import { db } from '@/firebase/config'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import type { Score } from '@/types/types'
import { useModalStore } from '../store/modalStore'

const modalStore = useModalStore()
const scores = ref<Score[]>([])

const loadScores = async () => {
  const scoresRef = collection(db, 'scores')
  const scoresQuery = query(scoresRef, orderBy('score', 'desc'), limit(10))

  const querySnapshot = await getDocs(scoresQuery)
  scores.value = querySnapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      playerName: data.playerName as string,
      score: data.score as number,
      snakeLength: data.snakeLength as number
    }
  })
}

onMounted(() => {
  loadScores()
})
</script>
