<template>
  <div class="text-3xl font-bold underline">Prop drilling</div>
  <ChildTest />
</template>

<script>
import { provide } from "vue";
import ChildTest from "./ChildTest.vue";

export default {
  components: {
    ChildTest,
  },
  setup() {
    provide("count", 0);
  },
};
</script>

<style></style>
