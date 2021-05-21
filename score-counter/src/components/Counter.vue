<template>
  <div class="card">
    <div class="card-body text-center">
      <h3>{{ name }}</h3>
      <button @click="increaseScore" type="button" class="btn btn-success">
        Up
      </button>
      <span class="player-score">{{ player_score }}</span>
      <button @click="decreaseScore" type="button" class="btn btn-danger">
        Down
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      player_score: 0,
    };
  },
  methods: {
    increaseScore() {
      this.player_score += 1;
    },
    decreaseScore() {
      if (this.player_score > 0) {
        this.player_score -= 1;
      }
    },
  },
};
</script>

<style scoped>
.player-score {
  font-size: 4rem;
}
</style>