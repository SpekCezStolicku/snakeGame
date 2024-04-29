# Snake Game with Unique Twists

Welcome to our custom Snake game, designed to challenge and entertain with a fresh take on the classic arcade favorite. This game is built using Vue 3 and TypeScript with the Composition API, optimized with Vite for swift performance. Our styling is powered by Tailwind CSS, ensuring a sleek, modern look.

## Ready to play?

https://spekcezstolicku.github.io/snakeGame/

## Features

- **Diverse Gameplay Mechanics**: Our Snake can eat up to **9 different types of fruit**, each with its own unique effect. Some fruits speed up the Snake, while others might slow it down or increase its size variably.
- **Realistic Snake Movement**: Unlike traditional implementations that use multiple segments, our Snake consists of only **two images**: a head and a body. This minimalistic approach beautifully simulates fluid, realistic movement.
- **Boundary Gameplay**: There are no teleporting edges in this game. If you hit the boundary, it's game over, adding an extra layer of challenge.
- **Global High Scores**: Compete with players around the world with high scores hosted on **Firebase**, encouraging continuous play and competition.

## Technology Stack

- **Frontend**: Vue 3 (Composition API) + TypeScript
- **Styling**: Tailwind CSS
- **Performance Optimization**: Vite
- **Backend**: Firebase (for global high scores)

Join the fun and test your reflexes and strategy with our modernized version of Snake. Whether you’re looking to kill time or aiming to top the global leaderboards, this game promises not to disappoint.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
