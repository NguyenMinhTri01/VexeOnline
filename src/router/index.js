import Vue from 'vue'
import VueRouter from 'vue-router'

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
    //admintemplate
    {
      path : "/admin",
      component : () => import('../views/adminTemplate'),
      children : [
        {
          path : "/admin/dashboard",
          component: () => import ('../views/adminTemplate/dashboardPage')
        }
      ]
    },
    {
      path : "/auth",
      component : () => import ('../views/adminTemplate/auth')
    },

    {
      path : "/admin", redirect : "/admin/dashboard"
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
