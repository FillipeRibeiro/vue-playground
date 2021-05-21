import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { publicKey } from "@/marvelApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: '',
    character: [],
    characters: []
  },
  mutations: {
  },
  actions: {
    async requestCharacters() {
      const url = `http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`;
      const response = await axios.get(url);
      this.state.characters = response.data.data.results;
    },
    async requestCharacter(state, id) {
      const size = "standard_large.jpg";
      const url = `http://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}`;

      const response = await axios.get(url);
      this.state.character = response.data.data.results[0];
      this.state.url = `${this.state.character.thumbnail.path}/${size}`;
    },
    storeCharacter(state, id) {
      const size = "standard_large.jpg";

      this.state.characters.map(item => {
        if (item.id == id) {
          this.state.character = item;
          this.state.url = `${item.thumbnail.path}/${size}`;
        }
      });
    }
  },
  modules: {
  },
  getters: {
    getUrl: state => state.url,
    getCharacter: state => state.character,
    getCharacters: state => state.characters
  }
})
