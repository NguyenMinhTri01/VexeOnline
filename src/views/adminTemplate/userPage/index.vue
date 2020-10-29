<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Người Dùng</h1>
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
        nameStore : 'user',
        columns: ["Tên Thành Viên","Email","Số Điện Thoại","Thời Gian Tạo"],
        keys: ["fullName", "email", "phone", "createdAt"],
        buttonAdd : false,
        basePath : "/admin/users",
        namePagination : 'fetchListPaginationUsers'
      },
      flag : false,        
    };
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
    this.$store.dispatch("fetchListPaginationUsers");
    this.$store.dispatch("fetchCountUsers");
  },
  computed: {
    users() {
      return this.$store.state.user.data;
    }
  },

  watch : {
    users (value) {
      if (value && this.flag) return this.$toast.success('Thành công', {
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
      this.$store.dispatch("fetchDeleteUser", this.idOfItem)
    }
  }

};
</script>

<style scoped>

</style>