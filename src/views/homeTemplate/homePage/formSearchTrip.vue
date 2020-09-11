<template>
          <div class="col-md-7 bann-info wow fadeInRight animated" data-wow-delay=".5s">
          <h2>Đặt Vé Trực Tuyến Với Phí Đặt Chổ Bằng 0</h2>
          <div class="ban-top">
            <div class="bnr-left">
              <select v-model="formStation" class="selectInput selectbox-scrollable" name id>
                <option value="0" disabled>Chọn Điểm Đi</option>
                <option
                  v-for="(value, key) in provinces"
                  :key="key"
                  v-bind:value="value.name_with_type"
                >{{value.name_with_type}}</option>
              </select>
            </div>
            <div class="bnr-left">
              <select v-model="toStation" class="selectInput selectbox-scrollable" name id>
                <option value="0" disabled>Chọn điểm đến</option>
                <option
                  v-for="(value, key) in provinces"
                  :key="key"
                  v-bind:value="value.name_with_type"
                >{{value.name_with_type}}</option>
              </select>
            </div>
            <div class="bnr-left">
              <DatePicker
                :input-class="'inputCalendar'"
                v-model="date"
                :lang="lang"
                :format="customFormatter(date)"
              />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="ban-bottom">
            <div class="clearfix"></div>
            <div class="sear">
              <form @submit.prevent="handleSubmit">
                <button type="button" @click="handleConvertStation" class="seabtn mr-2">
                  <i class="fa fa-exchange"></i> CHUYỂN
                </button>
                <button type="submit" class="seabtn">
                  <i class="fa fa-search"></i> TÌM VÉ XE
                </button>
              </form>
            </div>
          </div>
        </div>
</template>

<script>

import DatePicker from "vue2-datepicker";
import moment from "moment";
export default {
  components : {
    DatePicker
  },
    data() {
    return {
      date: "0",
      formStation: "0",
      toStation: "0",
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      provinces: require("../../../assets/data/dataAddress/provinces"),
    };
  },
  methods: {
    customFormatter(date) {
      moment.locale("vi");
      return moment(date).format("L");
    },
    handleConvertStation() {
      const temp = this.formStation;
      this.formStation = this.toStation;
      this.toStation = temp;
    },
    handleSubmit () {
      if (!this.date) this.date = new Date(Date.now());
      if (this.formStation != '0' && this.toStation != '0'){
        const formData = {
          formStation : this.formStation ,
          toStation : this.toStation,
          date : new Date(this.date)
        }
        //console.log(formData)
        this.$store.dispatch("searchTrip", formData);
        this.$router.push('/chuyen-di');
      }
    }
  },
  created() {
    this.date = new Date(Date.now());
  },

}
</script>

<style scoped>

.selectInput {
  width: 95%;
  color: #9e9e9e;
  outline: none;
  font-size: 14px;
  padding: 10px 10px !important;
  border: 1px solid #9e9e9e;
  -webkit-appearance: none !important;
  margin-top: 10px;
}



@media (max-width: 600px) {
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

.inputCalendar {
  width: 100% !important;
}

</style>