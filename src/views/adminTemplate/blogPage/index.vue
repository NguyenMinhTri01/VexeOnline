<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Bài Viết</h1>
    <DataTable
      @eventChangeStatus="eventChangeStatus($event)"
      @eventChangeHot="eventChangeHot($event)"
      :arrayData="blogs"
      :columns="columns"
      :keys="keys"
      :name="'blogs'"
      :name2="'Blog'"
      :addandedit="'addandedit'"
      :loading="loading"
    />
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";
export default {
  data() {
    return {
      columns: ["Tên Bài Viết", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
      keys: ["name", "hot", "status", "createdAt"]
    };
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
  },
  methods: {
    eventChangeStatus(data) {
      this.$store.dispatch("fetchStatusBlog", data.id);
    },
    eventChangeHot(data) {
      this.$store.dispatch("fetchHotBlog", data.id);
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>