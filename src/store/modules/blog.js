import { api } from "../../api"
//import router from "./../../router";
const state = {
  loading: false,
  data: null,
  err: null,
  blog:null
};

const mutations = {
  storeBlogRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
    state.blog =  null
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

  storeSetBlog(state, blog) {
    state.blog = blog,
    state.loading = false;
    state.err = null
  },

  storeGetOneBlog(state) {
    return state.oneBlog
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
        commit("storeSetBlog", result.data);
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
  fetchCreateBlog({ commit }, blog) {
    commit("storeBlogRequest");
    api
      .post("/blogs", blog)
      .then(result => {
        commit("storeSetBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchEditBlog({commit},data){
    //commit("storeBlogRequest");
    api
      .put(`/blogs/${data._id}`,data.blog)
      .then((result) => {
        commit("storeSetBlog", result.data);
        //router.replace("/admin/blogs");
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchDeleteBlog({ commit, dispatch }, id) {
    commit("storeBlogRequest");
    api
      .delete(`/blogs/${id}`)
      .then(() => {
        dispatch("fetchListBlogs");
      })
      .catch((err) => {
        commit("storeBlogFailed", err);
      });
  },
}

export default { state, mutations, actions };