<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
    <button @click="open = true">Open Modal</button>
    <Teleport to="body">
        <div v-if="open" class="modal">
            <p>Hello from modal!</p>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>    
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: azure;
  border-radius: 4px;
  border: 1px salmon solid;
  padding: 10px;
}
</style>