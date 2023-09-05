<template>
  <a :href="link.url">{{ link.name }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
