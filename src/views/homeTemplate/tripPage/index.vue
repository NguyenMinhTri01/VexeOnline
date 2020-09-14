<template>
  <div>
    <!--- banner-1 ---->
    <Banner1 />
    <!--- /banner-1 ---->
    <!--- bus-tp ---->
    <div class="bus-tp" id="myHeader">
      <div class="container">
        <p v-if="data">Kết Quả: {{data.length}} Chuyến</p>
        <h2 v-if="data">Vé xe từ {{data[0].routeId.name}}</h2>
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
        <template v-for="(item,index) in data" >
        <ul :key="index" class="first" >
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
              <h4>{{item.garageId.name}} </h4>
              <p>{{item.vehicleId.name}}</p>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="dept">
            <div class="bus-ic1">
              <i class="fa fa-clock-o"></i>
            </div>
            <div class="bus-txt1">
              <h4>{{item.startTime}}</h4>
              <h4>{{item.routeId.fromStationId.name}}</h4>
            </div>
            <div class="bus-ic1">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="arriv">
            <div class="bus-ic1">
              <i class="fa fa-clock-o"></i>
            </div>
            <div class="bus-txt1">
              <h4>{{item.endTime}}</h4>
              <h4>{{item.routeId.toStationId.name}}</h4>
            </div>
            <div class="bus-ic1">
              <i class="fa fa-map-marker"></i>
            </div>
          </li>
          <li class="seat">
            <div class="bus-ic3">
              <img src="../../../assets/frontend/images/seat.png" class="img-fluid" alt />
            </div>
            <div class="bus-txt3">
              <h4>{{item.vehicleId.numberOfSeats}} Chỗ</h4>
              <p>Còn trống {{item.availableSeatNumber}} chỗ</p>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="fare">
            <div class="bus-txt4">
              <h5>{{item.price}} đ</h5>
              <a style="cursor:pointer" data-toggle="modal" data-target="#detailContent" @click="handleViewContent(item.note)" class="view">Xem Chi Tiết</a>
              <a style="margin:10px;cursor:pointer" @click="handelBooking(item._id)" class="view">Đặt Vé</a>
            </div>
          </li>
          
          <div class="clearfix"></div>
          
        </ul>
        
    
        </template>
        <!--- /ul-first  ---->
      </div>
    </div>
    <!--- /bus-midd ---->
<div class="modal fade" id="detailContent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Thông Tin Chi Tiết</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-html="content">
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from "moment";
import Banner1 from "../../../components/frontend/banner1"
export default {
  components : {
    Banner1
  },
  data(){
    return{
      data : null,
      content:"",
    }
  },
  beforeCreate(){
    const formData = {
     formStation : localStorage.getItem("fromStation"),
     toStation : localStorage.getItem("toStation"),
     date : new Date(localStorage.getItem("date")) > new Date(Date.now()) ? new Date(localStorage.getItem("date")) : new Date(Date.now())
    }
    this.$store.dispatch("searchTrip", formData)
  },
  // created(){
  //   this.$store.dispatch("getSearchTrip");
  // },
  // updated(){
  //   this.$store.dispatch("getSearchTrip");
  // },
  watch:{
      trips: function(){
        moment.locale("vi");
        this.data = this.trips.map((item)=>{
          let newOject = {...item}
          if (item.startTime) {
            newOject.startTime = moment(item.startTime).format("LT");
          }
          if (item.endTime) {
            newOject.endTime = moment(item.endTime).format("LT");
          }
          return newOject;
        })
      }
  },
  computed:{
    trips() {
      return this.$store.state.trip.data;
    }
  },
  methods:{
    handleViewContent(note){
      this.content = note;
    },
    handelBooking(id){
      localStorage.setItem("tripId", id);
      this.$router.push('/chuyen-di/dat-ve');
    }
  },
  mounted () {
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
</style>