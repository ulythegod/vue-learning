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
    const smth = null;
    provide("count", 152, "smth", smth);
  },
};
</script>

<style></style>
