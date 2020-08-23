import Vue from 'vue'
import Vuex from 'vuex'
import stations from "./modules/stations"
import blog from "./modules/blog"
import auth from "./modules/auth"
import contact from "./modules/contact"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: { stations, auth, blog, contact }
})
