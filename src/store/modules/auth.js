import { api } from "./../../api";
import jwtDecode from "jwt-decode";
import router from "./../../router";
import setHeader from "./../../utils/setHeader";

const state = {
  loading: false,
  token: null,
<<<<<<< HEAD
  infoUser : null,
  err: null
=======
  err: null,
  
>>>>>>> 2cbc43584d604a8b4c118d5b64f74942b4f4ecd7
};

const mutations = {
  clearAuthData(state) {
    state.loading = false;
    state.token = null;
    state.infoUser = null;
    state.err = null;
  },
  storeLoginRequest(state) {
    state.loading = true;
    state.token = null;
    state.infoUser = null;
    state.err = null;
  },
  storeLoginSuccess(state, payload) {
    state.loading = false;
    state.token = payload.token;
    state.infoUser = payload.infoUser;
    state.err = null;
  },
  storeLoginFaild(state, payload) {
    state.loading = false;
    state.token = null;
    state.infoUser = null;
    state.err = payload;
  }
};

const actions = {
  setLogoutTimer({ dispatch }, exp) {
    setTimeout(() => {
      dispatch("logout");
    }, exp);
  },
  logout({ commit }) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    router.replace("/auth");
  },
  login({ commit }, authUser) {
    commit("storeLoginRequest");
    api
      .post("/users/login", authUser)
      .then(result => {
        const decode = jwtDecode(result.data.token);
        if (decode.userType === "client") {
          return Promise.reject({
            response: { data: { message: "Ban k co quyen truy cap" } }
          });
        }
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("exp", decode.exp);
        setHeader(result.data.token);

        commit("storeLoginSuccess", {
          token : result.data.token,
          infoUser : decode
        });
        router.replace("/admin/dashboard");
      })
      .catch(err => {
        commit("storeLoginFaild", err);
      });
  },
  tryAutoLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    if (!token) {
      return;
    }
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime() / 1000;
    if (date > exp) {
      dispatch("logout");
    }
    setHeader(token);
    commit("storeLoginSuccess", {
      token : token,
      infoUser : decode
    });
  }
  // tryAutoLogin({ commit }) {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return;
  //   }
  //   const exp = localStorage.getItem("exp");
  //   const date = new Date().getTime() / 1000;
  //   if (date > exp) {
  //     router.replace("/");
  //   }
  //   setHeader(token);
  //   commit("storeLoginSuccess", token);
  // }git
};

export default { state, mutations, actions };
