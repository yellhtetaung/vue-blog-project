import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    users: [],
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload);
    },
    likeBlog(state, payload) {
      state.blogs[payload].like = true;
      state.blogs[payload].likeCount += 1;
    },
    unlikeBlog(state, payload) {
      state.blogs[payload].like = false;
      state.blogs[payload].likeCount -= 1;
    },
    deleteBlog(state, payload) {
      state.blogs.splice(payload, 1);
    },
  },
  getters: {
    getBlogs: (state) => state.blogs,
  },
});
