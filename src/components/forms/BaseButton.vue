<template>
  <button
    class="text-sm md:text-lg flex items-center justify-center mx-3"
    :class="{
      'pixel-btn': props.styled,
      'pixel-btn--reset': props.danger,
      'pixel-btn--proceed': props.proceed
    }"
  >
    <img
      class="md:w-7 w-5 mr-2"
      v-if="props.icon"
      :src="`/src/assets/images/${props.icon}.png`"
      :alt="props.icon"
    />
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  danger: { type: Boolean, default: false },
  proceed: { type: Boolean, default: false },
  icon: String,
  styled: { type: Boolean, default: true }
})
</script>

<style scoped>
.pixel-btn {
  background: #92cd41;
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 3px 15px;
  text-decoration: none;
  color: black;
  box-shadow: inset -4px -4px 0px 0px #4aa52e;
}
.pixel-btn:hover,
.pixel-btn:focus {
  background: #76c442;
  box-shadow: inset -6px -6px 0px 0px #4aa52e;
}
.pixel-btn:active {
  box-shadow: inset 4px 4px 0px 0px #4aa52e;
}
.pixel-btn:before,
.pixel-btn:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
}
.pixel-btn:before {
  top: -4px;
  left: 0;
  border-top: 4px black solid;
  border-bottom: 4px black solid;
}
.pixel-btn:after {
  left: -4px;
  top: 0;
  border-left: 4px black solid;
  border-right: 4px black solid;
}
.pixel-btn--reset {
  background: #e76e55;
  box-shadow: inset -4px -4px 0px 0px #8c2022;
}
.pixel-btn--reset:hover,
.pixel-btn--reset:focus {
  background: #ce372b;
  box-shadow: inset -6px -6px 0px 0px #8c2022;
}
.pixel-btn--reset:active {
  box-shadow: inset 4px 4px 0px 0px #8c2022;
}
.pixel-btn--proceed {
  background: #f7d51d;
  box-shadow: inset -4px -4px 0px 0px #e59400;
}
.pixel-btn--proceed:hover,
.pixel-btn--proceed:focus {
  background: #f2c409;
  box-shadow: inset -6px -6px 0px 0px #e59400;
}
.pixel-btn--proceed:active {
  box-shadow: inset 4px 4px 0px 0px #e59400;
}
</style>
