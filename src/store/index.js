import Vue from 'vue'
import Vuex from 'vuex'
import stations from "./modules/stations"
import blogs from "./modules/blog"
import auth from "./modules/auth"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: { stations, auth, blogs }
})
