import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  err: null
};

const mutations = {
  storeBlogRequest(state) {
    state.loading = true;
    state.data = null,
      state.err = null
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
  }
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
        commit("storeBlogSuccess", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  }
}

export default { state, mutations, actions };