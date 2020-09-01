<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Tuyến Đường</h1>
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
  data() {
    return {
      idOfItem : '',
      configTable : {
        nameStore : 'routes',
        columns: ["Tên Tuyến Đường","Xuất Phát","Kết Thúc","Thời lượng tuyến đường (Giờ)","Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
        keys: ["name","fromStationName","toStationName", "time","hot", "status", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/routes"
      },
      flag : false      
    };
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
    this.$store.dispatch("fetchListRoutes");
  },
  computed: {
    routes() {
      return this.$store.state.routes.data;
    }
  },
  watch : {
    routes (value ) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
    }
  },

  methods: {
    handleEventChangeStatus (id) {
      this.flag = true
      this.$store.dispatch("fetchStatusRoute", id)
    },
    handleEventChangeHot (id) {
      this.flag = true
      this.$store.dispatch("fetchHotRoute", id);
    },
    handleEventRemoveItem (id) {
      this.flag = true
      this.idOfItem = id
    },
    handleEventConfirmDelete () {
      this.$store.dispatch("fetchDeleteRoute", this.idOfItem)
    }
  }
};
</script>

<style scoped>

</style>