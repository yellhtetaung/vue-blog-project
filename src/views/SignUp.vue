<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-md-6 col-sm-12">
        <h4 class="display-4 text-center text-success">Sign Up</h4>
        <form action="" method="" class="mt-5">
          <input
            type="text"
            class="form-control p-2 my-3"
            placeholder="Enter Username"
            v-model="name"
          />
          <input
            type="text"
            class="form-control p-2 my-3"
            placeholder="Enter Email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control p-2 my-3"
            placeholder="Enter password"
            v-model="password"
          />
          <div class="col-12 text-center">
            <button type="button" class="btn btn-success mx-2" @click="signUp">
              Sign Up
            </button>
            <router-link to="/signin" class="btn btn-primary mx-2"
              >Login</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),

  methods: {
    async signUp() {
      if (this.name === "") {
        return alert("Name is required");
      } else if (this.email === "") {
        return alert("Email is required");
      } else if (this.password === "") {
        return alert("Password is required");
      } else if (
        this.$store.state.users.filter((i) => i.email === this.email).length > 0
      ) {
        return alert("Already has email");
      } else if (
        this.$store.state.users.filter((i) => i.email === this.email).length ===
        0
      ) {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          blogs: [],
        });

        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "blog" });
        }
      }
    },
  },
};
</script>
