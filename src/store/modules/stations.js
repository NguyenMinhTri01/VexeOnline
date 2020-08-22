import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  station : null,
  err: null
};

const mutations = {
  storeStationRequest(state) {
    state.loading = true;
    state.data = null;
    state.station = null;
    state.err = null;
  },

  storeStationSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeStationFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  storeUpdateStation(state, station){
    if (station) {
      state.data = state.data.map(item => {
        if (item._id === station._id){
          item = station
        }
        return item
      })
    }
  },
  storeSetStation(state, station) {
    state.station = station
    state.loading = false;
    state.err = null
  },
};

const actions = {
  fetchListStations({ commit }) {
    commit("storeStationRequest");
    api.get("/stations/")
      .then((result) => {
        commit("storeStationSuccess", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      });
  },

  fetchDetailStation({ commit }, id) {
    commit("storeStationRequest");
    api.get(`/stations/${id}`)
      .then(result => {
        commit("storeStationSuccess", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      })
  },

  fetchStatusStation({ commit }, id) {
    api.get(`/stations/status/${id}`)
      .then(result => {
        commit("storeUpdateStation", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      })
  },

  fetchHotStation ( {commit}, id) {
    api.get(`/stations/hot/${id}`)
    .then(result => {
      commit("storeUpdateStation", result.data);
    })
    .catch(err => {
      commit("storeBlogFailed", err);
    })
  },
  postStation ({commit}, formData) {
    commit("storeStationRequest");
    api.post('/stations',formData )
    .then(result => {
      commit("storeSetStation", result.data);
    })
    .catch(err => {
      commit("storeBlogFailed", err);
    })
  }

}

export default { state, mutations, actions };