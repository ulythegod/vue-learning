<script setup lang="ts">
import { ref } from "vue";
import CustomInput from './CustomInput.vue';

const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);

const name = ref("");
const message = ref("");
const checked = ref(false);
const checkedNamesForCats = ref([]);
const picked = ref("");
const selected = ref("");
const selectedMultiply = ref([]);
const customInputValue = ref("");
</script>

<template>
  <div class="formBlock">
    <p>Name</p>
    <input v-model="name" />
    <p>Multiline message</p>
    <textarea v-model="message"></textarea>
    <p>Do You like cats?</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <p>Choose a name for the cat</p>
    <input
      type="checkbox"
      id="Jackob"
      value="Jackob"
      v-model="checkedNamesForCats"
    />
    <label for="Jackob">Jackob</label>
    <input
      type="checkbox"
      id="Edward"
      value="Edward"
      v-model="checkedNamesForCats"
    />
    <label for="Edward">Edward</label>
    <input
      type="checkbox"
      id="Bella"
      value="Bella"
      v-model="checkedNamesForCats"
    />
    <label for="Bella">Bella</label>
    <p>Radiooo</p>
    <input type="radio" id="gaga" value="gaga" v-model="picked" />
    <label for="gaga">gaga</label>
    <input type="radio" id="myradioo" value="myradioo" v-model="picked" />
    <label for="myradioo">myradioo</label>
    <p>Select single</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>Select multiply</p>
    <select v-model="selectedMultiply" multiple>
      <option
        v-for="(option, index) in options"
        :value="option.value"
        :key="index"
      >
        {{ option.text }}
      </option>
    </select>
    <p>Custom input</p>
    <CustomInput v-model.capitalize="customInputValue" />
  </div>
  <div class="result">
    <h1 :class="{ resultName: true }">Form result</h1>
    <p class="resultItem">name: {{ name }}</p>
    <p class="resultItem">message: {{ message }}</p>
    <p class="resultItem">checked: {{ checked }}</p>
    <p class="resultItem">checkedNamesForCats: {{ checkedNamesForCats }}</p>
    <p class="resultItem">picked: {{ picked }}</p>
    <p class="resultItem">selected: {{ selected }}</p>
    <p class="resultItem">selectedMultiply: {{ selectedMultiply }}</p>
    <p class="resultItem">custom input value: {{ customInputValue }}</p>
  </div>
</template>

<style>
.formBlock {
  background-color: honeydew;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
}

.result {
  background-color: beige;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
}

.resultName {
  color: brown;
}

.resultItem {
  color: chocolate;
}
</style>
