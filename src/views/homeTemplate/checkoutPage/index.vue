<template>
  <div>
      <div class="banner-1">
        <div class="container">
            <h1 class="wow zoomIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Green Wheels - Best in Class for Travel & Hotels</h1>
        </div>
      </div>
      <div v-if="!loading && data" class="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12" v-if="err">
                    <p class="alert alert-danger">{{err.response.data.message}}</p>
                </div>
                <div class="col-md-7 blog-left">
                    <div
                    class="comments-list hover14 column animated wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                    >
                    <h3>Địa Chỉ Thanh Toán</h3>
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label>Họ Tên</label>
                            <input v-model="name" type="name" @blur="$v.name.$touch()" class="form-control"  aria-describedby="emailHelp" placeholder="Họ tên hành khách">
                            <p class="alert alert-danger" v-if="$v.name.$dirty && !$v.name.required">Họ tên không được rỗng</p>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input v-model="email" type="email" @blur="$v.email.$touch()" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Địa chỉ email">
                                    <p class="alert alert-danger" v-if="$v.email.$dirty && !$v.email.required">Email không được rỗng</p>
                                    <p class="alert alert-danger" v-if="$v.email.$dirty && !$v.email.email">Email không đúng định dạng</p>
                                </div>
                                <div class="col-md-6">
                                    <label for="exampleInputPassword1">Số Điện Thoại</label>
                                    <input v-model="phone" type="number" @blur="$v.phone.$touch()" class="form-control" id="exampleInputPassword1" placeholder="Số điện thọai">
                                    <p class="alert alert-danger" v-if="$v.phone.$dirty && !$v.phone.required">Số điện thoại không được rỗng</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Ghi Chú</label>
                            <textarea v-model="note" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button :disabled="$v.$invalid" type="submit" class="view">Hoàn Thành</button>
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
                        <div class="col-md-12 styleOrder">
                            <span>Số ghế : 
                                <span v-for="(seat,index) in seats" :key="index">{{seat}} </span>
                            </span>
                        </div>
                        <div class="col-md-12 styleOrder">
                            <span>Tổng cộng : {{total}}đ</span>
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
import { required, email } from "vuelidate/lib/validators";
export default {
    data(){
        return {
            name:"",
            email:"",
            phone:"",
            note:"",
            data: null,
            listSeatOrder : '',
            total: localStorage.getItem("total"),
        }
    },
    validations:{
        name:{
            required
        },
        email: {
            required,
            email
        },
        phone:{
            required
        }
    },
    beforeCreate(){
        if(localStorage.getItem("tripId")===null){
            this.$router.replace('/');
        }else{
            this.$store.dispatch("fetchDetailTrip", localStorage.getItem("tripId"));
        }
        this.$store.dispatch("getInfoUser");
        if(this.seats===null){
            this.$router.replace('/');
        }
    },
    created(){
        if(localStorage.getItem("tripId")===null){
            this.$router.replace('/');
        }else{
            this.$store.dispatch("fetchDetailTrip", localStorage.getItem("tripId"));
        }
        this.$store.dispatch("getInfoUser");
        if(this.seats===null){
            this.$router.replace('/');
        }
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
        },
        seats(){
            return this.$store.state.ticket.seats;
        },
        ticket() {
            return this.$store.state.ticket.data;
        },
        err() {
            return this.$store.state.ticket.err;
        },
    },
    methods:{
        handleSubmit(){
            const formData = {
                customerName: this.name,
                email: this.email,
                phone: this.phone,
                note: this.note,
                tripId: localStorage.getItem("tripId"),
                seatCodes: this.seats
            }
            this.$store.dispatch("postTicket", formData);
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
            return this.data;
            
        },
        ticket(value){
            if(value){
                this.$toast.success("Đặt vé thành công", {
                    position: "bottom-right",
                    duration: 1000
                });
                this.$router.push('/chuyen-di/dat-ve/hoan-thanh');
                
            }
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