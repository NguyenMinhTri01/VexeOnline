import { api } from "../../api"
import router from "./../../router";
const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  storePageStaticRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
  },

  storePageStaticSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storePageStaticFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },

  storeUpdatePageStatic(state, pageStatic) {
    if (pageStatic) {
      state.data = state.data.map(item => {
        if (item._id === pageStatic._id) {
          item = pageStatic
        }
        return item
      })
    }
  },
  
};

const actions = {
  fetchListPageStatics({ commit }) {
    commit("storePageStaticRequest");
    api.get("/pagestatics/")
      .then((result) => {
        commit("storePageStaticSuccess", result.data);
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      });
  },

  fetchDetailPageStatic({ commit }, id) {
    commit("storePageStaticRequest");
    api.get(`/pagestatics/${id}`)
      .then(result => {
        commit("storePageStaticSuccess", result.data);
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      })
  },

  fetchCreatePageStatic({ commit }, pageStatic) {
    commit("storePageStaticRequest");
    api
      .post("/pagestatics", pageStatic)
      .then(result => {
        commit("storePageStaticSuccess", result.data);
        router.replace("/admin/pagestatics/add");
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      })
  },
  fetchEditPageStatic({commit},data){
    commit("storePageStaticRequest");
    api
      .put(`/pagestatics/${data._id}`,data.blog)
      .then((result) => {
        commit("storePageStaticSuccess", result.data);
        router.replace("/admin/pagestatics");
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      })
  },
  fetchDeletePageStatic({ commit, dispatch }, id) {
    commit("storePageStaticRequest");
    api
      .delete(`/pagestatics/${id}`)
      .then(() => {
        dispatch("fetchListPageStatics");
      })
      .catch((err) => {
        commit("storePageStaticFailed", err);
      });
  },
}

export default { state, mutations, actions };