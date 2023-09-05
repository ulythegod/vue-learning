<template>
  <div class="flex flex-wrap items-stretch md:-mr-4">
    <div
      class="w-full md:w-1/3 md:pr-4 pb-4"
      v-for="card in cards"
      :key="card.name"
    >
      <MoleculeCard class="h-full" :card="card" />
    </div>
  </div>
</template>

<script>
import MoleculeCard from "../Molecules/MoleculeCard.vue";

export default {
  components: {
    MoleculeCard,
  },
  props: {
    cards: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
  },
};
</script>

<style></style>
