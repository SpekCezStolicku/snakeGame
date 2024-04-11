import { defineStore } from 'pinia'
import { getRandomNumber } from '@/utils/utils'

// TYPES
import type { Direction, Loot, Position } from '@/types/types'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameSpeed: 150, // 150 ms - base speed
    currentSpeed: 150, // current snake speed
    minimumSpeed: 50,
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
    baseTileSize: 20,
    snakePosition: [
      // Start position default in center
      { x: 16, y: 16 }, // HEAD
      { x: 16, y: 17 }, // BODY
      { x: 16, y: 18 } // TAIL
    ],
    direction: 'UP' as Direction,
    nextDirection: null as Direction | null,
    directionChanges: [] as { x: number; y: number; direction: Direction }[],
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
    currentLootPosition: { x: 0, y: 0 } as Position,
    currentLoot: null as Loot | null,
    gameStarted: false,
    isGameOver: false,
    intervalId: undefined as number | undefined
  }),
  actions: {
    moveSnake() {
      if (this.isGameOver) return

      if (this.nextDirection && this.nextDirection !== this.getOppositeDirection(this.direction)) {
        const head = this.snakePosition[0]
        this.directionChanges.push({ x: head.x, y: head.y, direction: this.nextDirection })
        this.direction = this.nextDirection
        this.nextDirection = null
      }

      const head = this.snakePosition[0]
      const newPosition = { x: head.x, y: head.y, direction: this.direction }

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
      // Collision with borders
      if (
        newPosition.x < 1 ||
        newPosition.x > this.playground.xTiles ||
        newPosition.y < 1 ||
        newPosition.y > this.playground.yTiles
      ) {
        this.gameOver()
        return
      }

      this.snakePosition.unshift(newPosition)

      if (
        this.snakePosition.some(
          (segment, index) =>
            index !== 0 && segment.x === newPosition.x && segment.y === newPosition.y
        )
      ) {
        const segmentIndex = this.snakePosition.findIndex(
          (segment, index) =>
            index !== 0 && segment.x === newPosition.x && segment.y === newPosition.y
        )
        const removedSegments = this.snakePosition.length - segmentIndex
        this.snakePosition.splice(segmentIndex, removedSegments)
        this.updateScore(this.score - 50 * removedSegments)
        this.snakeLength -= removedSegments
        if (this.score < 0) {
          this.gameOver()
          return
        }
      }

      while (this.snakePosition.length > this.snakeLength) {
        this.snakePosition.pop()
      }

      if (this.isSnakeOnLoot()) {
        this.updateScore(this.score + this.currentLoot!.score)
        this.snakeLength += this.currentLoot!.bodyIncrease
        if (this.currentLoot!.snakeSpeed) {
          const temporarySpeedChange = this.currentLoot!.snakeSpeed
          this.currentSpeed += temporarySpeedChange
          setTimeout(() => (this.currentSpeed -= temporarySpeedChange), 3000)
        }
        this.getRandomLoot()
      }

      this.directionChanges = this.directionChanges.filter((dc) =>
        this.snakePosition.some((segment) => segment.x === dc.x && segment.y === dc.y)
      )
    },
    setDirection(newDirection: Direction) {
      const head = this.snakePosition[0]
      this.directionChanges.push({ x: head.x, y: head.y, direction: newDirection })
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
    startGame() {
      if (this.isGameOver) {
        return
      }
      this.gameStarted = true
      this.getRandomLoot()

      clearInterval(this.intervalId)
      this.intervalId = window.setInterval(() => {
        if (this.gameStarted) {
          this.moveSnake()
        } else {
          clearInterval(this.intervalId)
        }
      }, this.currentSpeed)
    },
    // Player highscore logic
    updateScore(newScore: number) {
      this.score = newScore

      // Level up every 500 points
      const newLevel = Math.floor(this.score / 500) + 1
      if (newLevel > this.level) {
        this.level = newLevel
        this.currentSpeed = Math.max(
          this.gameSpeed - this.gameSpeed * 0.1 * (this.level - 1),
          this.minimumSpeed
        )
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

      if (this.score > this.playerHighscore) {
        this.playerHighscore = this.score
        localStorage.setItem('snakeHighscore', this.score.toString())
      }
    },
    resetGame() {
      this.gameStarted = false
      this.isGameOver = false
      this.snakePosition = [
        { x: 16, y: 16 },
        { x: 16, y: 17 },
        { x: 16, y: 18 }
      ]
      this.direction = 'UP'
      this.nextDirection = null
      this.score = 0
      this.level = 1
      this.snakeLength = 3
      this.currentSpeed = this.gameSpeed
      this.currentLoot = null
    },
    setTileSize(newSize: number) {
      this.tileSize = newSize
    },
    resetTileSize() {
      this.tileSize = this.baseTileSize
    },
    adjustTileSize(maxWidth: number) {
      const totalWidth = this.playground.xTiles * this.tileSize
      if (totalWidth > maxWidth && totalWidth > 500) {
        const newTileSize = 10
        this.setTileSize(newTileSize)
      } else if (totalWidth > maxWidth && totalWidth < 350) {
        const newTileSize = 9
        this.setTileSize(newTileSize)
      } else {
        this.resetTileSize()
      }
    }
  }
})
