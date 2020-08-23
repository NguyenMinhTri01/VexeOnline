import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  storeContactRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
  },

  storeContactSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeContactFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  
};

const actions = {
  fetchListContacts({ commit }) {
    commit("storeContactRequest");
    api.get("/contacts/")
      .then((result) => {
        commit("storeContactSuccess", result.data);
      })
      .catch(err => {
        commit("storeContactFailed", err);
      });
  },
  fetchCreateContact({ commit }, contact) {
    commit("storeContactRequest");
    api
      .post("/contacts", contact)
      .then(result => {
        commit("storeContactSuccess", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },
  fetchDeleteContact({ commit, dispatch }, id) {
    commit("storeContactRequest");
    api
      .delete(`/contacts/${id}`)
      .then(() => {
        dispatch("fetchListContacts");
      })
      .catch((err) => {
        commit("storeContactFailed", err);
      });
  },
}

export default { state, mutations, actions };