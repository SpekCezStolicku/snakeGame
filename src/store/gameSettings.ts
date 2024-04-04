import { defineStore } from 'pinia'
import { getRandomNumber } from '@/utils/utils'

// TYPES
import type { Direction, Loot, Position } from '@/types/types'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameSpeed: 150, // 150 ms - speed increase depends on score
    currentSpeed: 150,
    level: 1, // Points to level of difficulty
    snakeLength: 3, // Starts with head and body
    score: 0, // Current score
    player: '', // Player name
    playerHighscore: parseInt(localStorage.getItem('snakeHighscore') || '0'), //Player's best individual score
    leaderboard: [], // TO DO - firebase
    playground: {
      xTiles: 31,
      yTiles: 31
    },
    tileSize: 20, // Size in px
    snakePosition: [
      // Start position default in center
      { x: 16, y: 16 }, // HEAD
      { x: 16, y: 17 }, // BODY
      { x: 16, y: 18 } // TAIL
    ],
    direction: 'UP' as Direction,
    nextDirection: null as Direction | null,
    loot: [
      { name: 'Apple', image: 'apple', score: 10, bodyIncrease: 0, snakeSpeed: 0 },
      { name: 'Banana', image: 'banana', score: 20, bodyIncrease: 1, snakeSpeed: 10 },
      { name: 'Cherries', image: 'cherries', score: 30, bodyIncrease: 2, snakeSpeed: 0 },
      { name: 'Grape', image: 'grape', score: 40, bodyIncrease: 1, snakeSpeed: -20 },
      { name: 'Lemon', image: 'lemon', score: 50, bodyIncrease: 1, snakeSpeed: -30 },
      { name: 'Peach', image: 'peach', score: 60, bodyIncrease: 1, snakeSpeed: 10 },
      { name: 'Melon', image: 'melon', score: 70, bodyIncrease: 3, snakeSpeed: 10 },
      { name: 'Pineapple', image: 'pineapple', score: 80, bodyIncrease: 2, snakeSpeed: -10 },
      { name: 'Strawberry', image: 'strawberry', score: 90, bodyIncrease: 3, snakeSpeed: 0 }
    ] as Loot[],
    currentLootPosition: { x: null, y: null } as Position,
    currentLoot: null as Loot | null,
    gameStarted: false,
    isGameOver: false
  }),
  actions: {
    moveSnake() {
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

      // Borders check
      if (
        newPosition.x < 1 ||
        newPosition.x > this.playground.xTiles ||
        newPosition.y < 1 ||
        newPosition.y > this.playground.yTiles
      ) {
        this.gameOver()
      } else {
        this.snakePosition.unshift(newPosition)

        if (this.isSnakeOnLoot()) {
          this.updateScore(this.score + this.currentLoot!.score)
          this.snakeLength += this.currentLoot!.bodyIncrease

          if (this.currentLoot!.snakeSpeed) {
            const temporarySpeedChange = this.currentLoot!.snakeSpeed
            this.currentSpeed += temporarySpeedChange

            setTimeout(() => {
              this.currentSpeed -= temporarySpeedChange
            }, 3000)
          }
          this.getRandomLoot()
        } else if (
          this.snakePosition
            .slice(1)
            .some((segment) => segment.x === newPosition.x && segment.y === newPosition.y)
        ) {
          // Snake segment collision
          const segmentIndex = this.snakePosition.findIndex(
            (segment, index) =>
              index !== 0 && segment.x === newPosition.x && segment.y === newPosition.y
          )
          if (segmentIndex > 0) {
            const segmentsRemoved = this.snakePosition.length - segmentIndex
            this.snakePosition = this.snakePosition.slice(0, segmentIndex)
            this.snakeLength = segmentIndex
            this.updateScore(this.score - 50 * segmentsRemoved) // -50 points for every segment
          }
        }

        if (this.snakePosition.length > this.snakeLength) {
          this.snakePosition.pop()
        }

        if (this.score < 0) {
          this.gameOver()
        }
      }
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

      // Level up every 500 points
      const newLevel = Math.floor(this.score / 500) + 1
      if (newLevel > this.level) {
        this.level = newLevel
        this.currentSpeed = Math.max(this.gameSpeed - this.gameSpeed * 0.1 * (this.level - 1), 60)
      }

      if (newScore > this.playerHighscore) {
        this.playerHighscore = newScore
        if (this.isGameOver) {
          localStorage.setItem('snakeHighscore', newScore.toString())
        }
      }
    },
    getRandomLoot() {
      let randomX: number, randomY: number
      let attempts = 0
      do {
        randomX = getRandomNumber(this.playground.xTiles, 1)
        randomY = getRandomNumber(this.playground.yTiles, 1)
        attempts++
        // 100 random attempts to create loot on free tile
        if (attempts >= 100) {
          console.log('No room for loot')
          break
        }
      } while (this.snakePosition.some((segment) => segment.x === randomX && segment.y === randomY))

      if (attempts <= 100) {
        this.currentLootPosition.x = randomX
        this.currentLootPosition.y = randomY
        const index = getRandomNumber(this.loot.length - 1, 0)
        this.currentLoot = this.loot[index]
      }
    },
    isSnakeOnLoot() {
      const head = this.snakePosition[0]
      return this.currentLootPosition.x === head.x && this.currentLootPosition.y === head.y
    },
    gameOver() {
      this.isGameOver = true
      console.log('Game Over')
    }
  }
})
