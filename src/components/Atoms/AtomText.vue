<template>
  <p class="pb-6">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
