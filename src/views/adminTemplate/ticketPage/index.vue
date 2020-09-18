<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Vé</h1>
      <DeleteComfirm @eventConfirmDelete="handleEventConfirmDelete"/>
      <div class="anonymus">
    <Loader v-if="loading" />
    <div v-else class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table  class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th style="width: 10px">#</th>
                <th>Thông Tin</th>
                <th>Tổng Tiền</th>
                <th>Tài Khoản</th>
                <th>Trạng Thái</th>
                <th>Thời gian Tạo</th>
                <th>Thao tác</th>
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
                <td class="text-center">
                  <div class="dropdown">
                    <button class="btn btn-sm btn-custom dropdown-toggle" type="button" data-toggle="dropdown">Tùy Chọn
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li></li>
                      <li v-on:click="viewDetailTicket(item)" data-toggle="modal" data-target="#viewDetailModal"><span class="m-2 _view"><i class="fas fa-eye"></i> Xem chi tiết vé</span></li>
                      <li v-on:click="removeItem(item._id)" data-toggle="modal" data-target="#deleteModal" ><span class="m-2 _delete"><i class="fas fa-trash-alt"></i> Xóa</span></li>
                      <li v-if="item.statusTicket === 0" v-on:click="changestatusTicket(item._id)" ><span class="m-2 updateStatusNumber"><i class="far fa-check-square"></i> Đã thanh toán</span></li>
                      <li v-if="item.statusTicket === 1" v-on:click="changestatusTicket(item._id)" ><span class="m-2 updateStatusNumber"><i class="far fa-check-square"></i> Đã hủy</span></li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>  
  </div>
      


      <div v-if="detailTicket" class="modal fade" id="viewDetailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Thông tin chi tiết vé</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <h5><b>Thông tin vé</b></h5>
          <p>Mã vé: {{detailTicket.code}}</p>
          <p>Tuyến đường: {{detailTicket.tripId.routeId.name}}</p>
          <p>Nhà xe: {{detailTicket.tripId.garageId.name}}</p>
          <p>Loại xe: {{detailTicket.tripId.vehicleId.name}}</p>
          <p>Mã ghế: <span v-for="(item,index) in detailTicket.seats" :key="index">{{item.code}} </span></p>
          <hr>
          <h5><b>Thông tin giao dịch</b></h5>
          <p>Hình thức: Tại nhà xe</p>
          <p>Trạng thái: Đặt chỗ thành công</p>
          <p>Giá vé: {{detailTicket.seats.length}}x{{detailTicket.tripId.price}}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import moment from "moment";
import DeleteComfirm from "../../../components/admin/deleteConfirm"
export default {
  data () {
    return {
      data:null,
      detailTicket: null,
      idOfItem : '',
      flag : false,
      configTable : {
        nameStore : 'ticket',
        basePath : "/admin/tickets",
        columsInfoTicket : ['Tên',"email","Số Điện Thoại","Nhà Xe","Tuyến Đường","Loại Xe"],
        keysInfoTicket : ["customerName","email","phone","garageName","routeName","vehicleName"]
      }
    }
  },
  components: {
    DeleteComfirm
  },
  created() {
      this.$store.dispatch("fetchListTickets");
  },
  computed: {
    loading () {
      return this.$store.state.ticket.loading;
    },
    tickets() { 
      return this.$store.state.ticket.data;
    }
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

  methods : {
    viewDetailTicket(item){
      this.detailTicket = item
    },
    removeItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteTicket", this.idOfItem)
    },
    changestatusTicket (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusTicket", id)
    }
  }
};
</script>

<style scoped>
  .table-responsive > table > tbody > tr > td {
      vertical-align: middle;
    }

    ul li:hover {
      background: #f8f9fc;
    }

    ul li {
      cursor: pointer !important;
      margin: 5px;
    }

    ._delete {
      color: #e74a3b;
      font-weight: bold;
      font-size: 15px;
    }
      ._view {
        color: #3887e9;
        font-weight: bold;
        font-size: 15px;
      }
    ._edit {
      color : #f6c23e !important;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
    }
    .addAgain {
      color: #169b6b;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
    }

    .updateStatusNumber {
      color: #69f0a1;
      font-weight: bold;
      font-size: 15px;
    }

    .btn-custom {
      background: #4e73df;
      color: white;
      font-weight: bold
    }
</style>