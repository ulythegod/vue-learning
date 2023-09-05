<template>
  <div class="text-sm text-gray-500">child</div>
  <div>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue';

export default {
  components: {
    GrandChild,
  },
};
</script>

<style></style>
