<template>
  <!-- DataTales Example -->
  <div class="anonymus">
    <Loader v-if="loading" />
    <div v-else class="card shadow mb-4">
      <div class="card-header py-3">
        <!-- <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6> -->
        <router-link class="btn btn-sm btn-success" :to="`/admin/${name}/add`" v-if="addandedit === 'addandedit'">
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
                  <template v-else>{{item[key]}}</template>
                </td>
                <td class="text-center">
                  <router-link class="btn btn-sm btn-warning m-1" :to="`/admin/${name}/edit/${item._id}`" v-if="addandedit === 'addandedit'">
                    <i class="fas fa-edit"> Sửa</i>
                  </router-link>
                  <button class="btn btn-sm btn-danger m-1" data-toggle="modal" data-target="#logoutModal" @click="id=item._id">
                    <i class="fas fa-trash-alt"> Xóa</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>  
    <DeleteConfirm :id="id" :deleteFetch="deleteFetch" />
  </div>

</template>

<script>
import DeleteConfirm from "./deleteConfirm";
import moment from "moment";
import Loader from "../loader";
export default {
  components: {
    DeleteConfirm,
    Loader
  },
  data() {
    return {
      data: null,
      id: "",
      deleteFetch:this.name2
    };
  },
  props: ["columns", "arrayData", "keys","name","name2","addandedit","loading"],
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

  // mounted() {
  //   $(document).ready(function () {
  //     //console.log(thi)
  //   });
  // },
  methods:{
    changeStatus(id){
      this.$emit("eventChangeStatus", {id})
    },
    changeHot(id){
      this.$emit("eventChangeHot",{id})
    }
  },
  // components: {
  //   Loader
  // },
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

</style>