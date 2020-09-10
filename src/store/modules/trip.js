import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  trip: null,
  err: null,
};

const mutations = {
  storeTripRequest(state) {
    state.loading = true;
    state.data = null;
    state.trip = null;
    state.err = null;
  },

  storeTripSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeTripFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },
  storeUpdateTrip(state, trip) {
    if (trip) {
      state.data = state.data.map(item => {
        if (item._id === trip._id) {
          item = trip
        }
        return item
      })
    }
  },

  storeSetTrip(state, trip) {
    state.trip = trip
    state.loading = false;
    state.err = null
  },
  storeDeleteTripInData(state, id) {
    state.data = state.data.filter(trip => trip._id != id)
  },

};

const actions = {
  fetchListTrips({ commit }) {
    commit("storeTripRequest");
    api.get("/trips/")
      .then((result) => {
        commit("storeTripSuccess", result.data);
      })
      .catch(err => {
        commit("storeTripFailed", err);
      });
  },

  fetchDetailTrip({ commit }, id) {
    commit("storeTripRequest");
    api.get(`/trips/${id}`)
      .then(result => {
        commit("storeSetTrip", result.data);

      })
      .catch(err => {
        commit("storeTripFailed", err);
      })
  },
  postTrip({ commit }, trip) {
    commit("storeTripRequest");
    api.post('/trips', trip)
      .then(result => {
        commit("storeSetTrip", result.data);
      })
      .catch(err => {
        commit("storeTripFailed", err);
      })
  },

  postTripAgain({ commit }, trip) {
    api.post('/trips', trip)
      .then(result => {
        commit("storeSetTrip", result.data);
      })
      .catch(err => {
        commit("storeTripFailed", err);
      })
  },

  putTrip({ commit }, trip) {
    api.put(`/trips/${trip.id}`, trip)
      .then(result => {
        commit("storeSetTrip", result.data);
      })
      .catch(err => {
        commit("storeTripFailed", err);
      })
  },

  fetchStatusNumberTrip({ commit }, id) {
    api.get(`/trips/status-number/${id}`)
      .then(result => {
        commit("storeUpdateTrip", result.data);
      })
      .catch(err => {
        commit("storeTripFailed", err);
      })
  },
  fetchDeleteTrip({ commit }, id) {
    api
      .delete(`/trips/${id}`)
      .then(() => {
        commit("storeDeleteTripInData", id)
      })
      .catch((err) => {
        commit("storeTripFailed", err);
      });
  },

  searchTrip({ commit }, formData) {
    api.post('/trips/search-trips', formData)
    .then((result) => {
      commit("storeTripSuccess", result.data);
    })
    .catch((err) => {
      commit("storeTripFailed", err);
    });    
  }

}

export default { state, mutations, actions };