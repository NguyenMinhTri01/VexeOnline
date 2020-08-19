<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Bến Xe</h1>
      <DataTable :arrayData="stations"  :columns="columns" :keys="keys" :name="'stations'"  />
    </div>
</template>

<script>
import DataTable from "../../../components/admin/table"
export default {
  data () {
    return {
      columns : ["Tên","Ảnh", "Địa Chỉ", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
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
      // let data = this.$store.state.stations.data;
      // data.createdAt =   
      return this.$store.state.stations.data;
    },
    loading() {
      return this.$store.state.stations.loading;
    }
  }
};
</script>

<style scoped>

</style>