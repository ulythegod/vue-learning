<script setup lang="ts">
interface  PropsLearningProps {
  name: string,
  age: number
}

defineProps<PropsLearningProps>();

const emit = defineEmits(['someEvent']);

function buttonClick() {
  emit('someEvent', 'Clicked once...')
}

const vFocus = {
  mounted: (el: any) => el.focus()
}
</script>

<template>
  <div class="propsLearningBlock">
    {{ name }} : {{ age }}
    <button v-focus @click="buttonClick"><slot>default text</slot></button>
  </div>
</template>

<style>
.propsLearningBlock {
  background-color: chocolate;
  margin: 5px;
}
</style>