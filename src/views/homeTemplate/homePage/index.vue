<template>
  <div>
    <Banner/>
    <div class="container">
      <div class="row">
        <div class="col-md-5 bann-info1 wow fadeInLeft animated" data-wow-delay=".5s">
          <i class="fa fa-columns"></i>
          <h3>Hệ Thống Đặt Vé Xe Uy Tín Nhất Việt Nam</h3>
        </div>
      <FormSearchTrip />
      </div>
      <div class="clearfix"></div>
    </div>
  <Slide />
  <InfoSystem />
  <BusStation />
  <br>  
  </div>
</template>

<script>

import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/vi";
// import "../../../assets/frontend/js/jquery-ui.js";

// global.jQuery = require("jquery");
// var $ = global.jQuery;
// window.$ = $;

import Slide from "./slide"
import InfoSystem from "./infoSystem"
import FormSearchTrip from "./formSearchTrip"
import BusStation from "./busStation"
import Banner from "../../../components/frontend/banner"

export default {
  data() {
    return {
     header: {
        title: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
      }
    };
  },
  components: {
    Banner,
    Slide,
    InfoSystem,
    FormSearchTrip,
    BusStation
  },
  methods: {
  },
  created() {
    this.$store.dispatch("setHeader", this.header);
  },
};
</script>

<style scoped>




/* @import url("../../../assets/frontend/css/jquery-ui.css"); */
</style>