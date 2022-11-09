<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <h1 class="display-4 text-center text-danger">Blog Lists</h1>
        <div
          class="col-11 mt-3"
          v-for="(blog, i) in $store.getters.getBlogs"
          :key="i"
        >
          <div class="card p-3 my-3">
            <div
              class="card-header d-flex justify-content-between align-items-center"
            >
              <h4>{{ blog.title }}</h4>
              <div class="dropdown">
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="dropdown"
                  data-bs-target="#dropdown"
                  v-show="menu"
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <router-link
                      :to="'/editpost/' + blog.id"
                      class="dropdown-item"
                      >Edit Post</router-link
                    >
                  </li>
                  <li>
                    <a href="#" class="dropdown-item" @click="deletePost(i)"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body py-2">
              <p>{{ blog.content }}</p>
            </div>
            <div class="card-footer">
              <div class="row align-items-center">
                <div class="col-2 text-center">
                  <button
                    type="button"
                    class="btn border btn-sm rounded-circle"
                    :class="{
                      'btn-danger border-0': blog.like,
                    }"
                    @click="likeClick(i)"
                  >
                    <i
                      class="fa-solid fa-heart text-danger"
                      :class="{ 'text-light': blog.like }"
                    ></i>
                  </button>
                  <span class="mx-2 small" v-if="blog.likeCount === 0"></span>
                  <span class="mx-2 small" v-else>{{ blog.likeCount }}</span>
                </div>
                <div class="col-10">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="comment ..."
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";

export default {
  name: "BlogView",
  components: { NavBar },
  data: () => ({
    blogs: [],
    menu: true,
    name: "",
  }),
  methods: {
    async likeClick(i) {
      this.name = this.$store.state.blogs[i].name;
      const getStoreUsersIdx = this.$store.state.users.filter(
        (x) => x.name === `${this.name}`
      );
      const idx = getStoreUsersIdx.length - 1;
      const userId = getStoreUsersIdx[idx].id;

      console.log(this.name, getStoreUsersIdx, idx, userId);

      if (this.$store.state.blogs[i].like) {
        this.$store.commit("unlikeBlog", i);
        this.$store.state.users[userId - 1].blogs[i].like = false;
        this.$store.state.users[userId - 1].blogs[i].likeCount -= 1;

        await axios.put(
          `http://localhost:3000/users/${userId}`,
          this.$store.state.users[idx]
        );
      } else if (!this.$store.state.blogs[i].like) {
        this.$store.commit("likeBlog", i);
        this.$store.state.users[userId - 1].blogs[i].like = true;
        this.$store.state.users[userId - 1].blogs[i].likeCount += 1;

        await axios.put(
          `http://localhost:3000/users/${userId}`,
          this.$store.state.users[userId - 1]
        );
      }
    },
  },

  async mounted() {
    const user = localStorage.getItem("user-info");
    const username = JSON.parse(user)[0].name;
    if (!user) {
      this.$router.push({ name: "signup" });
    }

    await axios.get(`http://localhost:3000/users/`).then((res) => {
      this.$store.state.users = res.data;
      const result = res.data.map((i) => i.blogs);
      result.map((i) =>
        i.map((x) => {
          this.blogs.push({ ...x });
        })
      );
      this.$store.state.blogs = this.blogs;
      this.name = username;
    });
  },
};
</script>
