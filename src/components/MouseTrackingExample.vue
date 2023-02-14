<script setup>
import { useMouse } from '../utils/mouse.ts';

const { x, y } = useMouse();
</script>

<template>
    Mouse position is at: {{ x }}, {{ y }}
</template>
