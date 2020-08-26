import { api } from "../../api" 
const state = {
  loading: false,
  data: null,
  err: null,
  pagestatic:null
};

const mutations = {
  storePageStaticRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null,
    state.pageStatic = null
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
  storeSetPageStatic(state, pageStatic) {
    state.pagestatic = pageStatic
    state.loading = false;
    state.err = null
  },
  storeDeletePageStaticInData (state, id) {
    state.data = state.data.filter(pagestatic => pagestatic._id != id)
  }
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
        commit("storeSetPageStatic", result.data);
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
        commit("storeSetPageStatic", result.data);
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      })
  },
  fetchEditPageStatic({commit},data){
  //  commit("storePageStaticRequest");
    api
      .put(`/pagestatics/${data._id}`,data.pagestatic)
      .then((result) => {
        commit("storeSetPageStatic", result.data);
       // router.replace("/admin/pagestatics");
      })
      .catch(err => {
        commit("storePageStaticFailed", err);
      })
  },
  fetchDeletePageStatic({ commit }, id) {
    api
      .delete(`/pagestatics/${id}`)
      .then(() => {
        commit("storeDeletePageStaticInData",id);
      })
      .catch((err) => {
        commit("storePageStaticFailed", err);
      });
  },
}

export default { state, mutations, actions };