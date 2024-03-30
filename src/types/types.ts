export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export type Position = {
  x: number
  y: number
}

export type Loot = {
  name: string
  image: string
  score: number
  bodyIncrease: number
  snakeSpeed?: number
}

export interface LeaderboardScore {
  name: string
  score: number
}
