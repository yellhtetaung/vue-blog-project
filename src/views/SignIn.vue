<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-md-6 col-sm-12">
        <h4 class="display-4 text-center text-primary">Log In</h4>
        <form action="" method="" class="mt-5">
          <input
            type="text"
            class="form-control p-2 my-3"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control p-2 my-3"
            placeholder="Enter password"
            v-model="password"
          />
          <div class="col-12 text-center">
            <button type="button" class="btn btn-primary mx-2" @click="login">
              Login
            </button>
            <router-link :to="{ name: 'signup' }" class="btn btn-success mx-2"
              >Sign Up</router-link
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
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    async login() {
      if (this.email === "") {
        return alert("Email is required");
      } else if (this.password === "") {
        return alert("Password is required");
      } else {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "blog" });
        }
      }
    },
  },
};
</script>
