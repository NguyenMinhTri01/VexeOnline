import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  ticket: null,
  err: null,
  seats: null
};

const mutations = {
  storeTicketRequest(state) {
    state.loading = true;
    state.data = null;
    state.ticket = null;
    state.err = null;
  },

  storeTicketSuccess(state, payload) {
    state.loading = false
    state.data = payload;
    state.err = null
  },

  storeTicketFailed(state, payload) {
    state.loading = false
    state.data = null;
    state.err = payload
  },

  storeSetTicket(state, ticket) {
    state.ticket = ticket
    state.loading = false;
    state.err = null
  },
  storeDeleteTicketInData(state, id) {
    state.data = state.data.filter(ticket => ticket._id != id)
  },
  storeSetSeats(state, seats) {
    state.seats = seats
  },

};

const actions = {
  //   fetchListTrips({ commit }) {
  //     commit("storeTripRequest");
  //     api.get("/trips/")
  //       .then((result) => {
  //         commit("storeTripSuccess", result.data);
  //       })
  //       .catch(err => {
  //         commit("storeTripFailed", err);
  //       });
  //   },

  //   fetchDetailTrip({ commit }, id) {
  //     commit("storeTripRequest");
  //     api.get(`/trips/${id}`)
  //       .then(result => {
  //         commit("storeSetTrip", result.data);

  //       })
  //       .catch(err => {
  //         commit("storeTripFailed", err);
  //       })
  //   },

  fetchDetailTicketByCode({ commit }, input) {
    commit("storeTicketRequest");
    api.get(`/tickets/code/${input.code}/phone/${input.phone}`)
      .then(result => {
        commit("storeSetTicket", result.data)
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      })
  },
  cancelTicket ({ commit }, id) {
    api.get(`/tickets/cancel/${id}`)
    .then(result => {
      commit("storeSetTicket", result.data)
    })
    .catch(err => {
      commit("storeTicketFailed", err);
    })
  },

  postTicket({ commit }, ticket) {
    commit("storeTicketRequest");
    api.post('/tickets', ticket)
      .then(result => {
        commit("storeTicketSuccess", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      })
  },
  //   getSeas(seat){
  //       state.seat = seat.map(item=>{
  //           return item;
  //       }
  //   },
  setSeats({ commit }, seats) {
    commit("storeSetSeats", seats)
  }

  //   postTripAgain({ commit }, trip) {
  //     api.post('/trips', trip)
  //       .then(result => {
  //         commit("storeSetTrip", result.data);
  //       })
  //       .catch(err => {
  //         commit("storeTripFailed", err);
  //       })
  //   },

  //   putTrip({ commit }, trip) {
  //     api.put(`/trips/${trip.id}`, trip)
  //       .then(result => {
  //         commit("storeSetTrip", result.data);
  //       })
  //       .catch(err => {
  //         commit("storeTripFailed", err);
  //       })
  //   },

  //   fetchStatusNumberTrip({ commit }, id) {
  //     api.get(`/trips/status-number/${id}`)
  //       .then(result => {
  //         commit("storeUpdateTrip", result.data);
  //       })
  //       .catch(err => {
  //         commit("storeTripFailed", err);
  //       })
  //   },
  //   fetchDeleteTrip({ commit }, id) {
  //     api
  //       .delete(`/trips/${id}`)
  //       .then(() => {
  //         commit("storeDeleteTripInData", id)
  //       })
  //       .catch((err) => {
  //         commit("storeTripFailed", err);
  //       });
  //   },

  //   searchTrip({ commit }, formData) {
  //     api.post('/trips/search-trips', formData)
  //     .then((result) => {
  //       commit("storeTripSuccess", result.data);
  //     })
  //     .catch((err) => {
  //       commit("storeTripFailed", err);
  //     });    
  //   },

}

export default { state, mutations, actions };