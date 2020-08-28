<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Chuyến Đi</h1>
      <DataTable  
        @eventChangeNumberStatus="eventChangeNumberStatus($event)"
        :arrayData="trips"  
        :columns="columns" 
        :keys="keys" 
        :name="'trips'" 
        :name2="'Trip'"
        :addandedit="'addandedit'"
        :loading="loading" />
      
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";

export default {
  data () {
    return {
      columns : ["Tuyến Đường","Nhà Xe", "Loại Xe", "Xuất Phát", "Kết Thúc","Giá","Trạng Thái", "Thời Gian Tạo"],
      keys : ["routeName", "garageName", "vehicleName", "startTime", "endTime", "price","statusNumber","createdAt"]
    }
  },
  components: {
    DataTable,
  },
  created() {
      this.$store.dispatch("fetchListTrips");
  },
  computed: {
      trips() { 
      return this.$store.state.trip.data;
    },
    loading() {
      return this.$store.state.trip.loading;
    }
  },

  methods : {
    eventChangeNumberStatus (data) {
      this.$store.dispatch("fetchStatusNuberTrip", data.id)
    }
  }
};
</script>

<style scoped>

</style>