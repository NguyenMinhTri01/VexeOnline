import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  station: null,
  err: null,
  stationsHot : null
};

const mutations = {
  storeStationRequest(state) {
    state.loading = true;
    state.data = null;
    state.station = null;
    state.err = null;
    state.stationsHot = null;
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
  storeUpdateStation(state, station) {
    if (station) {
      state.data = state.data.map(item => {
        if (item._id === station._id) {
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
  storeDeleteStationInData(state, id) {
    state.data = state.data.filter(station => station._id != id)
  },

  storeSetStationsHot(state, stationsHot) {
    state.stationsHot = stationsHot,
    state.loading = false;
    state.err = null
  }

  
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

  fetchListStationsHot({ commit }) {
    api.get("/stations/hotStations")
      .then((result) => {
        commit("storeSetStationsHot", result.data);
      })
      .catch(err => {
        commit("storeBlogFailed", err);
      });
  },

  fetchDetailStation({ commit }, id) {
    commit("storeStationRequest");
    api.get(`/stations/${id}`)
      .then(result => {
        commit("storeSetStation", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      })
  },

  fetchDetailStationBySlug({ commit }, slug) {
    api.get(`/stations/detail/${slug}`)
    .then(result => {
      commit("storeSetStation", result.data);
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
        commit("storeStationFailed", err);
      })
  },

  fetchHotStation({ commit }, id) {
    api.get(`/stations/hot/${id}`)
      .then(result => {
        commit("storeUpdateStation", result.data);
      })
      .catch(err => {
        commit("storeStationFailed", err);
      })
  },
  postStation({ commit, dispatch }, objectData) {
    commit("storeStationRequest");
    if (objectData.fileAvatar) {
      api.post('/stations', objectData.formData)
        .then(result => {
          dispatch("uploadAvatarStation", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeStationFailed", err);
        })
    } else {
      api.post('/stations', objectData.formData)
        .then(result => {
          commit("storeSetStation", result.data);
        })
        .catch(err => {
          commit("storeStationFailed", err);
        })
    }
  },

  putStation({ commit, dispatch }, objectData) {
    if (objectData.fileAvatar) {
      api.put(`/stations/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          dispatch("uploadAvatarStation", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeStationFailed", err);
        })
    } else {
      api.put(`/stations/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          commit("storeSetStation", result.data);
        })
        .catch(err => {
          commit("storeStationFailed", err);
        })
    }
  },

  uploadAvatarStation ({commit}, fileDataOfStation){
    api.patch(`/stations/upload-avatar/${fileDataOfStation.id}`, fileDataOfStation.fileAvatar, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(result => {
      commit("storeSetStation", result.data);
    })
    .catch(err => {
      commit("storeStationFailed", err);
    })
  },

  fetchDeleteStation({ commit }, id) {
    api
      .delete(`/stations/${id}`)
      .then(() => {
        commit("storeDeleteStationInData", id)
      })
      .catch((err) => {
        commit("storeStationFailed", err);
      });
  },

}

export default { state, mutations, actions };