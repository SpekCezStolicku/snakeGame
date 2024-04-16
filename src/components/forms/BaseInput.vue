<template>
  <div class="text-sm md:text-xl m-5">
    <label class="font-bold mr-3" :for="props.labelFor">{{ props.label }}</label>
    <input
      :id="props.labelFor"
      :placeholder="props.placeholder"
      class="pixel-input text-lg"
      :type="props.inputType"
      v-model="inputModel"
      @input="updateValue"
    />
  </div>
</template>
labeFor
<script setup lang="ts">
import { ref } from 'vue'

const inputModel = ref('')
const props = defineProps({
  inputType: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Enter here...' },
  labelFor: { type: String, default: 'input' },
  label: { type: String, default: 'Nickname:' }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style scoped>
.pixel-input {
  outline: none;
  padding: 5px 0 5px 12px;
  border: 3px solid rgb(150, 150, 150);
  box-shadow:
    0px 0px 0px 1px rgb(90, 90, 90),
    inset 0px 0px 0px 1px rgb(90, 90, 90),
    1px 2px 0px 2px rgb(100, 100, 100);
  border-radius: 0.3em;
  color: rgb(50, 50, 50);
}
.pixel-input:focus {
  box-shadow:
    0px 0px 0px 1px rgb(90, 90, 90),
    inset 0px 0px 0px 1px rgb(90, 90, 90),
    1px 2px 0px 1px rgb(100, 100, 100);
}
</style>
