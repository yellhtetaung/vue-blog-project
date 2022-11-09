<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <h1 class="display-4 text-success text-center">Edit Post</h1>
        <div class="col-lg-8 col-md-10 text-center mt-3">
          <input
            type="text"
            class="form-control py-2 my-3"
            placeholder="Title"
            v-model="blogs.title"
            autocomplete="off"
          />
          <textarea
            type="text"
            class="form-control py-2 my-3"
            placeholder="Write Somethings ..."
            rows="10"
            v-model="blogs.content"
            autocomplete="off"
          ></textarea>
          <button
            type="button"
            class="btn btn-warning mx-2"
            @click="updatePost"
          >
            Update Post
          </button>
          <button
            type="button"
            class="btn btn-danger mx-2"
            @click="discardChange"
          >
            Discard Change
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "EditPostView",
  components: { NavBar },
  data: () => ({
    blogs: {
      title: "",
      content: "",
      like: "",
    },
  }),

  methods: {
    discardChange() {
      this.$router.push({ name: "blog" });
    },
    async updatePost() {
      let result = await axios.put(
        "http://localhost:3000/blogs/" + this.$route.params.id,
        {
          title: this.blogs.title,
          content: this.blogs.content,
          like: this.blogs.like,
        }
      );

      if (result.status === 200) {
        this.$router.push({ name: "blog" });
      }
    },
  },

  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/blogs/" + this.$route.params.id
    );
    this.blogs = result.data;
  },
};
</script>
