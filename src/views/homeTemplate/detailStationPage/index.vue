<template>
  <div>
    <Banner1 />
    <Loader v-if="loadingPage" />
    <div v-else class="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-3 left-colunm">
            <div
              class="comments-list hover14 column animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>{{station.name}}</h3>
              <p>Trụ sở: {{station.address}}</p>
              <figure>
                <img
                  class="img-fluid"
                  v-lazy="`https://res.cloudinary.com/vexeonline/${station.avatar}`"
                  alt="avatar"
                />
              </figure>
            </div>
          </div>
          <div class="col-md-6 right-colunm">
            <div class="comments-list">
              <h3>Tìm Thêm Chuyến Đi</h3>
              <div class="search-trip">
                <form @submit.prevent="handleSubmit" class="form-group">
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <select v-model="formStation" class="form-control">
                        <option value="0" disabled>Chọn Điểm Đi</option>
                        <option
                          v-for="(value, key) in provinces"
                          :key="key"
                          v-bind:value="value.name_with_type"
                        >{{value.name_with_type}}</option>
                      </select>
                    </div>
                    <div @click="handleConvertStation" class="col-md-1 text-center convert">
                      <i class="fa fa-exchange"></i>
                    </div>
                    <div class="col-md-4 mb-3">
                      <select v-model="toStation" class="form-control">
                        <option value="0" disabled>Chọn Điểm Đến</option>
                        <option
                          v-for="(value, key) in provinces"
                          :key="key"
                          v-bind:value="value.name_with_type"
                        >{{value.name_with_type}}</option>
                      </select>
                    </div>
                    <div class="col-md-4 mb-3">
                      <DatePicker
                        :input-class="'form-control input-date'"
                        v-model="date"
                        :lang="lang"
                        :format="customFormatter(date)"
                      />
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-4">
                      <button type="submit" class="form-control btn-submit">Tìm Vé Xe</button>
                    </div>
                  </div>
                </form>
              </div>

              <h3>Các chuyến đi khởi hành từ {{station.name}} trong hôm nay</h3>
              <Loader v-if="loadingTrip" />
              <table v-else class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Tuyến Đường</th>
                    <th scope="col">Hãng Xe</th>
                    <th scope="col">Giá Vé</th>
                    <th scope="col">Khởi Hành</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="trip in trips" :key="trip._id">
                    <td scope="row">{{trip.routeId.name}}</td>
                    <td>{{trip.garageId.name}}c</td>
                    <td>{{trip.price}}</td>
                    <td>{{trip.startTime}}</td>
                    <td>
                      <button @click="handelBooking(trip._id)" class="booking">Đặt Vé</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/vi";
import Banner1 from "../../../components/frontend/banner1";
import DatePicker from "vue2-datepicker";
import Loader from "../../../components/loaderV2";
import moment from "moment";
export default {
  components: {
    Banner1,
    DatePicker,
    Loader,
  },
  data() {
    return {
      date: "0",
      formStation: "0",
      toStation: "0",
      loadingPage: true,
      loadingTrip: true,
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      provinces: require("../../../assets/data/dataAddress/provinces"),
      trips: [],
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
    handleSubmit() {
      if (!this.date) this.date = new Date(Date.now());
      if (this.formStation != "0" && this.toStation != "0") {
        const formData = {
          formStation: this.formStation,
          toStation: this.toStation,
          date: new Date(this.date),
        };
        localStorage.setItem("fromStation", formData.formStation);
        localStorage.setItem("toStation", formData.toStation);
        localStorage.setItem("date", formData.date);
        this.$router.push("/chuyen-di");
      }
    },

    handelBooking(id) {
      localStorage.setItem("tripId", id);
      this.$router.push("/chuyen-di/dat-ve");
    },

    formatNumber(number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },    
  },

  created() {
    this.date = new Date(Date.now());
    this.$store.dispatch("fetchDetailStationBySlug", this.$route.params.slug);
    this.$store.dispatch(
      "fetchListTripsByFromStation",
      this.$route.params.slug
    );
  },
  computed: {
    dataTrip() {
      return this.$store.state.trip.data;
    },
    station() {
      return this.$store.state.stations.station;
    },
    slugStation() {
      return this.$route.params.slug;
    },
  },

  watch: {
    station(value) {
      if (value) {
        this.loadingPage = false;
      }
    },
    dataTrip(value) {
      if (value && value.length > 0) {
        moment.locale("vi");
        this.trips = value.map((item) => {
          let newOject = { ...item };
          if (item.startTime) {
            newOject.startTime = moment(item.startTime).format("LT");
            newOject.price = this.formatNumber(newOject.price);
          }
          return newOject;
        });
        this.loadingTrip = false;
      } else {
        this.trips = []
      }
    },
    slugStation() {
      this.loadingPage = true,
      this.loadingTrip = true,
      this.date = new Date(Date.now());
      this.$store.dispatch("fetchDetailStationBySlug", this.$route.params.slug);
      this.$store.dispatch(
        "fetchListTripsByFromStation",
        this.$route.params.slug
      );
    },
  },
};
</script >

<style scoped>
.left-colunm {
  border-right: 1px solid #e5e5e5;
}

@media (min-width: 768px) {
  .col-md-1 {
    flex: 0 0 11.11111%;
    max-width: 11.11111%;
  }
  .col-md-2 {
    flex: 0 0 22.22222%;
    max-width: 22.22222%;
  }
  .col-md-3 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-4 {
    flex: 0 0 44.44444%;
    max-width: 44.44444%;
  }
  .col-md-5 {
    flex: 0 0 55.5555%;
    max-width: 55.5555%;
  }
  .col-md-6 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-7 {
    flex: 0 0 77.77777%;
    max-width: 77.77777%;
  }
  .col-md-8 {
    flex: 0 0 88.8888%;
    max-width: 88.8888%;
  }
  .col-md-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.search-trip {
  width: 100%;
  height: auto;
  background-color: #4cb320;
  padding: 20px;
  border-radius: 5px;
  margin: 5px 0 1rem 0;
}
.right-colunm select {
  margin: 0px !important;
}
h3 {
  font-size: 1.5em !important;
}
.btn-submit {
  background-color: #3f84b1;
  color: white;
  font-weight: bold;
}
.btn-submit:hover {
  background-color: #4295cc;
}
.convert {
  color: white;
  font-size: 25px;
}
.convert:hover {
  color: #adb5bd;
}
.mx-datepicker {
  width: 100% !important;
}

.booking {
  padding: 6px 10px;
  font-weight: 700;
  color: #fff;
  background-color: #34ad00;
  border: 0;
  font-size: 13px;
  border-radius: 2px;
  transition: all 0.2s;
  display: inline-block;
}

.table th {
  border-top: 0px;
}

.table td {
  padding: 0.65rem;
}
.img-fluid {
  width: 90%;
  max-width: 100%;
  height: 20%;
  margin: 3%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .convert {
    display: none;
  }
  h3 {
    font-size: 1em !important;
    margin-bottom: 1em;
  }
  .table {
    font-size: 0.8em;
  }
  .form-control {
    font-size: 0.8rem;
  }

  input {
    font-size: 0.8rem !important;
  }
}
</style>