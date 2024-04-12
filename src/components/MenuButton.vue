<template>
  <button
    class="text-lg md:text-xl font-bold text-orange-400 bg-black self-start 4k:self-start lg:self-center m-5 lg:m-10 lg:ml-24 4k:m-0"
  >
    Menu
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  padding: 0.4em 1.2em;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
}

button::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f97316;
  border-radius: inherit;
  box-shadow:
    0 0 0 2px #f97316,
    0 0.425em 0 0 #fde185;
  transform: translate3d(0, 0.35em, -1em);
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}
button:hover {
  background: black;
  transform: translate(0, 0.15em);
}
button:hover::before {
  box-shadow:
    0 0 0 2px #f97316,
    0 0.25em 0 0 #ffe79a;
  transform: translate3d(0, 0.25em, -1em);
}
button:active {
  background: black;
  transform: translate(0em, 0.4em);
}
button:active::before {
  box-shadow:
    0 0 0 2px #f97316,
    0 0 #ffe79a;
  transform: translate3d(0, 0, -1em);
}
</style>
