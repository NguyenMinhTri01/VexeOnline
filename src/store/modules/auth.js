import {api} from "../../api"
import jwtDecode from "jwt-decode"

const state = {
  loading : false,
  token : null,
  err : null
}

const mutations = {
  storeLoginRequest (state) {
    state.loading = true;
    state.token = null;
    state.err = null;
  },

  storeLoginSuccess (state, payload) {
    state.loading = false;
    state.token = payload;
    state.err = null;
  },

  storeLoginFailed (state, payload) {
    state.loading = false;
    state.token = null;
    state.err = payload;
  },

}

const actions = {
  login({commit}, authUser) {
    commit("storeLoginRequest")
    api.post("/users/login", authUser)
    .then (result => {
      const decode = jwtDecode(result.data.token);
      console.log(decode)
      if(decode.userType === 'client') return Promise.reject({
        response : {
          data : {
            message : "you are not access!"
          }
        }
      })
      commit("storeLoginSuccess", result.data.token)
    })
    .catch (err => {
      commit("storeLoginFailed", err)
    })
  }
}

export default { state, mutations, actions };