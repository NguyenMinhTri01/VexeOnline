<template>
  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
      <router-link class="btn btn-sm btn-success" :to="`/admin/${name}/add`">
        <i class="fas fa-plus"> Thêm mới</i>
      </router-link>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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

                  <!-- <router-link class="btn btn-info"   v-if="item[key]==false">Detail</router-link> -->

                  <!-- <router-link class="badge badge-info" :to="`/admin/${name}/status/${item._id}`" v-if="item[key]==false">Ẩn</router-link>
                  <router-link class="badge badge-primary" :to="`/admin/${name}/status/${item._id}`" v-else>Hiện</router-link> -->
                </template>
                <template v-else-if="key === 'hot'">
                  <button @click="changeHot(item._id)" class="badge badge-secondary" v-if="item[key]==false">Ẩn</button>
                  <button @click="changeHot(item._id)" class="badge badge-primary" v-else>Hiện</button>
                </template>
                <template v-else-if="key === 'avatar'">
                  <img
                    class="imageTable"
                    v-lazy="`https://res.cloudinary.com/vexeonline/VexeOnlineMedia${item[key]}`"
                    alt="avatar"
                  />
                </template>
                <template v-else>{{item[key]}}</template>
              </td>
              <td class="text-center">
                <router-link class="btn btn-sm btn-warning m-1" :to="`/admin/${name}/edit/${item._id}`">
                  <i class="fas fa-edit"> Sửa</i>
                </router-link>
                <button class="btn btn-sm btn-danger m-1">
                  <i class="fas fa-trash-alt"> Xóa</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;
// import '../../assets/admin/vendor/datatables/jquery.dataTables';
// import '../../assets/admin/vendor/datatables/dataTables.bootstrap4.js';
export default {
  data() {
    return {
      data: null,
    };
  },
  props: ["columns", "arrayData", "keys","name"],
  watch: {
    arrayData: function () {
      moment.locale("vi");
      this.data = this.arrayData.map((item) => {
        let newOject = {...item}
        newOject.createdAt = moment(item.createdAt).format("LLLL");
        if (item.startTime) {
          item.startTime = moment(item.startTime).format("LLLL");
        }
        if (item.endTime) {
          item.endTime = moment(item.endTime).format("LLLL");
        }
        return newOject;
      });
    },
  },

  mounted() {
    // $(document).ready(function () {
    //   $('#dataTable').DataTable();
    // });
  },
  methods:{
    changeStatus(id){
      this.$emit("eventChangeStatus", {id})
    },
    changeHot(id){
      this.$emit("eventChangeHot",{id})
    }
  }
};
</script>

<style scoped>
.imageTable {
  max-width: 120px;
  height: auto;
}
.table-responsive > table > tbody > tr > td {
  vertical-align: middle;
}
@import url("../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>