export function getRandomNumber(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function invertNumber(value: number | undefined): number {
  if (value) {
    return value * -1
  }
  return 0
}
