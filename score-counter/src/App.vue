<template>
  <div id="app" class="container">
    <h1 class="text-center">Score Counter</h1>
    <counter name="Player 1"></counter>
    <counter name="Player 2"></counter>
  </div>
</template>

<script>
import Counter from "./components/Counter";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>