<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Bến Xe</h1>
      <DataTable 
        @eventChangeStatus="eventChangeStatus($event)" 
        @eventChangeHot="eventChangeHot($event)"  
        :arrayData="stations"  
        :columns="columns" 
        :keys="keys" 
        :name="'stations'" 
        :name2="'Station'"
        :addandedit="'addandedit'"
        :loading="loading" />
      
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";
// import Loader from "../../../components/loader"

export default {
  data () {
    return {
      columns : ["Tên","Ảnh", "Địa Chỉ", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
      keys : ["name", "avatar", "address", "hot", "status", "createdAt"]
    }
  },
  components: {
    DataTable,
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
  },

  methods : {
    eventChangeStatus (data) {
      this.$store.dispatch("fetchStatusStation", data.id)
    },

    eventChangeHot (data) {
      this.$store.dispatch("fetchHotStation", data.id)
    }
  }
};
</script>

<style scoped>

</style>