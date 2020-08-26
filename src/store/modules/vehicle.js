import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  vehicle: null,
  err: null
};

const mutations = {
  storeVehicleRequest(state) {
    state.loading = true;
    state.data = null;
    state.vehicle = null;
    state.err = null;
  },

  storeVehicleSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeVehicleFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  storeUpdateVehicle(state, vehicle) {
    if (vehicle) {
      state.data = state.data.map(item => {
        if (item._id === vehicle._id) {
          item = vehicle
        }
        return item
      })
    }
  },

  storeSetVehicle(state, vehicle) {
    state.vehicle = vehicle
    state.loading = false;
    state.err = null
  },
  storeDeleteVehicleInData(state, id) {
    state.data = state.data.filter(vehicle => vehicle._id != id)
  },
  storeDeleteImageInListImageVehicle(state, id) {
    state.vehicle = state.vehicle.listImages.filter(image => image._id != id)
  },
};

const actions = {
  fetchListVehicles({ commit }) {
    commit("storeVehicleRequest");
    api.get("/vehicles/")
      .then((result) => {
        commit("storeVehicleSuccess", result.data);
      })
      .catch(err => {
        commit("storeVehicleFailed", err);
      });
  },

  fetchDetailVehicle({ commit }, id) {
    commit("storeVehicleRequest");
    api.get(`/vehicles/${id}`)
      .then(result => {
        commit("storeSetVehicle", result.data);
      })
      .catch(err => {
        commit("storeVehicleFailed", err);
      })
  },

  fetchStatusVehicle({ commit }, id) {
    api.get(`/vehicles/status/${id}`)
      .then(result => {
        commit("storeUpdateVehicle", result.data);
      })
      .catch(err => {
        commit("storeVehicleFailed", err);
      })
  },

  postVehicle({ commit, dispatch }, objectData) {
    commit("storeVehicleRequest");
    if (objectData.fileAvatar) {
      api.post('/vehicles', objectData.formData)
        .then(result => {
          dispatch("uploadAvatarVehicle", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeVehicleFailed", err);
        })
    } else {
      api.post('/vehicles', objectData.formData)
        .then(result => {
          commit("storeSetVehicle", result.data);
        })
        .catch(err => {
          commit("storeVehicleFailed", err);
        })
    }
  },

  putVehicle({ commit, dispatch }, objectData) {
    if (objectData.fileAvatar) {
      api.put(`/vehicles/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          dispatch("uploadAvatarVehicle", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeVehicleFailed", err);
        })
    } else {
      api.put(`/vehicles/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          commit("storeSetVehicle", result.data);
        })
        .catch(err => {
          commit("storeVehicleFailed", err);
        })
    }
  },

  uploadAvatarVehicle ({commit}, fileDataOfVehicle){
    api.patch(`/vehicles/upload-avatar/${fileDataOfVehicle.id}`, fileDataOfVehicle.fileAvatar, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(result => {
      commit("storeSetVehicle", result.data);
    })
    .catch(err => {
      commit("storeVehicleFailed", err);
    })
  },

  fetchDeleteVehicle({ commit }, id) {
    api
      .delete(`/vehicles/${id}`)
      .then(() => {
        commit("storeDeleteVehicleInData", id)
      })
      .catch((err) => {
        commit("storeVehicleFailed", err);
      });
  },
  fetchDeleteImageOfVehicle({commit}, payload) {
    api
    .delete(`/vehicles/${payload.id}/images/${payload.imageId}`)
    .then((result) => {
      if(result) {
        commit("storeSetVehicle", result.data)
      }
    })
    .catch((err) => {
      commit("storeVehicleFailed", err);
    });
  }

}

export default { state, mutations, actions };