import { api } from "./../../api";
import jwtDecode from "jwt-decode";
import router from "./../../router";
import setHeader from "./../../utils/setHeader";

const state = {
  loading: false,
  token: null,
  infoUser : null,
  err: null,
  flag:null
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
  setLogoutTimerAdmin({ dispatch }, exp) {
    setTimeout(() => {
      dispatch("logoutAdmin");
    }, exp);
  },
  setLogoutTimer({ dispatch }, exp) {
    setTimeout(() => {
      dispatch("/");
    }, exp);
  },
  logoutAdmin({ commit }) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    router.replace("/auth");
  },
  logout({ commit }) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    //router.replace("/");
  },
  loginAdmin({ commit }, authUser) {
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
  tryAutoLoginAdmin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    if (!token) {
      return;
    }
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime() / 1000;
    if (date > exp) {
      dispatch("logoutAdmin");
    }
    setHeader(token);
    commit("storeLoginSuccess", {
      token : token,
      infoUser : decode
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
      dispatch("login");
    }
    setHeader(token);
    commit("storeLoginSuccess", {
      token : token,
      infoUser : decode
    });
  },
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


  getInfoUser(){
    if(localStorage.getItem("token")){
      const decode = jwtDecode(localStorage.getItem("token"));
      if(decode.userType === "client"){
        state.infoUser = decode;
      }
    }
  },
  login({ commit }, authUser) {
    commit("storeLoginRequest");
    api
      .post("/users/login", authUser)
      .then(result => {
        const decode = jwtDecode(result.data.token);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("exp", decode.exp);
        setHeader(result.data.token);

        commit("storeLoginSuccess", {
          token : result.data.token,
          infoUser : decode
        });
      })
      .catch(err => {
        commit("storeLoginFaild", err);
      });
  },

  loginFacebook ({ commit }, authUser) {
    commit("storeLoginRequest");
    api
      .post ("/users/login-facebook", authUser)
      .then (result => {
        const decode = jwtDecode(result.data.token);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("exp", decode.exp);
        setHeader(result.data.token);
        commit("storeLoginSuccess", {
          token : result.data.token,
          infoUser : decode
        });
      })
      .catch(err => {
        commit("storeLoginFaild", err);
      });
  },

  register({ commit }, authUser) {
    commit("storeLoginRequest");
    api
      .post("/users/register", authUser)
      .then(result => {
        state.flag = result.data;
        //dispatch("login",{email:result.data.email,password:result.data.password})
        //const decode = jwtDecode(result.data.token);
        // if (decode.userType === "client") {
        //   return Promise.reject({
        //     response: { data: { message: "Ban k co quyen truy cap" } }
        //   });
        // }
        // localStorage.setItem("token", result.data.token);
        // localStorage.setItem("exp", decode.exp);
        // setHeader(result.data.token);

        // commit("storeLoginSuccess", {
        //   token : result.data.token,
        //   infoUser : decode
        // });
        router.replace("/");
      })
      .catch(err => {
        commit("storeLoginFaild", err);
      });
  },
};

export default { state, mutations, actions };
