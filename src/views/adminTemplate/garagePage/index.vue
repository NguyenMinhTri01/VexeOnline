<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Nhà Xe</h1>
      <DataTable 
        @eventChangeStatus="eventChangeStatus($event)" 
        :arrayData="garages"  
        :columns="columns" 
        :keys="keys" 
        :name="'garages'" 
        :name2="'Garage'"
        :addandedit="'addandedit'"
        :loading="loading" />
      
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";

export default {
  data () {
    return {
      columns : ["Tên","Ảnh", "Địa Chỉ", "Trạng Thái", "Thời Gian Tạo"],
      keys : ["name", "avatar", "address", "status", "createdAt"]
    }
  },
  components: {
    DataTable,
  },
    created() {
      this.$store.dispatch("fetchListGarages");
  },
  computed: {
      garages() {
      return this.$store.state.garage.data;
    },
    loading() {
      return this.$store.state.garage.loading;
    }
  },

  methods : {
    eventChangeStatus (data) {
      this.$store.dispatch("fetchStatusGarage", data.id)
    }
  }
};
</script>

<style scoped>

</style>