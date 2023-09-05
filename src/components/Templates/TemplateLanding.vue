<template>
  <section class="flex flex-col min-h-screen">
    <OrganismHeader :links="links" />
    <div class="flex-auto flex flex-wrap bg-white">
      <MoleculeBanner class="w-full md:w-3/4 text-center md:text-left" />
      <div class="container mx-auto px-4 py-8 md:py-16">
        <OrganismGrid :cards="cards" />
      </div>
    </div>
    <OrganismFooter
      :columnOneLinks="columnOneLinks"
      :columnTwoLinks="columnTwoLinks"
    />
  </section>
</template>

<script>
import OrganismHeader from "../Organisms/OrganismHeader.vue";
import OrganismFooter from "../Organisms/OrganismFooter.vue";
import OrganismGrid from "../Organisms/OrganismGrid.vue";
import MoleculeBanner from "../Molecules/MoleculeBanner.vue";

export default {
  components: {
    OrganismHeader,
    OrganismFooter,
    OrganismGrid,
    MoleculeBanner,
  },
  data() {
    return {
      links: [
        {
          name: "testlink",
          url: "https://vuedose.tips/",
        },
        {
          name: "testlink2",
          url: "https://vuedose.tips/",
        },
      ],
      cards: [
        {
          title: "card",
          text: "fdgfgfd fdkgfkgd fhgfdg",
        },
        {
          title: "card2",
          text: "fdgfgfd fdkgfkgd fhgfdg",
        },
      ],
      columnOneLinks: [
        {
          name: "testlink",
          url: "https://vuedose.tips/",
        },
        {
          name: "testlink2",
          url: "https://vuedose.tips/",
        },
      ],
      columnTwoLinks: [
        {
          name: "testlink",
          url: "https://vuedose.tips/",
        },
        {
          name: "testlink2",
          url: "https://vuedose.tips/",
        },
      ],
    };
  },
};
</script>

<style></style>
