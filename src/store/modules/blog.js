import { api } from "../../api"
import router from "./../../router";
const state = {
  loading: false,
  data: null,
  err: null,
  oneBlog: null,
};

const mutations = {
  storeBlogRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null,
    state.oneBlog =  null
  },

  storeBlogSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeBlogFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },

  storeUpdateBlog(state, blog) {
    if (blog) {
      state.data = state.data.map(item => {
        if (item._id === blog._id) {
          item = blog
        }
        return item
      })
    }
  },

  storeSetOneBlog(state, blog) {
    state.oneBlog = blog
  },

  // storeGetOneBlog(state) {
  //   return state.oneBlog
  // }
  
};

const actions = {
  fetchListBlogs({ commit }) {
    commit("storeBlogRequest");
    api.get("/blogs/")
      .then((result) => {
        commit("storeBlogSuccess", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      });
  },

  fetchDetailBlog({ commit }, id) {
    commit("storeBlogRequest");
    api.get(`/blogs/${id}`)
      .then(result => {
        commit("storeSetOneBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },

  fetchStatusBlog({ commit }, id) {
    api.get(`/blogs/status/${id}`)
      .then(result => {
        commit("storeUpdateBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchHotBlog({ commit }, id) {
    api.get(`/blogs/hot/${id}`)
      .then(result => {
        commit("storeUpdateBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  postBlog({ commit }, blog) {
    commit("storeBlogRequest");
    api
      .post("/blogs", blog)
      .then(result => {
        commit("storeBlogSuccess", result.data);
        router.replace("/admin/blogs/add");
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  }
}

export default { state, mutations, actions };