import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameSpeed: 5,
    score: 0,
    highscore: 0,
    playground: {
      width: 600,
      height: 400
    }
  }),
  actions: {
    increaseScore() {
      this.score++
    },
    setGameSpeed(speed: number) {
      this.gameSpeed = speed
    }
  }
})
