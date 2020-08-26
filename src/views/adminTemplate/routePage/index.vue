<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Tuyến Đường</h1>
    <DataTable
      @eventChangeStatus="eventChangeStatus($event)"
      @eventChangeHot="eventChangeHot($event)"
      :arrayData="routes"
      :columns="columns"
      :keys="keys"
      :name="'routes'"
      :name2="'Route'"
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
      columns: ["Tên Tuyến Đường","Xuất Phát","Kết Thúc", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
      keys: ["name","fromStationId","toStationId", "hot", "status", "createdAt"]
    };
  },
  components: {
    DataTable
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListRoutes");
  },
  computed: {
    routes() {
      // let data = this.$store.state.stations.data;
      // data.createdAt =
      return this.$store.state.routes.data;
    },
    loading() {
      return this.$store.state.routes.loading;
    }
  },
  methods: {
    eventChangeStatus(data) {
      this.$store.dispatch("fetchStatusRoute", data.id);
    },
    eventChangeHot(data) {
      this.$store.dispatch("fetchHotRoute", data.id);
    }
  }
};
</script>

<style scoped>

</style>