<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Chuyến Đi</h1>
      <DeleteComfirm @eventConfirmDelete="handleEventConfirmDelete"/>
      <DataTable 
        @eventChangeStatusNumber="handleEventChangeStatusNumber"
        @eventRemoveItem="handleEventRemoveItem" 
        :config="configTable"
      />
      
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";
import DeleteComfirm from "../../../components/admin/deleteConfirm"
export default {
  data () {
    return {
      idOfItem : '',
      flag : false,
      configTable : {
        nameStore : 'trip',
        columns : ["Tuyến Đường","Nhà Xe", "Loại Xe", "Thời gian xuất Phát", "Thời gian kết Thúc","Giá","Trạng Thái", "Thời Gian Tạo"],
        keys : ["routeName", "garageName", "vehicleName", "startTime", "endTime", "price","statusNumber","createdAt"],
        buttonAdd : true,
        basePath : "/admin/trips",
        namePagination : 'fetchListPaginationTrips'
      }
    }
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
      this.$store.dispatch("fetchListPaginationTrips");
      this.$store.dispatch("fetchCountTrips");
  },
  computed: {
    trips() { 
      return this.$store.state.trip.data;
    }
  },

  
  watch : {
    trips (value) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
      
    }
  },

  methods : {
    handleEventRemoveItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteTrip", this.idOfItem)
    },
    handleEventChangeStatusNumber (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusNumberTrip", id)
    }
  }
};
</script>

<style scoped>

</style>