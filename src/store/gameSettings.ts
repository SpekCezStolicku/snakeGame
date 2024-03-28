import { defineStore } from 'pinia'

// TYPES
import type { Direction } from '@/types/types'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameSpeed: 500, // 500 ms - speed increase depends on score
    level: 1, // Points to level of difficulty
    snakeLength: 3, // Starts with head, body and tail
    score: 0, // Current score
    player: '', // Player name
    playerHighscore: parseInt(localStorage.getItem('snakeHighscore') || '0'), //Player's best individual score
    leaderboard: [], // TO DO - firebase
    playground: {
      xTiles: 31,
      yTiles: 31
    },
    snakePosition: [
      // Start position default in center
      { x: 16, y: 16 }, // HEAD
      { x: 16, y: 17 }, // BODY
      { x: 16, y: 18 } // TAIL
    ],
    direction: 'UP' as Direction,
    nextDirection: null as Direction | null,
    gameStarted: false
  }),
  actions: {
    moveSnake() {
      // Prevent fast direction switching by keyboard
      if (this.nextDirection && this.nextDirection !== this.getOppositeDirection(this.direction)) {
        this.direction = this.nextDirection
        this.nextDirection = null
      }

      const head = this.snakePosition[0]
      const newPosition = { ...head }

      switch (this.direction) {
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

      // BORDER PLAYGROUND COLLISION
      if (
        newPosition.x < 1 ||
        newPosition.x > this.playground.xTiles ||
        newPosition.y < 1 ||
        newPosition.y > this.playground.yTiles
      ) {
        alert('Game over!')
        return
      }

      this.snakePosition = [
        newPosition,
        ...this.snakePosition.slice(0, this.snakePosition.length - 1)
      ]
    },
    setDirection(newDirection: Direction) {
      this.nextDirection = newDirection
    },

    getOppositeDirection(direction: Direction) {
      switch (direction) {
        case 'UP':
          return 'DOWN'
        case 'DOWN':
          return 'UP'
        case 'LEFT':
          return 'RIGHT'
        case 'RIGHT':
          return 'LEFT'
      }
    },

    isGameStarted() {
      this.gameStarted = !this.gameStarted
    },
    // Player highscore logic
    updateScore(newScore: number) {
      this.score = newScore
      if (newScore > this.playerHighscore) {
        this.playerHighscore = newScore
        localStorage.setItem('snakeHighscore', newScore.toString())
      }
    }
  }
})
