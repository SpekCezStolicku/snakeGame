<template>
  <p class="mx-auto text-center mb-2 md:text-xl text-xs w-11/12 md:w-full">
    Built with enthusiasm 🔥 and glazed with a little bit of magic ✨! ©{{ currentYear }} -
    <a class="underline text-blue-600" target="_blank" href="https://github.com/SpekCezStolicku/"
      >SpekCezStolicku</a
    >
  </p>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
