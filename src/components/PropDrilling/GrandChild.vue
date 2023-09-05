<template>
  <div>
    <span class="text-sm font-medium text-gray-900">Count: </span> {{ count }}
  </div>
  <div>
    <span class="text-sm font-medium text-gray-900">smth: </span> {{ smth }}
  </div>
</template>

<script>
import { requireInjection } from "../../utils/injections.ts";

export default {
  setup() {
    const count = requireInjection("count");
    const smth = requireInjection("smth", 123456789);

    return {
      count,
      smth,
    };
  },
};
</script>

<style></style>
