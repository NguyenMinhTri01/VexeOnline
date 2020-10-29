<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Liên Hệ</h1>
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
        nameStore : 'contact',
        columns: [ "Tên Khách Hàng","Email","Số Điện Thoại","Nội Dung","Thời Gian Tạo"],
        keys: ["name", "email", "phone", "content", "createdAt"],
        buttonAdd : false,
        basePath : "/admin/contacts",
        namePagination : 'fetchListPaginationContacts'
      },
      flag : false,        
    };
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
    this.$store.dispatch("fetchListPaginationContacts");
    this.$store.dispatch("fetchCountContacts");
  },
  computed: {
    contacts() {
      return this.$store.state.contact.data;
    }
  },
  watch : {
    contacts(value) {
      if (value && this.flag) return this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
    }
  },
  methods : {
    handleEventRemoveItem(id) {
      this.flag = true;
      this.idOfItem = id;
    },
    handleEventConfirmDelete() {
      this.$store.dispatch("fetchDeleteContact", this.idOfItem)
    }
  }
};
</script>

<style scoped>

</style>