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
  storeSetSeats(state, seats) {
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
  fetchListLatestTickets({ commit }) {
    //commit("storeTicketRequest");
    api.get("/tickets/latest")
      .then((result) => {
        commit("storeSetTicket", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      });
  },
  fetchCountTickets({ commit }) {
    commit("storeTicketRequest");
    api.get("/tickets/count")
      .then((result) => {
        commit("storeTicketSuccess", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      });
  },
  fetchListHistoryTickets({ commit }) {
    commit("storeTicketRequest");
    api.get("/tickets/history")
      .then((result) => {
        commit("storeTicketSuccess", result.data);
      })
      .catch(err => {
        commit("storeTicketFailed", err);
      });
  },
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
  fetchDetailTicket({ commit }, id) {
    commit("storeTicketRequest");
    api.get(`/tickets/${id}`)
      .then(result => {
        commit("storeSetTicket", result.data);
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
    setSeats ({ commit }, seats) {
        commit("storeSetSeats", seats)
    },
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
}

export default { state, mutations, actions };