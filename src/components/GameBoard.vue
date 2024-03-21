<template>
  <section class="text-center w-[800px] h-[800px] box"></section>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  background: #80d5a6;
  border: 5px dashed mediumseagreen;
  box-shadow:
    0 0 0 2.5px #226741,
    0 0 0 12.5px #fff,
    inset 0 0 0 2.5px #226741,
    0 5px 10px 15px rgba(0, 0, 0, 0.5),
    inset 0 0 0 6px #fff,
    inset 0 0 100vw 100vw beige;
}
</style>
