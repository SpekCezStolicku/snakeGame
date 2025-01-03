import { defineStore } from 'pinia'
import { useGameStore } from '@/store/gameSettings'

export const useModalStore = defineStore('modal', {
  state: () => ({
    gameRules: false,
    gameMenu: false,
    leaderBoard: false
  }),
  actions: {
    toggleModal(modalKey: keyof typeof this.$state) {
      this.$state[modalKey] = !this.$state[modalKey]
      const gameStore = useGameStore()
      if (modalKey === 'gameMenu') {
        this.$state[modalKey] ? gameStore.pauseGame() : gameStore.continueGame()
      }
    }
  }
})
