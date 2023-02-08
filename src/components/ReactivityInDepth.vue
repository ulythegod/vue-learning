<script setup lang="ts">
import {
  ref,
  watchEffect,
  computed,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

onRenderTracked((event) => {
  console.log("onRenderTracked", event);
});

onRenderTriggered((event) => {
  console.log("onRenderTriggered", event);
});

const A0 = ref(0);
const A1 = ref(1);
const A2 = computed(() => A0.value + A1.value, {
  onTrack(e) {
    //вызывается когда А2.value отслеживается как зависимость
    console.log("onTrack", e);
  },
  onTrigger(e) {
    //вызывается когда А2.value изменяется
    console.log("onTrigger", e);
  },
});
// watchEffect(() => {
//   //Отслеживаются А0 и А1
//   A2.value = A0.value + A1.value;
// });

//Триггер эффекта
//должен вызваться onTrigger
console.log("A2.value", A2.value);

//должен вызваться onTrack
A0.value = 2;
</script>

<template>
  <div>Reactivity In Depth: {{ A2 }}</div>
</template>
