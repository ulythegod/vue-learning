<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import IncrementButton from "./components/IncrementButton.vue";
import ComputedProperty from "./components/ComputedProperty.vue";
import ReactivityInDepth from "./components/ReactivityInDepth.vue";
import ListRendering from "./components/ListRendering.vue";
import FormInputBindings from "./components/FormInputBindings.vue";
import LifecycleHooks from "./components/LifecycleHooks.vue";
import WatchersLearn from "./components/WatchersLearn.vue";

const state = reactive({
  msg: "You did it!!",
  ok: true,
});

let A0 = 1;
let A1 = 2;
let A2 = A0 + A1;

console.log("A2", A2);// 3

A0 = 2;
console.log("A2", A2);

function showH1() {
  state.ok = !state.ok;
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <h1 v-show="state.ok">H1!!!</h1>
    <div>
      <button :class="{ howH1Btn: true }" @click="showH1">showH1?????</button>
    </div>
    <div class="wrapper">
      <HelloWorld :msg="state.msg" />
      <span>{{ state.msg }}</span>
      <IncrementButton />
      <ComputedProperty />
      <nav :class="{ nav: true }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <ListRendering />
  <ReactivityInDepth />
  <FormInputBindings />
  <LifecycleHooks />
  <WatchersLearn />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.howH1Btn {
  background-color: aquamarine;
  color: black;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
