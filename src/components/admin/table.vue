<template>
  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
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
            <tr v-for="(item, index) in arrayData" :key="item._id">
              <td>{{index + 1}}</td>
              <td v-for="(key , index) in keys" :key="index">
                <template v-if="key === 'status'">
                  <button @click="changeStatus(item._id)" class="badge badge-info" v-if="item[key]==false">Ẩn</button>
                  <button @click="changeStatus(item._id)" class="badge badge-primary" v-else> Hiện</button>
                </template>
                <template v-else-if="key === 'hot'">
                  <button @click="changeHot(item._id)" class="badge badge-info" v-if="item[key]==false">Ẩn</button>
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
              <td>
                <button class="btn btn-warning">
                  <i class="fas fa-edit">Sửa</i>
                </button>&nbsp;
                <button class="btn btn-danger">
                  <i class="fas fa-trash-alt">Xóa</i>
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
//import moment from "moment";
export default {
  data () {
    return {
      data : null
    }
  },
  props: ["columns", "arrayData", "keys","name"],
  // watch: {
  //   arrayData: function () {
  //     moment.locale("vi");
  //     this.data = this.arrayData.map((item) => {
  //       item.createdAt = moment(item.createdAt).format("LLLL");
  //       return item;
  //     });
  //   },
  // },
  methods:{
    changeStatus(id){
      this.$store.dispatch("fetchStatusBlog",id);
    },
    changeHot(id){
      this.$store.dispatch("fetchHotBlog",id);
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