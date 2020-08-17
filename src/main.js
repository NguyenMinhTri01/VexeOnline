import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"; 


  import "../public/admin/plugins/fontawesome-free/css/all.min.css";
  import "../public/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
  import "../public/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
  import "../public/admin/plugins/jqvmap/jqvmap.min.css";
  import "../public/admin/dist/css/adminlte.min.css";
  import "../public/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
  import "../public/admin/plugins/daterangepicker/daterangepicker.css";
  import "../public/admin/plugins/summernote/summernote-bs4.min.css";


  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
