<script setup lang="ts">
import { reactive, ref } from "vue";

const state = reactive({
  count: 0,
  nested: { count: 0 },
  arr: ["foo", "bar"],
});

function increment() {
  state.count++;
}

function mutateDeeply() {
  state.nested.count++;
  state.arr.push("baz");
}

const refCount = ref(0);

function incrementRefCount() {
  refCount.value++;
}

const count = ref(0);
const state2 = reactive({
  count,
});

console.log("state2.count", state2.count); //0
state2.count = 1;
console.log("state2.count", state2.count, "count.value", count.value); //1 1

const books = reactive([ref("Vue 3 Guide")]);
console.log(books[0].value);
const map = reactive(new Map([["count", ref(123)]])); //123
console.log(map.get("count")?.value);
</script>

<template>
  <div>
    <button @click="increment">Increment Button: {{ state.count }}</button>
  </div>
  <div>
    <button @click="mutateDeeply">
      Mutate Deeply Buttton: {{ state.nested.count }} {{ state.arr }}
    </button>
  </div>
  <div>
    <button @click="incrementRefCount">
      Increment Ref Count Button: {{ refCount }}
    </button>
  </div>
</template>
