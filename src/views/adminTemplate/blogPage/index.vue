<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Bài Viết</h1>
      <DataTable :arrayData="blogs"  :columns="columns" :keys="keys" :name="'blogs'"  />
    </div>
</template>

<script>
import DataTable from "../../../components/admin/table"
export default {
  data () {
    return {
      columns : ["Tên bài viết", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
      keys : ["name", "hot", "status", "createdAt"]
    }
  },
  components: {
    DataTable
    //Loader
  },
    created() {
      this.$store.dispatch("fetchListBlogs");
      
  },
  computed: {
      blogs() {
      // let data = this.$store.state.stations.data;
      // data.createdAt =   
      return this.$store.state.blog.data;
    },
    loading() {
      return this.$store.state.blog.loading;
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>