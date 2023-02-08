<script setup lang="ts">
import { ref, reactive } from "vue";
import moment from "moment";

const items = ref([{ message: "Foo" }, { message: "Bar" }]);
const parentMessage = ref("Parent");

const myObject = reactive({
  title: "How to lists in Vue",
  author: "Jane Doe",
  publishedAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
});
</script>

<template>
  <div :class="{ listBlock: true }">
    <ul>
        <li :class="{ listItem: true }" v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ item.message }}
        </li>
    </ul>
    <ul>
      <li :class="{ objectItem: true }" v-for="(value, key, index) in myObject" :key="index">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<style>
.listBlock {
  background-color: cornsilk;
  padding: 10px;
  margin: 5px;
}

.listItem {
  color: cadetblue;
}

.objectItem {
    color: darkcyan;
}
</style>
