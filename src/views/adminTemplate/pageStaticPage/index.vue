<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Trang Tĩnh</h1>
    <DataTable
      :arrayData="pagestatics"
      :columns="columns"
      :keys="keys"
      :name="'pagestatics'"
      :name2="'PageStatic'"
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
      columns: ["Loại Bài Viết", "Thời Gian Tạo"],
      keys: ["name", "createdAt"]
    };
  },
  components: {
    DataTable
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListPageStatics");
  },
  computed: {
    pagestatics() {
      return this.$store.state.pageStatic.data;
    },
    loading() {
      return this.$store.state.pageStatic.loading;
    }
  }
}
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>