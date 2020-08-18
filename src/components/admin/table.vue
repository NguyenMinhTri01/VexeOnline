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
            <tr v-for="(item, index) in data" :key="item._id">
              <td>{{index + 1}}</td>
              <td v-for="(key , index) in keys" :key="index">
                <template v-if="key === 'status'">
                  <button class="badge badge-primary" v-if="item[key]">Ẩn</button>
                  <button class="badge badge-secondary" v-else>Hiện</button>
                </template>
                <template v-else-if="key === 'hot'">
                  <button class="badge badge-danger" v-if="item[key]">Ẩn</button>
                  <button class="badge badge-secondary" v-else>Hiện</button>
                </template>
                <template v-else-if="key === 'avatar'">
                  <img class="imageTable" v-bind:src="`${item[key]}`" alt="avatar" />
                </template>
                <template v-else>{{item[key]}}</template>
              </td>
              <td>
                <button class="btn btn-danger">
                  <i class="fas fa-trash-alt"></i>Xóa
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
export default {
  props: ["columns", "data", "keys"],
};
</script>

<style scoped>
.imageTable {
}
@import url("../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>