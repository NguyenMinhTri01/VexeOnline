<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Xe</h1>
      <DeleteComfirm @eventConfirmDelete="handleEventConfirmDelete"/>
      <DataTable 
        @eventChangeStatus="handleEventChangeStatus"
        @eventRemoveItem="handleEventRemoveItem" 
        :config="configTable"  
      />
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";
import DeleteComfirm from "../../../components/admin/deleteConfirm"
export default {
  data() {
    return {
      idOfItem : '',
      configTable : {
        nameStore : 'vehicle',
        columns: [ "Tên", "Ảnh", "Số Lượng Ghế", "Trạng Thái", "Các tiện ích", "Thời Gian Tạo"],
        keys: ["name", "avatar", "numberOfSeats", "status","utilities", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/vehicles",
        namePagination : 'fetchListPaginationVehicles'
      },
      flag : false,
    };
  },
  created() {
      this.$store.dispatch("fetchListPaginationVehicles");
      this.$store.dispatch("fetchCountVehicles");
  },
  components: {
    DataTable,
    DeleteComfirm
  },

  computed: {
    vehicles() {
      return this.$store.state.vehicle.data;
    }
  },

  watch : {
    vehicles (value ) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
      
    }
  },


  methods : {
    handleEventChangeStatus (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusVehicle", id)
    },
    handleEventRemoveItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteVehicle", this.idOfItem)
    }
  }  
};
</script>

<style>
</style>