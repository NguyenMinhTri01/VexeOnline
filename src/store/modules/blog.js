import { api } from "../../api"
//import router from "./../../router";
const state = {
  loading: false,
  data: null,
  err: null,
  blog:null,
  blogsHot: null,
  count: null
};

const mutations = {
  storeBlogRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
    state.blog =  null
    //state.blogsHot = null
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
  storeSetBlogsHot(state, blogsHot) {
    state.blogsHot = blogsHot,
    state.loading = false;
    state.err = null
  },
  storeDeleteBlogInData (state, id) {
    state.data = state.data.filter(blog => blog._id != id)
  }
};

const actions = {
  // fetchListBlogs({ commit }) {
  //   commit("storeBlogRequest");
  //   api.get("/blogs/")
  //     .then((result) => {
  //       commit("storeBlogSuccess", result.data);
  //     })
  //     .catch(err => {
  //       commit("storeBlogFailed", err);
  //     });
  // },
  fetchListCountBlogs({ commit }) {
    api.get("/blogs/countBlog")
      .then((result) => {
        state.count = result.data
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      });
  },
  fetchListBlogs({ commit },page=1) {
    //commit("storeBlogRequest");
    api.get(`/blogs?page=${page}`)
      .then((result) => {
        commit("storeBlogSuccess", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      });
  },

  fetchListBlogsHot({ commit }) {
    //commit("storeBlogRequest");
    api.get("/blogs/hotBlog")
      .then((result) => {
        commit("storeSetBlogsHot", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      });
  },

  fetchDetailBlog({ commit }, id) {
    //commit("storeBlogRequest");
    api.get(`/blogs/${id}`)
      .then(result => {
        commit("storeSetBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchDetailBlogBySlug({ commit }, slug) {
    commit("storeBlogRequest");
    //state.loading=true
    api.get(`/blogs/detail/${slug}`)
      .then(result => {
        commit("storeSetBlog", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchDetailBlogBySlugAgain({ commit }, slug) {
   // commit("storeBlogRequest");
    //state.loading=true
    api.get(`/blogs/detail/${slug}`)
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
  fetchCreateBlog({ commit,dispatch }, objectData) {
    commit("storeBlogRequest");
    if (objectData.fileAvatar) {
      api.post('/blogs', objectData.formData)
        .then(result => {
          dispatch("uploadAvatarBlog", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeBlogFailed", err);
        })
    } else {
      api
        .post("/blogs", objectData.formData)
        .then(result => {
          commit("storeSetBlog", result.data);
        })
        .catch(err => {
          commit("storeBlogFailed", err);
        })
      }
  },
  fetchEditBlog({commit,dispatch},objectData){
    if (objectData.fileAvatar) {
      api.put(`/blogs/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          dispatch("uploadAvatarBlog", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeBlogFailed", err);
        })
    } else {
      api
        .put(`/blogs/${objectData.formData.id}`,objectData.formData)
        .then((result) => {
          commit("storeSetBlog", result.data);
        })
        .catch(err => {
          commit("storeBlogFailed", err);
        })
      }
  },

  uploadAvatarBlog ({commit}, fileDataOfBlog){
    api.patch(`/blogs/upload-avatar/${fileDataOfBlog.id}`, fileDataOfBlog.fileAvatar, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(result => {
      commit("storeSetBlog", result.data);
    })
    .catch(err => {
      commit("storeBlogFailed", err);
    })
  },
        
  fetchDeleteBlog({ commit }, id) {
    api
      .delete(`/blogs/${id}`)
      .then(() => {
        commit("storeDeleteBlogInData",id);
      })
      .catch((err) => {
        commit("storeBlogFailed", err);
      });
  },
}

export default { state, mutations, actions };