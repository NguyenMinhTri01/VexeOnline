<template>
  <!-- DataTales Example -->
  <div class="anonymus">
    <Loader v-if="loading" />
    <div v-else class="card shadow mb-4">
      <div class="card-header py-3">
        <!-- <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6> -->
        <router-link class="btn btn-sm btn-success" :to="`${basePath}/add`" v-if="buttonAdd">
          <i class="fas fa-plus"> Thêm mới</i>
        </router-link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table  class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th style="width: 10px">#</th>
                <th v-for="(column, index) in columns" :key="index">{{column}}</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="item._id">
                <td>{{index + 1}}</td>
                <td v-for="(key , index) in keys" :key="index">
                  <template v-if="key === 'status'">
                    <button v-on:click="changeStatus(item._id)" class="badge badge-secondary" v-if="item[key]==false">Ẩn</button>
                    <button v-on:click="changeStatus(item._id)" class="badge badge-primary" v-else> Hiện</button>
                  </template>
                  <template v-else-if="key === 'hot'">
                    <button @click="changeHot(item._id)" class="badge badge-secondary" v-if="item[key]==false">Ẩn</button>
                    <button @click="changeHot(item._id)" class="badge badge-primary" v-else>Hiện</button>
                  </template>
                  <template v-else-if="key === 'avatar'">
                    <img
                      class="imageTable"
                      v-lazy="`https://res.cloudinary.com/vexeonline/${item[key]}`"
                      alt="avatar"
                    />
                  </template>
                  <template v-else-if="key === 'statusNumber' ">
                    <span class="badge badge-secondary" v-if="item.statusNumber===0" for="">Chưa được đặt</span>
                    <span class="badge badge-primary" v-if="item.statusNumber===1" for="">Đã được đặt</span>
                    <span class="badge badge-info" v-if="item.statusNumber===2" for="">Đang chạy</span>
                    <span class="badge badge-success" v-if="item.statusNumber===3" for="">Đã hoàn thành</span>
                  </template>
                  <template v-else>{{item[key]}}</template>
                </td>
                <td class="text-center">
                  <div class="dropdown">
                    <button class="btn btn-sm btn-custom dropdown-toggle" type="button" data-toggle="dropdown">Tùy Chọn
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li v-if="!item.denyDelete && true" v-on:click="removeItem(item._id)" data-toggle="modal" data-target="#deleteModal" ><span class="m-2 _delete"><i class="fas fa-trash-alt"></i> Xóa</span></li>
                      <li v-if="!item.denyEdit && true"><router-link class="m-2 _edit" :to="`${basePath}/edit/${item._id}`"><i class="fas fa-edit"></i> Sửa</router-link></li>
                      <li v-if="nameStore === 'trip'"><router-link class="m-2 addAgain" :to="`${basePath}/add-again/${item._id}`"><i class="fas fa-plus"></i> Thêm Lại</router-link></li>
                      <li v-if="item.statusNumber === 2" v-on:click="changeStatusNumber(item._id)" ><span class="m-2 updateStatusNumber"><i class="far fa-check-square"></i> Đã hoàn thành</span></li>
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

</template>

<script>
import moment from "moment";
import Loader from "../loader";
export default {
  components: {
    // DeleteConfirm,
    Loader
  },
  data() {
    return {
      data: null,
      columns : this.config.columns,
      keys : this.config.keys,
      nameStore : this.config.nameStore,
      buttonAdd : this.config.buttonAdd,
      basePath : this.config.basePath,
    };
  },
  props: ["config"],
  watch: {
    arrayData: function () {
      moment.locale("vi");
      this.data = this.arrayData.map((item) => {
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
    }
  },
  methods:{
    changeStatus(id){
      this.$emit("eventChangeStatus", id)
    },
    changeHot(id){
      this.$emit("eventChangeHot",id)
    },
    changeNumberStatus(id){
      this.$emit("eventChangeNumberStatus", id)
    },
    removeItem(id){
      this.$emit("eventRemoveItem", id)
    },
    changeStatusNumber (id) {
      this.$emit("eventChangeStatusNumber", id)
    }
  },

  computed : {
    loading () {
      return this.$store.state[`${this.nameStore}`].loading;
    },
    arrayData () {
      return this.$store.state[`${this.nameStore}`].data;
    }
  },
};
</script>

<style scoped>
    .imageTable {
      width: 120px;
      max-width: 120px;
      height: 78px;
      max-height: 78px;
    }
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