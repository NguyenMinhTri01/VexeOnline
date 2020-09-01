<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Trang Tĩnh</h1>
    <DeleteComfirm @eventConfirmDelete="handleEventConfirmDelete"/>
    <DataTable 
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
        nameStore : 'pageStatic',
        columns: ["Loại Bài Viết", "Thời Gian Tạo"],
        keys: ["name", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/pagestatics"
      },
      flag : false,         
    };
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
    this.$store.dispatch("fetchListPageStatics");
  },
  computed: {
    pagestatics() {
      return this.$store.state.pageStatic.data;
    }
  },
  watch: {
    pagestatics (value) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
    }
  },
  methods : {
    handleEventRemoveItem(id) {
      this.flag = true;
      this.idOfItem = id
    },
    handleEventConfirmDelete() {
      this.$store.dispatch("fetchDeletePageStatic", this.idOfItem)
    }
  }
}
</script>

<style scoped>

</style>