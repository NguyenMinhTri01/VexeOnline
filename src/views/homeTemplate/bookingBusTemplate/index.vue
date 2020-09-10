<template>
    <div>
        <Banner1/>
        <div class="terms">
        <div class="container">
        <div class="row">
        <div class="col-sm-4">
            <h3>Chú thích</h3>
            <p><button class="seat btn"></button> Còn trống</p>
            <p><button class="seat btn seatBook"></button> Đã đặt</p>
            <p><button class="seat btn active"></button> Đã chọn</p>
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
            Ghế: {{seat.SoGhe}} / Giá: {{seat.Gia}}đ
            <!-- <span style="color:red;cursor:pointer" @click="handleCancle(index,seat)">[Hủy]</span> -->
            <button @click="handleCancle(index,seat)" type="button" class="btn btn-sm btn-danger">X</button>
            </p>
            <hr>
            <p>Tổng : 0đ</p>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Seat from "./seat";
const datas = require("./data.json");
import Banner1 from "../../../components/frontend/banner1"
export default {
    components:{
        Banner1,
        Seat
    },
    data() {
        return {
            listSeat: datas,
            unSeatSelect: null,
            listSeatOrder: []
        };
    },
    computed:{
    total(){
      return this.listSeatOrder.reduce((a,b)=>{
        return a+=b.Gia
      },0)
    }
  },
  methods: {
    handleOrderSeat(obj) {
      if (obj.status) {
        this.listSeatOrder.push(obj.seat);
      } else {
        if (this.listSeatOrder.length > 0) {
          this.listSeatOrder.forEach(seat => {
            if (seat.SoGhe === obj.seat.SoGhe) {
              //let stt = this.listSeatOrder.indexOf(seat.SoGhe);
              let stt = this.listSeatOrder.findIndex(item => {
                return (item.SoGhe === obj.seat.SoGhe);
              });
              if (stt !== -1) {
                this.listSeatOrder.splice(stt, 1);
              }
            }
          });
        }
      }
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
    }
  }
}
</script>

<style>

</style>