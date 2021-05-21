<template>
  <div>
    <div class="flex-container">
      <div class="flex">
        <h3>{{ character.name }}</h3>
        <p>{{ character.description }}</p>
      </div>
      <div class="image">
        <img :src="url" alt="character" />
      </div>
    </div>
    <router-link to="/">
      <button name="back" type="button">Back</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Character",
  computed: {
    ...mapGetters({
      url: "getUrl",
      character: "getCharacter"
    })
  },
  mounted() {
    /* MAKE ANOTHER REQUEST TO SERVER */
    // this.requestCharacter(this.$route.params.id);
    /* STORE WITHOUT MAKING A SECOND REQUEST TO SERVER */
    this.storeCharacter(this.$route.params.id);
  },
  methods: {
    ...mapActions(["requestCharacter", "storeCharacter"])
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex {
  flex: 40%;
  text-align: right;
}
.image {
  flex: 70%;
}
img {
  width: 30%;
  height: auto;
  border-radius: 10px;
}
button {
  width: 150px;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
}
</style>