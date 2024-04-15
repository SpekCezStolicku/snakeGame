import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    gameRules: false,
    gameMenu: false
  }),
  actions: {
    toggleModal(modalKey: keyof typeof this.$state) {
      this.$state[modalKey] = !this.$state[modalKey]
    }
  }
})
