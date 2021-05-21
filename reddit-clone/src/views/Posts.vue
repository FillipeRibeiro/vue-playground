<template>
  <div class="home">
    <ul class="list-unstyled">
      <li class="media m-3" v-for="(post, index) in posts" :key="post.data.id">
        <img
          class="mr-3"
          :src="post.data.thumbnail"
          alt="Generic placeholder image"
        />
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            <a :href="getFullUrl(post.data.permalink)" target="__blank">
              {{ post.data.title }}
            </a>
          </h5>
          <span>
            <h3 class="text-danger">{{ post.data.ups }} ⬆️</h3>
            <p>
              created {{ formatDate(post.data.created_utc) }} ago by
              {{ post.data.author }}
            </p>
            <span class="badge badge-pill badge-secondary">
              {{ post.data.num_comments }} coments
            </span>
            <button
              type="button"
              class="btn btn-primary"
              @click="changeImageVisibility(index)"
            >
              {{ posts[index].showImage ? "Hide" : "Show" }} button
            </button>
            <div v-if="posts[index].showImage">
              <img :src="post.data.url" class="image" />
            </div>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { parse, distantInWords } from 'date-fns';

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      const url = 'https://www.reddit.com/r/rarepuppers/.json';
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          this.posts = result.data.children;
          this.posts.forEach((post, index) => {
            this.posts[index].showImage = false;
          });
        });
    },
    formatDate(date) {
      // return distantInWords(parse(date), new Date());
      return date;
    },
    getFullUrl(path) {
      return `https://www.reddit.com/${path}`;
    },
    changeImageVisibility(index) {
      this.posts[index].showImage = !this.posts[index].showImage;
      console.log(this.posts[index].showImage);
    },
  },
};
</script>

<style scoped>
.image {
  height: 400px;
  width: 400px;
}
</style>
