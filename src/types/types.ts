export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export type Position = {
  x: number
  y: number
}

export type Fruit = {
  name: string
  image: string
  score: number
  position: Position
}
