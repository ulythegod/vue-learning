<script setup lang="ts">
import { ref } from 'vue';
import { shuffle } from 'lodash';

const items = ref<Array<number>>([1, 2, 3, 4, 5]);

function addRundomIndex() {
    const num = Math.round(Math.random() * 100);
    items.value.push(num);
}

function removeRandomIndex() {
    const randomIndex = Math.floor(Math.random() * items.value.length);
    items.value = items.value.splice(randomIndex, 1);
}

function shuffleArray() {
    items.value = shuffle(items.value);
}
</script>

<template>
    <div>
        <button class="button" @click="addRundomIndex">Add rundom index</button>
        <button class="button" @click="removeRandomIndex">Remove random index</button>
        <button class="button" @click="shuffleArray">Shuffle</button>
        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </div>

</template>

<style>
    .button {
        background-color: hotpink;
        border-radius: 4px;
    }

    /* 1. declare transition */
    .list-move,
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    }

    /* 2. declare enter from and leave to state */
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: scaleY(0.01) translate(30px, 0);
    }

    /* 3. ensure leaving items are taken out of layout flow so that moving
          animations can be calculated correctly. */
    .list-leave-active {
      position: absolute;
    }
</style>
