<template>
  <div class="px-4 pt-40 pb-12 md:py-32 bg-blue-900 text-gray-100">
    <header class="max-w-sm md:max-w-xl mx-auto">
      <AtomTitle tag="h1" content="Atomic Design in Vue.js" />
      <AtomText
        text="Etiam in arcu lectus. Nulla facilisi. Nunc viverra vehicula nunc eu tristique. Sed gravida libero sem, sed ornare arcu venenatis at."
      />
      <AtomButton class="md:max-w-xs" :link="{ name: 'Button', url: '#' }" />
    </header>
  </div>
</template>

<script>
import AtomTitle from "../Atoms/AtomTitle.vue";
import AtomText from "../Atoms/AtomText.vue";
import AtomButton from "../Atoms/AtomButton.vue";

export default {
  components: {
    AtomTitle,
    AtomText,
    AtomButton,
  },
};
</script>
