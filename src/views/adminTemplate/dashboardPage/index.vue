<template>
  <div>
    <Loader v-if="loadingTrip && loadingUser && loadingTicket && loadingContact" />
    <div v-else class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Trang quản trị hệ thống</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                  >Tổng số vé đã đặt</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ticketsCount}}
                    <router-link to="/admin/tickets"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-shopping-cart fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Thành viên</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{usersCount}}
                    <router-link to="/admin/users"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Chuyến đi</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{tripsCount}}
                    <router-link to="/admin/trips"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-bus-alt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Liên hệ</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{contactsCount}}
                    <router-link to="/admin/contacts"><small>(Chi tiết)</small></router-link>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-fw fa-address-card fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->

      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-12 col-lg-12">
          
          <div class="card shadow mb-4">
            
      <div class="card-body">
        
        <div class="table-responsive">
          <h6 class="m-0 font-weight-bold text-primary">Danh sách vé mới đặt</h6>
          <br>
          <table  class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            
            <thead>
              <tr>
                <th style="width: 10px">#</th>
                <th>Thông Tin</th>
                <th>Tổng Tiền</th>
                <th>Tài Khoản</th>
                <th>Trạng Thái</th>
                <th>Thời gian Tạo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="item._id">
                <td>{{index + 1}}</td>
                <td>
                  <ul class="list-group">
                    <li class="list-group-item">Tên: {{item.customerName}}</li>
                    <li class="list-group-item">Email: {{item.email}}</li>
                    <li class="list-group-item">Số điện thoại: {{item.phone}}</li>
                  </ul>
                </td>
                <td>{{item.totalPrice}}đ</td>
                <td>
                  <template v-if="item.userId">
                      <span class="badge badge-primary">Thành viên</span>
                  </template>
                  <template v-else>
                      <span class="badge badge-secondary">Khách</span>
                  </template>
                </td>
                <td>
                  <template v-if="item.statusTicket===0">
                    <span class="badge badge-secondary" v-if="item.statusTicket===0" for="">Chưa thanh toán</span>
                  </template>
                  <template v-else-if="item.statusTicket===1">
                    <span class="badge badge-primary">Đã thanh toán</span>
                  </template>
                  <template v-else>
                    <span class="badge badge-info">Đã hủy</span>
                  </template>
                </td>
                <td>{{item.createdAt}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>  
        </div>

        <!-- Pie Chart -->
        
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/loader";
import moment from "moment";
export default {
  data(){
    return {
      data:null,
    }
  },
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchCountContacts");
    this.$store.dispatch("fetchCountTickets");
    this.$store.dispatch("fetchCountUsers");
    this.$store.dispatch("fetchCountTrips");
    this.$store.dispatch("fetchListLatestTickets");
  },
  computed: {
    tripsCount() {
      return this.$store.state.trip.count;
    },
    contactsCount() {
      return this.$store.state.contact.count;
    },
    ticketsCount() {
      return this.$store.state.ticket.count;
    },
    usersCount() {
      return this.$store.state.user.count;
    },
    loadingTrip() {
      return this.$store.state.trip.loading;
    },
    loadingTicket() {
      return this.$store.state.ticket.loading;
    },
    loadingUser() {
      return this.$store.state.user.loading;
    },
    loadingContact() {
      return this.$store.state.contact.loading;
    },
    tickets() {
      return this.$store.state.ticket.ticket;
    },
  },
  watch : {
    tickets: function (value) {
      if(value){
        moment.locale("vi");
        this.data = this.tickets.map((item) => {
          let newOject = {...item}
          newOject.createdAt = moment(item.createdAt).format("LLLL");
          if (item.startTime) {
            newOject.startTime = moment(item.startTime).format("LLLL");
          }
          if (item.endTime) {
            newOject.endTime = moment(item.endTime).format("LLLL");
          }
          return newOject;
        });
        if(this.flag){
          this.$toast.success('Thành công', {
            position : 'bottom-right',
            duration : 1000
          }) 
        }
      }
    }
  },
};
</script>

<style scoped>
  .table-responsive > table > tbody > tr > td {
      vertical-align: middle;
    }
</style>