<template>
  <div id="app">
    <h1 class="text-center">Todo App</h1>
    <div class="mb-3">
      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
export default {
  name: "App",
  components: {
    TaskList,
  },
};
</script>
