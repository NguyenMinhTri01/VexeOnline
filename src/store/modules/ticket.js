import { api } from "../../api"
const state = {
  loading: false,
  data: null,
  ticket: null,
  err: null,
  seats:null// sea o day de lam gi á// để gán 
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
  storeUpdateTicket(state, ticket) {
    if (ticket) {
      state.data = state.data.map(item => {
        if (item._id === ticket._id) {
          item = ticket
        }
        return item
      })
    }
  },
  storeSetTicket(state, ticket) {
    state.ticket = ticket
    state.loading = false;
    state.err = null
  },
  storeDeleteTicketInData(state, id) {
    state.data = state.data.filter(ticket => ticket._id != id)
  },
  storeSetSeats (state, seats) {
    state.seats = seats
  },

};

const actions = {
  fetchListTickets({ commit }) {
    commit("storeTicketRequest");
    api.get("/tickets/")
      .then((result) => {
        commit("storeTicketSuccess", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      });
  },

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
    setSeats ({ commit }, seats) {
        commit("storeSetSeats", seats)
    },

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

  fetchStatusTicket({ commit }, id) {
    api.get(`/tickets/statusTicket/${id}`)
      .then(result => {
        commit("storeUpdateTicket", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      })
  },
  fetchDeleteTicket({ commit }, id) {
    api
      .delete(`/tickets/${id}`)
      .then(() => {
        commit("storeDeleteTicketInData", id)
      })
      .catch((err) => {
        commit("storeTicketFailed", err);
      });
  },

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