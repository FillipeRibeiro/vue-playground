<template>
  <div class="container">
    <h3 class="mt-3">Task List</h3>
    <div class="mb-3">
      <task-input @updateList="loadTasks"></task-input>
    </div>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(task, index) in allTasks"
        :key="task.title"
      >
        <button
          class="btn btn-primary me-1"
          @click="finishTask(task)"
          v-show="!task.done"
        >
          Done
        </button>
        <button class="btn btn-danger me-2" @click="removeTask(index)">
          Delete
        </button>
        <span :class="{ isDone: task.done }">{{ task.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import TaskInput from "./TaskInput";
export default {
  components: {
    TaskInput,
  },
  data() {
    return {
      allTasks: [],
    };
  },
  mounted() {
    if (localStorage.allTasks) {
      this.allTasks = JSON.parse(localStorage.allTasks);
    }
  },
  watch: {
    allTasks: {
      handler() {
        localStorage.allTasks = JSON.stringify(this.allTasks);
      },
      deep: true,
    },
  },
  methods: {
    finishTask(task) {
      task.done = !task.done;
    },
    removeTask(taskIndex) {
      this.allTasks.splice(taskIndex, 1);
    },
    loadTasks() {
      this.allTasks = JSON.parse(localStorage.allTasks);
    },
  },
};
</script>

<style scoped>
.isDone {
  text-decoration: line-through;
}
</style>
