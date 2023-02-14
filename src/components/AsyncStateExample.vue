<script setup>
import { ref, computed } from 'vue';
import { useFetch } from '../utils/fetch.ts';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
const id = ref('1');
const url = computed(() => baseUrl + id.value);

const { data, error, retry } = useFetch(url);
</script>

<template>
    <div>
        Load post id:
        <button v-for="i in 5" :key="i" @click="id = i">{{ i }}</button>
    </div>
    <div v-if="error">
        <p>Ooops! Error encountered: {{ error.message }}</p>
        <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">
        Data loaded:
        <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
</template>