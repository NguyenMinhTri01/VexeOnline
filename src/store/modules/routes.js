import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  err: null,
  route:null,
  station:null,
  count:null,
};

const mutations = {
  storeRouteRequest(state) {
    state.loading = true;
    state.data = null,
    state.err = null,
    state.route =  null,
    state.count = null
  },

  storeRouteSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeRouteFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },

  storeUpdateRoute(state, route) {
    if (route) {
      state.data = state.data.map(item => {
        if (item._id === route._id) {
          item = route
        }
        return item
      })
    }
  },

  storeSetRoute(state, route) {
    state.route = route,
    state.loading = false;
    state.err = null;
    //state.station = 
  },
  storeSetStation(state, station) {
    state.station = station,
    state.loading = false;
    state.err = null;
    //state.station = 
  },
  storeDeleteRouteInData (state, id) {
    state.data = state.data.filter(route => route._id != id)
  }
};

const actions = {
  fetchListRoutes({ commit }) {
    commit("storeRouteRequest");
    api.get("/routes/")
      .then((result) => {
        commit("storeRouteSuccess", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      });
  },
  fetchListPaginationRoutes({commit},page=1){
    api.get(`/routes/pagination?page=${page}`)
    .then(result=>{
      commit("storeRouteSuccess",result.data)
    })
    .catch(err => {
      commit("storeRouteFailed", err);
    })
  },

  fetchCountRoutes({commit}){
    api.get('/routes/count')
    .then(result=>{
      state.count = result.data
    })
    .catch(err => {
      commit("storeRouteFailed", err);
    })
  },

  fetchListRoutesHot({ commit }) {
    commit("storeRouteRequest");
    api.get("/routes/hotRoutes")
      .then((result) => {
        commit("storeRouteSuccess", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      });
  },
  fetchDetailRoute({ commit }, id) {
    commit("storeRouteRequest");
    api.get(`/routes/${id}`)
      .then(result => {
        api.get("/stations/")
        .then(res=>{
          commit("storeSetStation",res.data)
        })
        commit("storeSetRoute", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      })
  },

  fetchStatusRoute({ commit }, id) {
    api.get(`/routes/status/${id}`)
      .then(result => {
        commit("storeUpdateRoute", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      })
  },
  fetchHotRoute({ commit }, id) {
    api.get(`/routes/hot/${id}`)
      .then(result => {
        commit("storeUpdateRoute", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      })
  },
  fetchCreateRoute({ commit }, route) {
    commit("storeRouteRequest");
    api
      .post("/routes", route)
      .then(result => {
        commit("storeSetRoute", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      })
  },
  fetchEditRoute({commit},data){
    api
      .put(`/routes/${data._id}`,data.route)
      .then((result) => {
        api.get("/stations/")
        .then(res=>{
          commit("storeSetStation",res.data)
        })
        commit("storeSetRoute", result.data);
      })
      .catch(err => {
        commit("storeRouteFailed", err);
      })
  },
  fetchDeleteRoute({ commit }, id) {
    api
      .delete(`/routes/${id}`)
      .then(() => {
        commit("storeDeleteRouteInData",id);
      })
      .catch((err) => {
        commit("storeRouteFailed", err);
      });
  },
}

export default { state, mutations, actions };