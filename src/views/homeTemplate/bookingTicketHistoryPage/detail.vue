<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="result-ticket">
            <div v-if="loading" class="notication">
                <Loader  />
            </div>
          <div v-else class="content-ticket">
            <CancelTicketConfirm @eventConfirmCancel="handleEventConfirmCancel" />
            <div class="ticket-info">
                <h5 class="text-ticket mb-3">Thông tin chi tiết vé: {{ticket.code}}</h5>
                <hr>
              <div class="row">
                <div class="col-lg-4 col-md-10 mb-5">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <strong>Tên khách hàng:</strong>
                        </div>
                        <div class="col-6 text-right mb-2">{{ticket.customerName}}</div>
                        <div class="col-2 mb-2">
                            <strong>Email:</strong>
                        </div>
                        <div class="col-10 text-right mb-2">{{ticket.email}}</div>
                        <div class="col-6 mb-2">
                            <strong>Số điện thoại:</strong>
                        </div>
                        <div class="col-6 text-right mb-2">{{ticket.phone}}</div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                  <div class="row">
                    <div class="col-4 mb-2">
                      <strong>Hãng Xe:</strong>
                    </div>
                    <div class="col-8 text-right mb-2">{{ticket.tripId.garageId.name}}</div>
                    <div class="col-6 mb-2">
                      <strong>Loại Xe:</strong>
                    </div>
                    <div class="col-6 text-right mb-2">{{ticket.tripId.vehicleId.name}}</div>
                    <div class="col-6 mb-2">
                      <strong>Nơi Đón:</strong>
                    </div>
                    <div class="col-6 text-right mb-2">{{ticket.tripId.routeId.fromStationId.name}}</div>
                    <div class="col-6 mb-2">
                      <strong>Giờ Đón</strong>
                      <i>(dự kiến) :</i>
                    </div>
                    <div class="col-6 text-right mb-2">{{ticket.tripId.startTime}}</div>
                    <div class="col-6 mb-2">
                      <strong>Nơi Trả Khách:</strong>
                    </div>
                    <div class="col-6 text-right mb-2">{{ticket.tripId.routeId.toStationId.name}}</div>
                    <div class="col-7 mb-2">
                      <strong>Giờ Trả Khách</strong>
                      <i>(dự kiến) :</i>
                    </div>
                    <div class="col-5 text-right mb-2">{{ticket.tripId.endTime}}</div>
                    <div class="col-4 mb-2">
                      <strong>Tuyến Đường:</strong>
                    </div>
                    <div class="col-8 text-right mb-2">{{ticket.tripId.routeId.name}}</div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="row">
                    <div class="col-8 mb-2">
                      <strong>Giá Vé:</strong>
                    </div>
                    <div class="col-4 text-right mb-2">{{ticket.tripId.price}}</div>
                    <div class="col-8 mb-2">
                      <strong>Số Lượng Ghế Đặt:</strong>
                    </div>
                    <div class="col-4 text-right mb-2">{{ticket.numberOfSeat}} Ghế</div>
                    <div class="col-8 mb-2">
                      <strong>Số Ghế:</strong>
                    </div>
                    <div class="col-4 text-right mb-2">{{ticket.listSeat}}</div>
                    <div class="col-8 mb-2">
                        <strong :class="statusClass" >Tổng Tiền:</strong>
                    </div>
                    <div :class="statusClass" class="col-4 text-right mb-2">{{ticket.totalPrice}}</div>
                    <div class="col-6 mb-2">
                        <strong>Tình Trạng Vé:</strong>
                    </div>
                    <div :class="statusClass" class="col-6 text-right mb-2">{{statusText}}</div>
                    <div class="col-12 mt-4 mb-3 text-right">
                        <button v-if="ticket.statusTicket != 2" data-toggle="modal" data-target="#cancelModal" class="btn-cancel">Hủy Vé</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button @click="returnHome" class="btn-return mt-4">Quay Lại Trang Chủ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Loader from "../../../components/loaderV2";
import CancelTicketConfirm from "../../../components/frontend/cancelTicketConfirm"
export default {
    components: {
        Loader,
        CancelTicketConfirm
    },
    data(){
        return{
            ticket:null,
            statusClass : 'text-warning',
            statusText : "Chưa Thanh Toán",
            flag : false,
            header: {
              title: "Chi tiết đặt vé - VeXe Online",
              description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
            }
        }
    },
    beforeCreate(){
        this.$store.dispatch("fetchDetailTicket", localStorage.getItem("ticketId"));
    },
    created(){
      this.$store.dispatch("setHeader", this.header);
    },
    computed:{
      data(){
        return this.$store.state.ticket.ticket;
      },
      loading(){
        return this.$store.state.ticket.loading;
      }
    },
    watch: {
    data(value) {
      if (value)
          moment.locale("vi");
          this.ticket = {...value}
          this.ticket.totalPrice = this.formatNumber(this.ticket.totalPrice);
          this.ticket.tripId.price = this.formatNumber(this.ticket.tripId.price);
          this.ticket.tripId.startTime = `${moment(this.ticket.tripId.startTime).format("LT")} ${moment(this.ticket.tripId.startTime).format("L")}`
          this.ticket.tripId.endTime = `${moment(this.ticket.tripId.endTime).format("LT")} ${moment(this.ticket.tripId.endTime).format("L")}`
          switch (this.ticket.statusTicket) {
            case 0:
              this.statusClass = 'text-warning'
              this.statusText = 'Chưa Thanh Toán'
              break
            case 1:
              this.statusClass = 'text-success'
              this.statusText = 'Đã Thanh Toán'
              break
            case 2:
              this.statusClass = 'text-secondary'
              this.statusText = 'Đã Hủy'
              break
          }
          if (this.flag) {
            this.$toast.success('Huy Vé Thành công', {
              position : 'bottom-right',
              duration : 1000
            })
          }
        }
      },
    methods:{
        returnHome() {
            this.$router.push("/");
        },
        formatNumber(number) {
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(number);
        },
        handleEventConfirmCancel () {
            this.$store.dispatch("cancelTicket",this.ticket._id);
            this.flag = true
        }
    }
};
</script>

<style scoped>
.text-ticket {
        color: #3f84b1;
        font-weight: bold;
    }
.result-ticket {
  margin: 20px 0 10px 0;
}
.notication {
  text-align: center;
  margin-top: 3.7em;
}
.back-ground {
  width: 100%;
  height: 500px;
}
.ticket-info {
  margin: 10px 0 10px 0;
  border-bottom: solid 1px #ccc;
  padding: 15px 5px 5px 5px;
  box-sizing: border-box;
}

.btn-cancel {
  border: solid 1px #ccc;
  width: 30%;
  border-radius: 3px;
  background: white;
}
.btn-return {
  border: solid 1px #3f84b1;
  width: 40%;
  border-radius: 3px;
  background: #3f84b1;
  padding: 5px;
  color: white;
}
.btn-return:hover {
  background-color: #4295cc;
}

img {
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  width: 100%;
}

@media (max-width: 768px) {
  .notication {
    margin-top: 0.2em;
  }
  .back-ground {
    display: none;
  }
}
</style>