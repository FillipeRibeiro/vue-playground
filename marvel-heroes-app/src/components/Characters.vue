<template>
  <div>
    <div class="card-container">
      <div class="card" v-for="(character, index) in characters" :key="index">
        <h3>{{ character.name }}</h3>
        <router-link :to="{ name: 'character', params: { id: character.id } }">
          <button class="btn-view">View</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Characters",
  computed: {
    ...mapGetters({
      characters: "getCharacters"
    })
    // Both get data from GETTERS
    // characters() {
    //  return this.getCharacters();
    //  return this.$store.getters.getCharacters;
    // }
  },
  mounted() {
    // Both dispatch to ACTIONS
    this.requestCharacters();
    /* this.$store.dispatch("requestCharacters"); */
  },
  methods: {
    // ...mapGetters(["getCharacters"]),
    ...mapActions(["requestCharacters"])
  }
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 200px 200px 200px;
  margin-left: 25%;
}
.card {
  text-align: center;
  min-height: 200px;
  background-color: #333;
}
.card h3 {
  color: white;
}
.btn-view {
  width: 120px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  margin-top: 50px;
  font-weight: bold;
  border-radius: 15px;
  background-color: transparent;
}
</style>