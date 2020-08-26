<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Xe</h1>
    <DataTable
      @eventChangeStatus="eventChangeStatus($event)"
      :arrayData="vehicles"
      :columns="columns"
      :keys="keys"
      :name="'vehicles'"
      :name2="'Vehicle'"
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
      columns: [
        "Tên",
        "Ảnh",
        "Số Lượng Ghế",
        "Trạng Thái",
        "Các tiện ích",
        "Thời Gian Tạo",
      ],
      keys: [
        "name",
        "avatar",
        "numberOfSeats",
        "status",
        "utilities",
        "createdAt",
      ],
    };
  },
  created() {
      this.$store.dispatch("fetchListVehicles");
  },
  components: {
    DataTable,
  },

  computed: {
    vehicles() {
      return this.$store.state.vehicle.data;
    },
    loading() {
      return this.$store.state.vehicle.loading;
    },
  },
  methods : {
    eventChangeStatus (data) {
      this.$store.dispatch("fetchStatusVehicle", data.id)
    },
  }  
};
</script>

<style>
</style>