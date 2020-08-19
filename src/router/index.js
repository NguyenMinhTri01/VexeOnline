import Vue from 'vue'
import VueRouter from 'vue-router'
import jwtDecode from "jwt-decode";

Vue.use(VueRouter)

  const routes = [
    //home template
    {
      path : "/",
      component : () => import('../views/homeTemplate'),
      children : [
        //home page
        {
          path : "/",
          component : () => import ('../views/homeTemplate/homePage')
        },
        // about page
        {
          path : "/about",
          component : () => import ('../views/homeTemplate/aboutPage')
        },
        //station page
        {
          path : "/stations",
          component : () => import ('../views/homeTemplate/StationsPage')
        },

        {
          path : "/stations/:id",
          component : () => import ('../views/homeTemplate/detailStationPage')
        }
      ]
    },

    {
      path : "/admin", redirect : "/admin/dashboard"
    },
    //admintemplate
    {
      path : "/admin",
      component : () => import('../views/adminTemplate'),
      beforeEnter(to, from, next) {
        if (localStorage.getItem("token")) {
          try {
            const decode = jwtDecode(localStorage.getItem("token"));
            if (decode.userType === "admin") {
              next();
            }
          } catch {
            localStorage.removeItem("token");
            next("/auth");
          }
        } else {
          next("/auth");
        }
      },
      children : [
        {
          path : "/admin/dashboard",
          component: () => import ('../views/adminTemplate/dashboardPage')
        },
        {
          path : "/admin/blogs",
          component : () => import ('../views/adminTemplate/blogPage')
        },
        {
          path : "/admin/stations",
          component : () => import ('../views/adminTemplate/stationPage')
        }
      ]
    },
    {
      path : "/auth",
      component : () => import ('../views/adminTemplate/auth')
    },

    



    {
      path : "*",
      component: () => import ('../views/pageNotFound')
    }
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
