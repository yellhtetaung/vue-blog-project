import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("../views/PostView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/editpost/:id",
    name: "edit",
    component: () => import("../views/EditPostView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
