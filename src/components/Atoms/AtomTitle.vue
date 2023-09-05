<template>
  <component :is="tag" class="text-3xl font-serif pb-2">
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
