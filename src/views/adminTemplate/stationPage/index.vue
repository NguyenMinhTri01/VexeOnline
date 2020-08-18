<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Bến Xe</h1>
      <DataTable :data="stations"  :columns="columns" :keys="keys"  />
    </div>
</template>

<script>
import DataTable from "../../../components/admin/table"
export default {
  data () {
    return {
      columns : ["Tên","ảnh", "Địa Chỉ", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
      keys : ["name", "avatar", "address", "hot", "status", "createdAt"]
    }
  },
  components: {
    DataTable
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListStations");
  },
  computed: {
    stations() {
      return this.$store.state.stations.data;
    },
    loading() {
      return this.$store.state.stations.loading;
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>