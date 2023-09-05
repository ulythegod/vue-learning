<template>
  <ul>
    <li v-for="(link, index) in links" :key="link.name + index">
      <AtomLink :link="link" />
    </li>
  </ul>
</template>

<script>
import AtomLink from "../Atoms/AtomLink.vue";

export default {
  components: {
    AtomLink,
  },
  props: {
    links: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
  },
};
</script>

<style></style>
