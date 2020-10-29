import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  err: null,
  count: null
};

const mutations = {
  storeUserRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
    state.count = null
  },

  storeUserSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeUserFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  storeDeleteUserInData (state, id) {
    state.data = state.data.filter(user => user._id != id)
  }
};

const actions = {
  fetchListUsers({ commit }) {
    commit("storeUserRequest");
    api.get("/users/")
      .then((result) => {
        commit("storeUserSuccess", result.data);
      })
      .catch(err => {
        commit("storeUserFailed", err);
      });
  },

  fetchListPaginationUsers({commit},page=1){
    api.get(`/users/pagination?page=${page}`)
    .then(result=>{
      commit("storeUserSuccess",result.data)
    })
    .catch(err => {
      commit("storeUserFailed", err);
    })
  },

  fetchCountUsers({ commit }) {
    commit("storeUserRequest");
    api.get("/users/count")
      .then((result) => {
        state.count = result.data
      })
      .catch(err => {
        commit("storeUserFailed", err);
      });
  },
  fetchDeleteUser({ commit }, id) {
    api
      .delete(`/users/${id}`)
      .then(() => {
        commit("storeDeleteUserInData",id);
      })
      .catch((err) => {
        commit("storeUserFailed", err);
      });
  },
}

export default { state, mutations, actions };