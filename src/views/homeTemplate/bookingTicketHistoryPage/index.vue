<template>
  <div class="container">
    <div v-if="loading" class="notication">
        <Loader  />
    </div>
    <div v-else class="row">
        <div class="col-sm-12" style="margin: 20px 0 0 0;">
            <h5 class="text-ticket mb-3">Thông tin khách hàng</h5>
            <p><strong>Tên:</strong> {{data[0].customerName}}</p>
            <p><strong>Email:</strong> {{data[0].email}}</p>
            <p><strong>Số điện thoại:</strong> {{data[0].phone}}</p>
            <hr>
        </div>
        <div class="col-sm-12">
            <h5 class="text-ticket mb-3">Danh sách vé</h5>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã vé</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thời gian đặt</th>
                    <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in data" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.code}}</td>
                        <td>{{item.totalPrice}}</td>
                        <template v-if="item.statusTicket==0">
                            <td class="text-warning">Chưa Thanh Toán</td>
                        </template>
                        <template v-else-if="item.statusTicket==1">
                            <td class="text-success">Đã Thanh Toán</td>
                        </template>
                        <template v-else-if="item.statusTicket==2">
                            <td class="text-secondary">Đã Hủy</td>
                        </template>
                        <td>{{item.createdAt}}</td>
                        <td><button @click="viewDetailTicket(item._id)" type="button" class="btn btn-success"><i class="fa fa-eye"></i> Xem chi tiết</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/loaderV2";
import moment from "moment";
export default {
    components: {
        Loader
    },
    data(){
        return {
            data:null,
            statusClass : 'text-warning',
            statusText : "Chưa Thanh Toán",
            header: {
              title: "Lịch sử đặt vé - VeXe Online",
              description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
            }
        }
    },
    created(){
        this.$store.dispatch("fetchListHistoryTickets"); 
        this.$store.dispatch("setHeader", this.header);
    },
    computed: {
        loading () {
            return this.$store.state.ticket.loading;
        },
        tickets() { 
            return this.$store.state.ticket.data;
        }
    },
    watch:{
        tickets: function(value){
            if(value && value.length>0){
                moment.locale("vi");
                this.data = this.tickets.map((item) => {
                    let newOject = { ...item };
                    newOject.totalPrice = this.formatNumber(newOject.totalPrice);
                    if (item.createdAt) {
                        newOject.createdAt = `${moment(item.createdAt).format("LT")} ${moment(item.createdAt).format("L")}`
                    }
                    
                    return newOject;
                });
            }
        }
    },
    methods:{
        viewDetailTicket(id){
            //console.log(id)
            localStorage.setItem("ticketId", id);
            this.$router.push('/lich-su-dat-ve/chi-tiet')
        },
        formatNumber(number) {
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(number);
        }, 
    }
}
</script>

<style scoped>
.notication {
  text-align: center;
  margin-top: 3.7em;
}
    .text-ticket {
        color: #3f84b1;
        font-weight: bold;
    }
</style>