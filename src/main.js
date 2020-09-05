import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import Vuelidate from "vuelidate";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"; 

import CKEditor from '@ckeditor/ckeditor5-vue';
// import "wowjs/css/libs/animate.css";
// import "wowjs/dist/wow.min.js";

Vue.use( CKEditor );
Vue.use(VueLazyload);
Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
