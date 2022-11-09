<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark py-2"
    :class="backgroundColor"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand fs-2 fw-bold">ZCode</router-link>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#navmenu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <div
        id="navmenu"
        class="offcanvas offcanvas-start text-bg-dark w-75"
        tabindex="-1"
      >
        <div class="offcanvas-header">
          <button
            class="btn ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark text-light fa-2x"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav mb-2 mb-sm-0 ms-sm-auto">
            <li
              class="nav-item mx-lg-2 mx-auto my-lg-0 my-3"
              data-bs-dismiss="offcanvas"
            >
              <router-link :to="{ name: 'blog' }" class="nav-link"
                >Blog</router-link
              >
            </li>
            <li
              class="nav-item mx-lg-2 mx-auto my-lg-0 my-3"
              data-bs-dismiss="offcanvas"
            >
              <router-link :to="{ name: 'post' }" class="nav-link"
                >Post</router-link
              >
            </li>
            <li
              class="nav-item mx-lg-2 mx-auto my-lg-0 my-3"
              data-bs-dismiss="offcanvas"
            >
              <div class="dropdown">
                <a
                  href="javascript:void(0)"
                  class="nav-link"
                  data-bs-toggle="dropdown"
                  data-bs-target="dropdownmenu"
                >
                  <i class="fa-regular fa-user"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      :to="{ name: 'profile' }"
                      class="dropdown-item"
                      >{{ name }}</router-link
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <router-link
                      :to="{ name: 'signin' }"
                      class="dropdown-item"
                      @click="signOut"
                      >Sign Out
                      <i class="fa-solid fa-arrow-right-from-bracket"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    name: "",
  }),

  methods: {
    loadData() {
      let user = localStorage.getItem("user-info");
      let usernames = JSON.parse(user);
      if (Array.isArray(usernames)) {
        usernames.forEach((username) => {
          this.name = username.name;
        });
      } else {
        this.name = usernames.name;
      }
    },
    signOut() {
      localStorage.removeItem("user-info");
    },
  },

  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signin" });
    }
    this.loadData();
  },

  computed: {
    backgroundColor() {
      switch (this.$route.name) {
        case "blog":
          return "bg-danger";
        case "post":
          return "bg-success";
        case "edit":
          return "bg-success";
        case "profile":
          return "bg-primary";
        default:
          return "bg-danger";
      }
    },
  },
};
</script>
