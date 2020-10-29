import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  garage: null,
  err: null,
  garageHot:null,
  count:null
};

const mutations = {
  storeGarageRequest(state) {
    state.loading = true;
    state.data = null;
    state.garage = null;
    state.err = null;
    state.garageHot = null;
  },

  storeGarageSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeGarageFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  storeUpdateGarage(state, garage) {
    if (garage) {
      state.data = state.data.map(item => {
        if (item._id === garage._id) {
          item = garage
        }
        return item
      })
    }
  },

  storeSetGarage(state, garage) {
    state.garage = garage
    state.loading = false;
    state.err = null
  },
  storeSetGarageHot(state,garage){
    state.garageHot = garage;
    state.loading = false;
    state.err = null;
  },
  storeDeleteGarageInData(state, id) {
    state.data = state.data.filter(garage => garage._id != id)
  }
};

const actions = {
  fetchListGarages({ commit }) {
    commit("storeGarageRequest");
    api.get("/garages/")
      .then((result) => {
        commit("storeGarageSuccess", result.data);
      })
      .catch(err => {
        commit("storeGarageFailed", err);
      });
  },
  fetchListPaginationGarages({commit},page=1){
    api.get(`/garages/pagination?page=${page}`)
    .then(result=>{
      commit("storeGarageSuccess",result.data)
    })
    .catch(err => {
      commit("storeGarageFailed", err);
    })
  },

  fetchCountGarages({commit}){
    api.get('/garages/count')
    .then(result=>{
      state.count = result.data
    })
    .catch(err => {
      commit("storeGarageFailed", err);
    })
  },

  fetchListHotGarages({commit}){
    commit("storeGarageRequest");
    api.get("/garages/hotGarages")
    .then(result=>{
      commit("storeSetGarageHot",result.data);
    })
    .catch(err=>commit("storeGarageFailed",err))
  },

  fetchDetailGarage({ commit }, id) {
    commit("storeGarageRequest");
    api.get(`/garages/${id}`)
      .then(result => {
        commit("storeSetGarage", result.data);
      })
      .catch(err => {
        commit("storeGarageFailed", err);
      })
  },
  fetchDetailGarageBySlug({ commit }, slug) {
    //commit("storeGarageRequest");
    api.get(`/garages/detail/${slug}`)
      .then(result => {
        commit("storeSetGarage", result.data);
      })
      .catch(err => {
        commit("storeGarageFailed", err);
      })
  },
  fetchDetailGarageBySlugAgain({ commit }, slug) {
    //commit("storeGarageRequest");
    api.get(`/garages/detail/${slug}`)
      .then(result => {
        commit("storeSetGarage", result.data);
      })
      .catch(err => {
        commit("storeGarageFailed", err);
      })
  },
  fetchStatusGarage({ commit }, id) {
    api.get(`/garages/status/${id}`)
      .then(result => {
        commit("storeUpdateGarage", result.data);
      })
      .catch(err => {
        commit("storeGarageFailed", err);
      })
  },
  fetchHotGarage({commit},id){
    api.get(`/garages/hot/${id}`)
    .then(result=>{
      commit("storeUpdateGarage",result.data);
    })
    .catch(err=>{
      commit("storeGarageFailed",err);
    })
  },
  postGarage({ commit, dispatch }, objectData) {
    commit("storeGarageRequest");
    if (objectData.fileAvatar) {
      api.post('/garages', objectData.formData)
        .then(result => {
          dispatch("uploadAvatarGarage", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeGarageFailed", err);
        })
    } else {
      api.post('/garages', objectData.formData)
        .then(result => {
          commit("storeSetGarage", result.data);
        })
        .catch(err => {
          commit("storeGarageFailed", err);
        })
    }
  },

  putGarage({ commit, dispatch }, objectData) {
    if (objectData.fileAvatar) {
      api.put(`/garages/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          dispatch("uploadAvatarGarage", {id : result.data._id, fileAvatar : objectData.fileAvatar});
        })
        .catch(err => {
          commit("storeGarageFailed", err);
        })
    } else {
      api.put(`/garages/${objectData.formData.id}`, objectData.formData)
        .then(result => {
          commit("storeSetGarage", result.data);
        })
        .catch(err => {
          commit("storeGarageFailed", err);
        })
    }
  },

  uploadAvatarGarage ({commit}, fileDataOfGarage){
    api.patch(`/garages/upload-avatar/${fileDataOfGarage.id}`, fileDataOfGarage.fileAvatar, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(result => {
      commit("storeSetGarage", result.data);
    })
    .catch(err => {
      commit("storeGarageFailed", err);
    })
  },

  fetchDeleteGarage({ commit }, id) {
    api
      .delete(`/garages/${id}`)
      .then(() => {
        commit("storeDeleteGarageInData", id)
      })
      .catch((err) => {
        commit("storeGarageFailed", err);
      });
  },

}

export default { state, mutations, actions };