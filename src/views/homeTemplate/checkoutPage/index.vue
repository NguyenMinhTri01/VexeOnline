<template>
  <div>
      <div class="banner-1">
        <div class="container">
            <h1 class="wow zoomIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Green Wheels - Best in Class for Travel & Hotels</h1>
        </div>
      </div>
      <div class="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-7 blog-left">
                    <div
                    class="comments-list hover14 column animated wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                    >
                    <h3>Địa Chỉ Thanh Toán</h3>
                    <form>
                        <div class="form-group">
                            <label>Họ Tên</label>
                            <input v-model="name" type="name" class="form-control"  aria-describedby="emailHelp" placeholder="Họ tên hành khách">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Địa chỉ email">
                                </div>
                                <div class="col-md-6">
                                    <label for="exampleInputPassword1">Số Điện Thoại</label>
                                    <input v-model="phone" type="number" class="form-control" id="exampleInputPassword1" placeholder="Số điện thọai">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Ghi Chú</label>
                            <textarea v-model="note" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="view">Thanh Toán</button>
                    </form>
                    </div>
                </div>
                <div class="col-md-5">
                    <div
                    class="comments-list hover14 column animated wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                    >
                    <h3>Chuyến đi của bạn</h3>
                    <div class="row">
                        <div class="col-md-6 styleOrder">
                            <span>Nhà Xe</span>
                            <p class="styleOrderDetail">{{data.garageId.name}}</p>
                        </div>
                        <div class="col-md-6 styleOrder">
                            <span>Loại Xe</span>
                            <p class="styleOrderDetail">{{data.vehicleId.name}}</p>
                        </div>
                        <div class="col-md-12 styleOrder">
                            <span>Điểm đón dự kiến</span>
                            <p class="styleOrderDetail">{{data.startTime}}</p>
                            <p class="styleOrderDetail">{{data.routeId.fromStationId.name}}</p>
                        </div>
                        <div class="col-md-12 styleOrder">
                            <span>Điểm trả dự kiến</span>
                            <p class="styleOrderDetail">{{data.endTime}}</p>
                            <p class="styleOrderDetail">{{data.routeId.toStationId.name}}</p>
                        </div>
                    </div>
                    </div>
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
            name:"",
            email:"",
            phone:"",
            note:"",
            data: null
        }
    },
    beforeCreate(){
        this.$store.dispatch("getInfoUser");
        this.$store.dispatch("fetchDetailTrip", localStorage.getItem("tripId"));
    },
    computed:{
        user() {
            return this.$store.state.auth.infoUser;
        },
        trip(){
            return this.$store.state.trip.trip;
        },
        loading(){
            return this.$store.state.trip.loading;
        }
    },
    watch:{
        user(value){
            if(value){
                this.name = value.fullName,
                this.email = value.email,
                this.phone = value.phone
            }
        },
        trip: function(){
            moment.locale("vi");
            this.data = {...this.trip};
            this.data.startTime = moment(this.trip.startTime).format("LLLL");
            this.data.endTime = moment(this.trip.endTime).format("LLLL");
            return this.data
            // this.data = this.trips.map((item)=>{
            // let newOject = {...item}
            // if (item.startTime) {
            //     newOject.startTime = moment(item.startTime).format("LT");
            // }
            // if (item.endTime) {
            //     newOject.endTime = moment(item.endTime).format("LT");
            // }
            // return newOject;
            // })
        }
    }
}
</script>

<style scoped>
    .styleOrder{
        margin-bottom: 10px
    }
    .styleOrderDetail{
        color:#999;
        margin:0px
    }
</style>