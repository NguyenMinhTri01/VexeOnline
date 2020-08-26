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

        //blog
        {
          path : "/admin/blogs",
          component : () => import ('../views/adminTemplate/blogPage')
        },
        {
          path : "/admin/blogs/add",
          component : () => import ('../views/adminTemplate/blogPage/add.vue')
        },
        {
          path : "/admin/blogs/edit/:id",
          component : () => import ('../views/adminTemplate/blogPage/edit.vue')
        },

        

        //station
        {
          path : "/admin/stations",
          component : () => import ('../views/adminTemplate/stationPage')
        },
        {
          path : "/admin/stations/add",
          component : () => import ('../views/adminTemplate/stationPage/add.vue')
        },
        {
          path : "/admin/stations/edit/:id",
          component : () => import ('../views/adminTemplate/stationPage/edit.vue')
        },


        //contact
        {
          path : "/admin/contacts",
          component : () => import ('../views/adminTemplate/contactPage'),
        },


        //pagestatic
        {
          path : "/admin/pagestatics",
          component : () => import ('../views/adminTemplate/pageStaticPage')
        },
        {
          path : "/admin/pagestatics/add",
          component : () => import ('../views/adminTemplate/pageStaticPage/add.vue')
        },
        {
          path : "/admin/pagestatics/edit/:id",
          component : () => import ('../views/adminTemplate/pageStaticPage/edit.vue')
        },


        // vehicle

        {
          path : "/admin/vehicles",
          component : () => import ('../views/adminTemplate/vehiclePage')
        },

        {
          path : "/admin/vehicles/add",
          component : () => import ('../views/adminTemplate/vehiclePage/add.vue')
        },
        
        {
          path : "/admin/vehicles/edit/:id",
          component : () => import ('../views/adminTemplate/vehiclePage/edit.vue')
        //garage
        },
        {
          path : "/admin/garages",
          component : () => import ('../views/adminTemplate/garagePage')
        },
        {
          path : "/admin/garages/add",
          component : () => import ('../views/adminTemplate/garagePage/add.vue')
        },
        {
          path : "/admin/garages/edit/:id",
          component : () => import ('../views/adminTemplate/garagePage/edit.vue')
        },

        //user
        {
          path : "/admin/users",
          component : () => import ('../views/adminTemplate/userPage')
        },

        //user
        {
          path : "/admin/users",
          component : () => import ('../views/adminTemplate/userPage')
        },

        //route
        {
          path : "/admin/routes",
          component : () => import ('../views/adminTemplate/routePage')
        },
        {
          path : "/admin/routes/add",
          component : () => import ('../views/adminTemplate/routePage/add.vue')
        },
        {
          path : "/admin/routes/edit/:id",
          component : () => import ('../views/adminTemplate/routePage/edit.vue')
        },
         
        {
          path : "*",
          component: () => import ('../views/adminTemplate/pageNotFound')
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
