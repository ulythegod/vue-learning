<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from "vue";

const question = ref("");
const answer = ref("Question usually contain a question mark.");

//watch работает напрямую с рефом
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});

const x = ref(0);
const y = ref(0);

//single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);  
});

watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);    
  }
);

//array of multiply sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);  
});

//deep watchers
const obj = reactive({ count: 0});

watch(
  () => obj.count,
  () => {
    console.log("obj.count", obj.count);    
  }
)

obj.count = 123;

const data = ref('');
const todoId = ref('1');

watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  data.value = await response.json();
})
</script>

<template>
  <p class="questionForm">
    <span class="instruction">Ask a yes/no question:</span>
    <input v-model="question" />
  </p>
  <p class="answer">{{ answer }}</p>
  <div>
    <input placeholder="x" v-model="x" />
    <input placeholder="y" v-model="y" />
  </div>
  <div class="questionForm">
    <input placeholder="todo id" v-model="todoId" />
    <p class="answer">{{ data }}</p>
  </div>
</template>

<style>
.instruction {
  color: indianred;
  text-transform: uppercase;
}

.questionForm {
  background-color: darkslateblue;
}

.answer {
  background-color: darkslateblue;
  color: indianred;
}
</style>
