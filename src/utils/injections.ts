import { inject, type InjectionKey } from "vue";

export function requireInjection<T>(key: InjectionKey<T>, defaultValue?: T) {
  const resolved = inject(key, defaultValue);

  console.log("key", key, "resolved", resolved);

  if (!resolved) {
    throw new Error(`${key} was not provided`);
  }

  return resolved;
}
