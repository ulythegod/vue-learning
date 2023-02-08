<script setup lang="ts">
import { reactive, computed, ref } from "vue";

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

//computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});

const firstName = ref("Selena");
const lastName = ref("Gomez");

const fullName = computed({
  //getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  //setter
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <div class="name">{{ fullName }}</div>
</template>

<style>
.name {
  color: hsla(160, 100%, 37%, 1);
}
</style>
