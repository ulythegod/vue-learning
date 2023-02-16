<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
import gsap from 'gsap';

const number = ref(0);
const tweened = reactive({
    number: 0
})

watch(number, (n) => {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0})
})
</script>

<template>
    <div>
        Type a numberL <input v-model.number="number" />
        <p>{{ tweened.number.toFixed(0) }}</p>
    </div>
</template>