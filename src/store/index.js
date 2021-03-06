import Vue from 'vue'
import Vuex from 'vuex'
import stations from "./modules/stations"
import blog from "./modules/blog"
import auth from "./modules/auth"
//import authFE from "./modules/authFE"
import contact from "./modules/contact"
import pageStatic from "./modules/pageStatic"
import vehicle from "./modules/vehicle"
import garage from "./modules/garage"
import user from "./modules/user"
import routes from "./modules/routes"
import trip from "./modules/trip"
import ticket from "./modules/ticket"
import header from "./modules/header"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: { stations, auth, blog, contact, pageStatic, vehicle, garage, user, routes,trip,ticket,header}
})
