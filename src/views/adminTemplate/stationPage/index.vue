<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Bến Xe</h1>
      <DeleteComfirm @eventConfirmDelete="handleEventConfirmDelete"/>
      <DataTable 
        @eventChangeStatus="handleEventChangeStatus" 
        @eventChangeHot="handleEventChangeHot" 
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
      configTable : {
        nameStore : 'stations',
        columns : ["Tên","Ảnh", "Địa Chỉ", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
        keys : ["name", "avatar", "address", "hot", "status", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/stations"
      },
      flag : false
    }
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
      this.$store.dispatch("fetchListStations");
  },
  computed: {
    stations() { 
      return this.$store.state.stations.data;
    }
  },
  watch : {
    stations (value ) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
    }
  },

  methods : {
    handleEventChangeStatus (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusStation", id)
    },
    handleEventChangeHot (id) {
      this.flag = true
      this.$store.dispatch("fetchHotStation", id)
    },
    handleEventRemoveItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteStation", this.idOfItem)
    }
  }
};
</script>

<style scoped>

</style>