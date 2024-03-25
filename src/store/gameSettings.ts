import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameSpeed: 500, // 500 ms - speed increase depends on score
    level: 1, // points to level of difficulty
    snakeLength: 3, //Starts with head, body and tail
    score: 0,
    player: '', // Player name
    highscore: [], // TO DO - saving score and name after game into JSON file
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
    direction: 'UP' as 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
  }),
  actions: {
    moveSnake() {
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
    setDirection(newDirection: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') {
      this.direction = newDirection
    }
  }
})
