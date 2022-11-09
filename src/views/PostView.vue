<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <h1 class="display-4 text-success text-center">Create New Post</h1>
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
          <button type="button" class="btn btn-success mx-2" @click="addBlog">
            Add Post
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
  name: "PostView",
  components: { NavBar },
  data: () => ({
    blogs: {
      title: "",
      content: "",
    },
    name: "",
    email: "",
    password: "",
    blog: [],
    userId: "",
  }),
  methods: {
    async addBlog() {
      let getResult = await axios
        .get(`http://localhost:3000/users/${this.userId}`)
        .then((res) => res.data);

      this.name = getResult.name;
      this.email = getResult.email;
      this.password = getResult.password;

      if (this.blogs.title === "") {
        return alert("Require Blog's title");
      } else if (this.blogs.content === "") {
        return alert("Require Blog's content");
      } else {
        this.$store.commit("addBlog", {
          title: this.blogs.title,
          content: this.blogs.content,
          like: false,
          likeCount: 0,
          id: this.$store.state.blogs.length,
          name: this.name,
        });

        let result = await axios.put(
          `http://localhost:3000/users/${this.userId}`,
          {
            name: this.name,
            email: this.email,
            password: this.password,
            blogs: [...this.$store.state.blogs],
          }
        );

        if (result.status == 200) {
          this.$router.push({ name: "blog" });
        }

        this.blogs = {
          title: "",
          content: "",
        };
      }
    },
  },

  async created() {
    const user = JSON.parse(localStorage.getItem("user-info"));
    user.map((user) => (this.userId = user.id));
    await axios
      .get(`http://localhost:3000/users/${this.userId}`)
      .then((res) => (this.$store.state.blogs = res.data.blogs));
  },
};
</script>
