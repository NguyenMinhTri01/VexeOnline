import Vue from 'vue'
import Vuex from 'vuex'
import stations from "./modules/stations"
import blog from "./modules/blog"
import auth from "./modules/auth"
import contact from "./modules/contact"
import pageStatic from "./modules/pageStatic"
<<<<<<< HEAD
import vehicle from "./modules/vehicle"
=======
import garage from "./modules/garage"
import user from "./modules/user"
import routes from "./modules/routes"
>>>>>>> 2cbc43584d604a8b4c118d5b64f74942b4f4ecd7


Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  modules: { stations, auth, blog, contact, pageStatic, vehicle }
=======
  modules: { stations, auth, blog, contact, pageStatic, garage ,user,routes}
>>>>>>> 2cbc43584d604a8b4c118d5b64f74942b4f4ecd7
})
