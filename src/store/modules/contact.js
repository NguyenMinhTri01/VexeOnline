import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  err: null,
  count: null,
};

const mutations = {
  storeContactRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null
    state.count = null
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
  storeDeleteContactInData (state, id) {
    state.data = state.data.filter(contact => contact._id != id)
  }
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
  fetchListPaginationContacts({commit},page=1){
    api.get(`/contacts/pagination?page=${page}`)
    .then(result=>{
      commit("storeContactSuccess",result.data)
    })
    .catch(err => {
      commit("storeContactFailed", err);
    })
  },
  fetchCountContacts({ commit }) {
    commit("storeContactRequest");
    api.get("/contacts/count")
      .then((result) => {
        state.count = result.data;
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
  fetchDeleteContact({ commit }, id) {
    api
      .delete(`/contacts/${id}`)
      .then(() => {
        commit("storeDeleteContactInData",id);
      })
      .catch((err) => {
        commit("storeContactFailed", err);
      });
  },
}

export default { state, mutations, actions };