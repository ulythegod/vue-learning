<script setup lang="ts">
import { ref } from 'vue';
import AnimationWithWatchers from './AnimationWithWatchers.vue';

const x = ref(0);

const onMouseMove = (event: any) => {
    x.value = event.clientX;
}
</script>

<template>
    <div @mousemove="onMouseMove" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
        <p>Move your mouse across this div...</p>
        <p>x: {{ x }}</p>
        <AnimationWithWatchers />
    </div>
</template>

<style>
    .movearea {
        transition: 0.3s background-color ease;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
</style>