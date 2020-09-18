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
          path : "/ve-chung-toi",
          component : () => import ('../views/homeTemplate/aboutPage')
        },
        //station page
        // {
        //   path : "/ben-xe",
        //   component : () => import ('../views/homeTemplate/StationsPage')
        // },
        {
          path : "/ben-xe/:slug",
          component : () => import ('../views/homeTemplate/detailStationPage')
        },

        //garage page
        {
          path : "/nha-xe/:slug",
          component : () => import ('../views/homeTemplate/garagePage')
        },

        //trip page
        {
          path : "/chuyen-di",
          component : () => import ('../views/homeTemplate/tripPage')
        },

        //blog page
        {
          path : "/tin-tuc",
          component : () => import ('../views/homeTemplate/blogPage')
        },
        {
          path : "/tin-tuc/:slug",
          component : () => import ('../views/homeTemplate/detailBlogPage')
        },

        //contact
        {
          path : "/lien-he",
          component : () => import ('../views/homeTemplate/contactPage')
        },

        //booking
        {
          path : "/chuyen-di/dat-ve",
          component : () => import ('../views/homeTemplate/bookingBusPage')
        },
        //checkout
        {
          path : "/chuyen-di/dat-ve/thanh-toan",
          component : () => import ('../views/homeTemplate/checkoutPage')
        },
        //checkout complete
        {
          path : "/chuyen-di/dat-ve/hoan-thanh",
          component : () => import ('../views/homeTemplate/checkoutPage/complete.vue')
        },

        //giới thiệu
        {
            path : "/gioi-thieu",
            component : () => import ('../views/homeTemplate/staticPage')
        },
        // quan ly ve
        {
          path : "/quan-ly-ve",
          component : () => import ('../views/homeTemplate/ticketManagementPage')
          
        },
        // history ticket
        {
          path : "/lich-su-dat-ve",
          component : () => import ('../views/homeTemplate/bookingTicketHistoryPage'),
        },
        {
          path : "/lich-su-dat-ve/chi-tiet",
          component: () => import ('../views/homeTemplate/bookingTicketHistoryPage/detail.vue')
        },
        
        //Hướng dẫn thanh toán
        {
          path : "/huong-dan-thanh-toan",
          component : () => import ('../views/homeTemplate/staticPage')
        },
        //Quy chế
        {
          path : "/quy-che",
          component : () => import ('../views/homeTemplate/staticPage')
        },
        //Chính sách bảo mật thông tin
        {
          path : "/chinh-sach-bao-mat",
          component : () => import ('../views/homeTemplate/staticPage')
        },
        //Chính sách bảo mật thanh toán
        {
          path : "/chinh-sach-bao-mat-thanh-toan",
          component : () => import ('../views/homeTemplate/staticPage')
        },
        //Câu hỏi thường gặp
        {
          path : "/cau-hoi-thuong-gap",
          component : () => import ('../views/homeTemplate/staticPage')
        },
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
            }else{
              next("/");
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

        //trip
        {
          path : "/admin/trips",
          component : () => import ('../views/adminTemplate/tripPage')
        },
        {
          path : "/admin/trips/add",
          component : () => import ('../views/adminTemplate/tripPage/add.vue')
        },
        {
          path : "/admin/trips/add-again/:id",
          component : () => import ('../views/adminTemplate/tripPage/addAgain.vue')
        },
        {
          path : "/admin/trips/edit/:id",
          component : () => import ('../views/adminTemplate/tripPage/edit.vue')
        },

        //ticket
        {
          path : "/admin/tickets",
          component : () => import ('../views/adminTemplate/ticketPage')
        },
        //admin-profile
        {
          path : "/admin/profile-admin/edit",
          component : () => import ('../views/adminTemplate/profileAdminPage')
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
