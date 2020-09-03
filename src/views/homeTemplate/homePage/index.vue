<template>
  <div>
    <!--- banner ---->
    <div class="banner">
      <div class="container">
        <h1
          class="wow zoomIn animated animated"
          data-wow-delay=".5s"
          style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
        >Green Wheels - Best in Class for Travel & Hotels</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 bann-info1 wow fadeInLeft animated" data-wow-delay=".5s">
          <i class="fa fa-columns"></i>
          <h3>Hệ Thống Đặt Vé Xe Uy Tín Nhất Việt Nam</h3>
        </div>
        <div class="col-md-7 bann-info wow fadeInRight animated" data-wow-delay=".5s">
          <h2>Đặt Vé Trực Tuyến Với Phí Đặt Chổ Bằng 0</h2>
          <div class="ban-top">
            <div class="bnr-left">
              <select v-model="formStation" class="selectInput selectbox-scrollable" name="" id="">
                <option value="0" disabled >Chọn Điểm Đi</option>
                <option v-for="(value, key) in provinces" :key="key" v-bind:value="value.name">{{value.name_with_type}}</option>
              </select>
              <!-- <label class="inputLabel">From</label> -->
              <!-- <input
                class="city"
                type="text"
                value="Enter a city"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Enter a city';}"
                required
              /> -->
            </div>
            <div class="bnr-left">
              <select v-model="toStation" class="selectInput selectbox-scrollable" name="" id="">
                <option value="0" disabled>Chọn điểm đến</option>
                <option v-for="(value, key) in provinces" :key="key" v-bind:value="value.name">{{value.name_with_type}}</option>
              </select>
              <!-- <label class="inputLabel">To</label> -->
              <!-- <input
                class="city"
                type="text"
                value="Enter a city"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Enter a city';}"
                required
              /> -->
            </div>
            <div class="bnr-left">
              <!-- <label class="inputLabel">To</label> -->
              <DatePicker :input-class="'inputCalendar'" v-model="date" :lang="lang"  :format="customFormatter(date)" />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="ban-bottom">
            <div class="clearfix"></div>
            <div class="sear">
              <form>
                <button type="button" @click="handleConvertStation" class="seabtn mr-2"><i class="fa fa-exchange"></i> CHUYỂN</button>
                <button class="seabtn"><i class="fa fa-search"></i> TÌM VÉ XE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <!--- rupes ---->
    <div class="container">
      <div class="rupes">
        <div class="row">
          <div
            class="col-md-4 rupes-left wow fadeInDown animated animated"
            data-wow-delay=".5s"
            style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;"
          >
            <div class="rup-left">
              <a href="offers.html">
                <i class="fa fa-usd"></i>
              </a>
            </div>
            <div class="rup-rgt">
              <h3>UP TO USD. 50 OFF</h3>
              <h4>
                <a href="offers.html">TRAVEL SMART</a>
              </h4>
              <p>
                CODE:YBMAR12
                <br />Book Using Pay Money
              </p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div
            class="col-md-4 rupes-left wow fadeInDown animated animated"
            data-wow-delay=".5s"
            style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;"
          >
            <div class="rup-left">
              <a href="offers.html">
                <i class="fa fa-h-square"></i>
              </a>
            </div>
            <div class="rup-rgt">
              <h3>UP TO 70% OFF</h3>
              <h4>
                <a href="offers.html">ON HOTELS ACROSS WORLD</a>
              </h4>
              <p>Offer CODE:YBMAR12</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div
            class="col-md-4 rupes-left wow fadeInDown animated animated"
            data-wow-delay=".5s"
            style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;"
          >
            <div class="rup-left">
              <a href="offers.html">
                <i class="fa fa-mobile"></i>
              </a>
            </div>
            <div class="rup-rgt">
              <h3>FLAT USD. 50 OFF</h3>
              <h4>
                <a href="offers.html">BUS APP OFFER</a>
              </h4>
              <p>
                book via the yellow Bus App
                <br />CODE:YBMAR12
              </p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--- /rupes ---->
    <!---holiday---->
    <div class="container">
      <div class="holiday">
        <div class="row">
          <div
            class="col-md-3 holiday-left animated wow fadeInUp animated"
            data-wow-duration="1200ms"
            data-wow-delay="500ms"
            style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
          >
            <img src="../../../assets/frontend/images/4.jpg" class="img-responsive" alt />
          </div>
          <div
            class="col-md-6 holiday-mid animated wow fadeInUp animated"
            data-wow-duration="1200ms"
            data-wow-delay="500ms"
            style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
          >
            <h3>Travel Holiday Packages</h3>
            <p>Private Guide and Driver in any language and in any departure date. For more information please contact us....</p>
          </div>
          <div
            class="col-md-3 holiday-left animated wow fadeInUp animated"
            data-wow-duration="1200ms"
            data-wow-delay="500ms"
            style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
          >
            <img src="../../../assets/frontend/images/5.jpg" class="img-responsive" alt />
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!---/holiday---->
    <!---track---->
    <div class="container">
      <div class="track">
        <div class="row">
          <div class="col-md-6 track-right wow fadeInLeft animated" data-wow-delay=".5s">
            <a href="track.html">
              <img src="../../../assets/frontend/images/map1.png" class="img-responsive" alt />
            </a>
          </div>
          <div class="col-md-6 track-left wow fadeInRight animated" data-wow-delay=".5s">
            <h3>TRACK MY BUS</h3>
            <p>First of its own kind,bus tracking feature on bus</p>
            <a href="track.html" class="learn">Learn More</a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--- /track ---->
    <!--- routes ---->
    <div class="routes">
      <div class="container">
        <div class="row">
          <div class="col-md-4 routes-left wow fadeInRight animated" data-wow-delay=".5s">
            <div class="rou-left">
              <a href="#">
                <i class="fa fa-truck"></i>
              </a>
            </div>
            <div class="rou-rgt wow fadeInDown animated" data-wow-delay=".5s">
              <h3>80000</h3>
              <p>ROUTES</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="col-md-4 routes-left">
            <div class="rou-left">
              <a href="#">
                <i class="fa fa-user"></i>
              </a>
            </div>
            <div class="rou-rgt">
              <h3>1900</h3>
              <p>BUS OPERATORS</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="col-md-4 routes-left wow fadeInRight animated" data-wow-delay=".5s">
            <div class="rou-left">
              <a href="#">
                <i class="fa fa-ticket"></i>
              </a>
            </div>
            <div class="rou-rgt">
              <h3>7,00,00,000+</h3>
              <p>TICKETS SOLD</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--- /routes ---->
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/vi';
// import "../../../assets/frontend/js/jquery-ui.js";

