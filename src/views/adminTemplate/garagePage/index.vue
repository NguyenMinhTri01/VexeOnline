<template>
  <div  class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Quản Lý Nhà Xe</h1>
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
      flag : false,
      configTable : {
        nameStore : 'garage',
        columns : ["Tên","Ảnh", "Địa Chỉ", "Trạng Thái","Nổi Bật", "Thời Gian Tạo"],
        keys : ["name", "avatar", "address", "status","hot", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/garages",
        namePagination : 'fetchListPaginationGarages'
      }
    }
  },
  components: {
    DataTable,
    DeleteComfirm
  },
    created() {
      this.$store.dispatch("fetchListPaginationGarages");
      this.$store.dispatch("fetchCountGarages");
  },
  computed: {
    garages() {
    return this.$store.state.garage.data;
    }
  },

  watch : {
    garages (value) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
      
    }
  },

  methods : {
    handleEventChangeStatus (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusGarage", id)
    },
    handleEventChangeHot (id){
      this.flag = true;
      this.$store.dispatch("fetchHotGarage",id)
    },
    handleEventRemoveItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteGarage", this.idOfItem)
    }
  }
};
</script>

<style scoped>

</style>