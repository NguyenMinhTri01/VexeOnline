<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản lý bài viết</h1>

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
                  <th>Tên bài viết</th>
                  <th>Trạng thái</th>
                  <th>Nổi bật</th>
                  <th>Ngày tạo</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(blog) in blogs" :key="blog._id">
                  <td>1</td>
                  <td>{{blog.name}}</td>
                  <td>{{blog.status}}</td>
                  <td>{{blog.hot}}</td>
                  <td>{{blog.createdAt}}</td>
                  <td>Xóa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
//   import "../../../assets/admin/vendor/datatables/jquery.dataTables.min.js";
//   import "../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.js";
//   import "../../../assets/admin/js/demo/datatables-demo.js";
//import Loader from "../../../components/loader";
export default {
  components: {
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.data;
    },
    loading() {
      return this.$store.state.blogs.loading;
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>