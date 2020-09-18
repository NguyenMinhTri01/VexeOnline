<template>
  <div>
    <div class="banner-1">
        <div class="container">
            <h1 class="wow zoomIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Green Wheels - Best in Class for Travel & Hotels</h1>
        </div>
      </div>
      <div v-if="!loading && ticket" class="blog">
        <div class="container">
            <div class="row">
              <div class="col-md-7">
                <div class="box-content">
                  <h3 class="titleSuccess">Đặt chỗ thành công</h3>
                    <p>Chúng tôi đã gửi thông tin vé đến SĐT <b>{{ticket.phone}}</b> và email <b>{{ticket.email}}</b>, bạn hãy kiểm tra thật kĩ nhé</p>
                </div>
                <hr>
                <div class="box-content">
                  <h5 class="titleInfo">Hướng dẫn lên xe</h5>
                    <p>Bạn cần ra điểm đón trước 15 phút, đưa SMS hoặc email xác nhận thanh toán của vexeonline cho nhân viên văn phòng vé để đổi vé giấy</p>
                    <p>Khi lên xe, bạn xuất trình vé giấy cho tài xế hoặc phụ xe</p>
                </div>
                <hr>
                <div class="box-content">
                  <h5 class="titleInfo">Hướng dẫn thanh toán</h5>
                    <p>Báo với nhân viên là bạn cần thanh toán vé xe đã đặt ở vexeonline và làm theo hướng dẫn của họ</p>
                    <p>Vé của bạn chỉ được giữ chỗ đến {{data.startTime}}. Vui lòng thanh toán trước thời điểm này, nếu không vé của bạn sẽ bị hủy</p>
                </div>
                <hr>
                <div class="box-content">
                  <h5 class="titleInfo">Điểm đón</h5>
                  <p>{{data.routeId.fromStationId.name}}</p>
                  <p>Đón lúc: {{data.startTime}}</p>
                </div>
                <hr>
                <div class="box-content">
                  <h5 class="titleInfo">Điểm trả</h5>
                  <p>{{data.routeId.toStationId.name}}</p>
                  <p>Đón lúc: {{data.endTime}}</p>
                </div>
              </div>
              <div class="col-md-5">
                <div class="card">
                  <div class="card-body">
                    <h5 style="margin-bottom:15px" class="titleInfo">Thông tin vé</h5>
                    <div>
                      <p class="infoTicket">MÃ VÉ</p>
                      <p>{{ticket.code}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">HỌ TÊN</p>
                      <p>{{ticket.customerName}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">SỐ ĐIỆN THOẠI</p>
                      <p>{{ticket.phone}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">EMAIL</p>
                      <p>{{ticket.email}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">NHÀ XE</p>
                      <p>{{data.garageId.name}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">TUYẾN ĐƯỜNG</p>
                      <p>{{data.routeId.name}}</p>
                    </div>
                    <hr>
                    <div>
                      <p class="infoTicket">MÃ GHẾ</p>
                      <p><span v-for="(seat,index) in seats" :key="index">{{seat}} </span></p>
                    </div>
                  </div>
                </div>
                <br>
                <div class="card">
                  <div class="card-body">
                    <h5 style="margin-bottom:15px" class="titleInfo">Thông tin giao dịch</h5>
                    <div class="row">
                      <div class="col-md-5">
                        <p>Hình thức</p>
                        <p>Trạng thái</p>
                      </div>
                      <div class="col-md-7">
                        <p>Tại nhà xe</p>
                        <p>Đặt chỗ thành công</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-5">
                        <p>Giá vé</p>
                      </div>
                      <div class="col-md-7">
                        <p>{{seats.length}} x {{data.price}} đ</p>
                        <p>Ghế
                          <span v-for="(seat,index) in seats" :key="index">{{seat}} </span>
                        </p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-5">
                        <p><b>Tổng tiền</b></p>
                      </div>
                      <div class="col-md-7">
                        <p>{{total}} đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <router-link to="/" class="view">Tiếp tục tìm kiếm vé</router-link>
              </div>
            </div>
        </div>
      </div>
      <div v-else class="blog">
        <div class="container">
            <div class="row">
              <div class="col-md-12">
                <router-link to="/" class="view">Tiếp tục tìm kiếm vé</router-link>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data(){
    return {
      data:null,
      total: localStorage.getItem("total"),
    }
  },
  beforeCreate(){
    if(localStorage.getItem("tripId")===null){
            this.$router.replace('/');
        }else{
            this.$store.dispatch("fetchDetailTrip", localStorage.getItem("tripId"));
        }
    localStorage.removeItem("tripId");
  },
  computed:{
    ticket(){
      return this.$store.state.ticket.data;
    },
    loadingTicket(){
      return this.$store.state.ticket.loading;
    },
    trip(){
      return this.$store.state.trip.trip;
    },
    loading(){
      return this.$store.state.trip.loading;
    },
    seats(){
      return this.$store.state.ticket.seats;
    },
  },
  watch:{
    trip: function(){
      moment.locale("vi");
      this.data = {...this.trip};
      this.data.startTime = moment(this.trip.startTime).format("LLLL");
      this.data.endTime = moment(this.trip.endTime).format("LLLL");
      return this.data;        
    },
  }
};
</script>

<style scoped>
  .titleSuccess{
    font-size: 1.5em;
    color: #4CB320;
    text-transform: capitalize;
    text-decoration: none;
    line-height: 1.3em;
    font-weight: bold;
  }
  .titleInfo{
    font-weight: bold
  }
  .infoTicket{
    font-size: 12px;
    font-weight: 600;
    color: #9b8282;
  }
</style>