// global.jQuery = require("jquery");
// var $ = global.jQuery;
// window.$ = $;
import moment from "moment";

export default {
  data() {
    return {
      date: "",
      formStation : "0",
      toStation : "0",
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      provinces : require("../../../assets/data/dataAddress/provinces")
    };
  },
  components: {
    DatePicker,
  },
  methods: {
    customFormatter(date) {
      moment.locale("vi");
      return moment(date).format("L");
    },
    handleConvertStation() {
      const temp = this.formStation;
      this.formStation = this.toStation;
      this.toStation = temp
    }
  },
  created() {
    this.date = new Date(Date.now());
  }
};
</script>

<style scoped>

.selectInput {
  width: 95%;
  color: #9E9E9E;
  outline: none;
  font-size: 14px;
  padding: 10px 10px !important;
  border: 1px solid #9E9E9E;
  -webkit-appearance: none !important;
  margin-top: 10px;
}

select::-webkit-scrollbar-thumb{
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255,0,0,0.8); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

::-webkit-scrollbar {
  width: 3px;
}



@media (max-width: 600px){
  .selectInput {
    font-size: 13px;
    margin-top: 0px;
    padding: 6px 10px !important;
  }
}


.mx-datepicker {
    position: relative;
    display: block;
    width: 100%;
}

.inputCalendar  {
    width: 100% !important;
} 



/* @import url("../../../assets/frontend/css/jquery-ui.css"); */
</style>