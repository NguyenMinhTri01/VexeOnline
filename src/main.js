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
import firebase from "firebase/app";
import VueFbCustomerChat from "vue-fb-customer-chat";







const firebaseConfig = {
  apiKey: "AIzaSyCxYPwUPF1-wSabw71ka5Gv2isVjQurtho",
  authDomain: "vexe-online-dc647.firebaseapp.com",
  databaseURL: "https://vexe-online-dc647.firebaseio.com",
  projectId: "vexe-online-dc647",
  storageBucket: "vexe-online-dc647.appspot.com",
  messagingSenderId: "572552721148",
  appId: "1:572552721148:web:815f03bd4871eaad9a1d79",
  measurementId: "G-9SDCXWX7CZ"
};
firebase.initializeApp(firebaseConfig);


Vue.use(VueFbCustomerChat, {
  page_id: "112755623913285", //  change 'null' to your Facebook Page ID,
  theme_color: '#4cb320', // theme color in HEX
  locale: 'vi_VN', // default 'en_US'
})

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
