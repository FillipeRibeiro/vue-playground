<template>
  <div class="container">
    <form @submit.prevent="addNewTask">
      <div class="mb-3">
        <label for="newTodo">Task</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter new task here"
          aria-describedby="Enter new task here"
          v-model="newTask"
        />
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
      <button class="btn btn-danger m-1" @click="deleteAllTasks">
        Delete all tasks
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      allTasks: [],
    };
  },
  methods: {
    addNewTask() {
      if (this.newTask !== "") {
        this.allTasks.push({
          done: false,
          title: this.newTask,
        });
        localStorage.allTasks = JSON.stringify(this.allTasks);
        this.$emit("updateList");
        this.newTask = "";
      }
    },
    deleteAllTasks() {
      localStorage.allTasks = JSON.stringify([]);
      this.$emit("updateList");
    },
  },
};
</script>

<style scoped>
.isDone {
  text-decoration: line-through;
}
</style>
