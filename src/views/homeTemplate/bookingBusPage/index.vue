<template>
    <div v-if="!loading">
        <Banner1/>
        <div class="terms">
        <div class="container">
        <div class="row">
        <div class="col-sm-4">
            <h3>Chú thích</h3>
            <p><button class="seatBooking btn"></button> Còn trống</p>
            <p><button class="seatBooking btn seatBook"></button> Đã đặt</p>
            <p><button class="seatBooking btn active"></button> Đã chọn</p>
        </div>
        <div class="col-sm-4">
            <!-- gọi component seat -->
            <template v-for="(seat,index) in listSeat">
            <Seat ref="seat" :key="`s-${index}`" :seat="seat" @eventOrder="handleOrderSeat($event)" :unSeatSelect="unSeatSelect" />
            <br :key="index" v-if="(index+1)%4===0" />
            </template>
        </div>
        <div class="col-sm-4">
            <h3>Danh sách đặt ghế</h3>
            <p v-for="(seat,index) in listSeatOrder" :key="index">
            Ghế: {{seat.code}} / Giá: {{trip.price}}đ
            <!-- <span style="color:red;cursor:pointer" @click="handleCancle(index,seat)">[Hủy]</span> -->
            <button @click="handleCancle(index,seat)" type="button" class="btn btn-sm btn-danger">X</button>
            </p>
            <hr>
            <p>Tổng : {{total}}đ</p>
            <button style="cursor:pointer;margin-right: 10px;" @click="handleBackTrip" class="view">Quay Lại</button>
            <button style="cursor:pointer" @click="handleCheckOut" class="view" :disabled="flag">Tiếp Tục</button>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Seat from "./seat";
import Banner1 from "../../../components/frontend/banner1"
export default {
    components:{
        Banner1,
        Seat
    },
    data() {
        return {
            listSeat: '',
            unSeatSelect: null,
            listSeatOrder: [],
            flag: true,
            listNameSeatOrder:[]
        };
    },
    
  beforeCreate(){
    this.$store.dispatch("fetchDetailTrip", localStorage.getItem("tripId"));
  },
  computed:{
      total(){
        return this.listSeatOrder.length * this.trip.price
      },
      trip(){
        return this.$store.state.trip.trip;
      },
      loading(){
        return this.$store.state.trip.loading;
      }
  },
  watch:{
    trip(value){
      if(value){
        this.listSeat = value.seats
      }
    },
    listSeatOrder(value){
      
      if(value){
        this.flag = false
      }
    }
  },
  methods: {
    handleOrderSeat(obj) {
      if (obj.status) {
        this.listSeatOrder.push(obj.seat);
        this.listNameSeatOrder.push(obj.seat.code)
        //console.log(this.listNameSeatOrder)
      } else {
        if (this.listSeatOrder.length > 0) {
          this.listSeatOrder.forEach(seat => {
            if (seat.code === obj.seat.code) {
              //let stt = this.listSeatOrder.indexOf(seat.code);
              let stt = this.listSeatOrder.findIndex(item => {
                return (item.code === obj.seat.code);
              });
              if (stt !== -1) {
                this.listSeatOrder.splice(stt, 1);
                this.listNameSeatOrder.splice(stt,1)
              }
            }
          });
        }
      }
      
      //console.log(this.listNameSeatOrder) // đó làm sao để truyền cái đó qua cái page checkoutPgae
      
    },
    handleCancle(value,seat){
      this.listSeatOrder.splice(value,1);
      

      //C1-Dom Component
      // this.$refs.seat.forEach(item=>{
      //   if(item.seat.SoGhe===seat.SoGhe){
      //     item.statusClass = false;
      //   }
      // })

      //C2 - Watch
      this.unSeatSelect = seat;
    },
    handleBackTrip(){
      this.$router.push('/chuyen-di');
    },
    handleCheckOut(){
      this.$store.dispatch("setSeats", this.listNameSeatOrder); // r ddos
      localStorage.setItem("total", this.total);
      this.$router.push('/chuyen-di/dat-ve/thanh-toan');
    },
  }
}
</script>

<style>

</style>