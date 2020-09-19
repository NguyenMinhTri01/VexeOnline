<template>
  <div>
    <!--- banner-1 ---->
    <Banner1 />
    <!--- /banner-1 ---->
    <!--- bus-tp ---->
    <Loader v-if="loading" />
    <template v-else>
      <div  class="bus-tp" id="myHeader">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12 text-header">
              <h6 v-if="data">Vé xe từ {{data[0].routeId.name}}</h6>
            </div>
            <div class="col-md-3 col-6 text-header">
              <h6 v-if="data">Ngày {{time}}</h6>
            </div>
            <div class="col-md-3 col-6 text-right text-header">
              <h6 v-if="data">Kết Quả: {{data.length}} Chuyến</h6>
            </div>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
      <!--- /bus-tp ---->
      <!--- bus-btm ---->
      <div class="bus-btm">
        <div class="container">
          <ul>
            <li class="trav">
              <a href="#">Xe</a>
            </li>
            <li class="dept">
              <a href="#">Khởi Hành</a>
            </li>
            <li class="arriv">
              <a href="#">Kết Thúc</a>
            </li>
            <li class="seat">
              <a href="#">Ghế Ngồi</a>
            </li>
            <li class="fare">
              <a href="#">Giá Vé</a>
            </li>
            <div class="clearfix"></div>
          </ul>
        </div>
      </div>
      <!--- /bus-btm ---->
      <!--- bus-midd ---->
      <div
        class="bus-midd wow zoomIn animated animated"
        data-wow-delay=".5s"
        style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
      >
        <div class="container">
          <!--- ul-first  ---->
          <template v-for="(item,index) in data">
            <ul :key="index" class="first">
              <li class="trav">
                <div class="bus-ic">
                  <!-- <img src="../../../assets/frontend/images/bus.png" class="img-responsive" alt /> -->
                  <img
                    class="img-fluid"
                    v-lazy="`https://res.cloudinary.com/vexeonline/${item.vehicleId.avatar}`"
                    alt="avatar"
                  />
                </div>
                <div class="bus-txt">
                  <h6 style="margin-top: 3px">{{item.garageId.name}}</h6>
                  <i style="font-size: 13px">{{item.vehicleId.name}}</i>
                </div>
                <div class="clearfix"></div>
              </li>
              <li class="dept">
                <div class="bus-txt1">
                  <h6>
                    <i class="fa fa-clock-o"></i>
                    {{item.startTime}}
                  </h6>
                  <h6>
                    <i class="fa fa-map-marker"></i>
                    {{item.routeId.fromStationId.name}}
                  </h6>
                </div>
                <div class="clearfix"></div>
              </li>
              <li class="arriv">
                <div class="bus-txt1">
                  <h6>
                    <i class="fa fa-clock-o"></i>
                    {{item.endTime}}
                  </h6>
                  <h6>
                    <i class="fa fa-map-marker"></i>
                    {{item.routeId.toStationId.name}}
                  </h6>
                </div>
              </li>
              <li class="seat">
                <div class="bus-ic3">
                  <img src="../../../assets/frontend/images/seat.png" class="img-fluid" alt />
                </div>
                <div class="bus-txt3">
                  <h6>{{item.vehicleId.numberOfSeats}} Chỗ</h6>
                  <i style="font-size: 13px">{{item.availableSeatNumber}} chỗ trống</i>
                </div>
                <div class="clearfix"></div>
              </li>
              <li class="fare">
                <div class="bus-txt4">
                  <h5>{{item.price}}</h5>
                  <a
                    style="cursor:pointer"
                    data-toggle="modal"
                    data-target="#detailContent"
                    @click="handleViewContent(item.note)"
                    class="view"
                  >Thông Tin</a>
                  <a
                    style="margin:10px;cursor:pointer"
                    @click="handelBooking(item._id)"
                    class="view"
                  >Đặt Vé</a>
                </div>
              </li>

              <div class="clearfix"></div>
            </ul>
          </template>
          <!--- /ul-first  ---->
        </div>
      </div>
      <!--- /bus-midd ---->
      <div
        class="modal fade"
        id="detailContent"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Thông Tin Chi Tiết</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" v-html="content"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
import Banner1 from "../../../components/frontend/banner1";
import Loader from "../../../components/loaderV2"
export default {
  components: {
    Banner1,
    Loader
  },
  data() {
    return {
      data: null,
      content: "",
      time: null,
      header: {
        title: "Vé xe từ "+localStorage.getItem("fromStation") +" đi "+ localStorage.getItem("toStation") + " - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
      }
    };
  },
  created() {
    this.$store.dispatch("setHeader", this.header);
    const formData = {
      formStation: localStorage.getItem("fromStation"),
      toStation: localStorage.getItem("toStation"),
      date:
        new Date(localStorage.getItem("date")) > new Date(Date.now())
          ? new Date(localStorage.getItem("date"))
          : new Date(Date.now()),
    };
    moment.locale("vi");
    this.time = moment(formData.date).format("LL");
    const month = (formData.date.getMonth()+1 > 9) ? (formData.date.getMonth()+1) : '0' + (formData.date.getMonth()+1);
    const day = (formData.date.getDate() > 9) ? formData.date.getDate() : '0' + formData.date.getDate();
    formData.date =`${formData.date.getFullYear()}-${month}-${day}T00:00:00.000Z`;
    this.$store.dispatch("searchTrip", formData);
  },
  // created(){
  //   this.$store.dispatch("getSearchTrip");
  // },
  // updated(){
  //   this.$store.dispatch("getSearchTrip");
  // },
  watch: {
    trips: function (value) {
      if (value && value.length > 0) {
          moment.locale("vi");
          this.data = this.trips.map((item) => {
            let newOject = { ...item };
            newOject.price = this.formatNumber(newOject.price);
            if (item.startTime) {
              newOject.startTime = moment(item.startTime).format("LT");
            }
            if (item.endTime) {
              newOject.endTime = moment(item.endTime).format("LT");
            }
            return newOject;
          });
        }
      }
  },
  computed: {
    trips() {
      return this.$store.state.trip.data;
    },
    loading() {
      return this.$store.state.trip.loading;
    },
  },
  methods: {
    handleViewContent(note) {
      this.content = note;
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
  mounted() {
    // window.onscroll = function() {addHeaderfix()};
    // let header = document.getElementById("myHeader");
    // let sticky = header.offsetTop;
    // function addHeaderfix() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("headerFix");
    //   } else {
    //     header.classList.remove("headerFix");
    //   }
    // }
  },
};
</script>

<style scoped>
.headerFix {
  position: fixed;
  top: 0;
  width: 100%;
}
.text-header {
  color: azure;
}
</style>