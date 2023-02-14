<script setup>
import { inject } from 'vue';

const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  //if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  //}
  emit('update:modelValue', value)
}

const providerMessage = inject('providerMessage');
</script>

<template>
  <p>providerMessage: {{ providerMessage }}</p>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>