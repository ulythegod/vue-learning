import { onMounted, onUnmounted } from 'vue';

export function useEventListener(target: any, event: string, callback: (event: any) => void) {
    onMounted(() => target.addEventListener(event, callback));
    onUnmounted(() => target.removeEventListener(event, callback));
}
