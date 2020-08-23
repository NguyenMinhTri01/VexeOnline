<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Liên Hệ</h1>
    <DataTable
      :arrayData="contacts"
      :columns="columns"
      :keys="keys"
      :name="'contacts'"
      :name2="'Contact'"
      :addandedit="'noaddandedit'"
      :loading="loading"
    />
  </div>
</template>

<script>
import DataTable from "../../../components/admin/table";
export default {
  data() {
    return {
      columns: [
        "Tên Khách Hàng",
        "Email",
        "Số Điện Thoại",
        "Nội Dung",
        "Thời Gian Tạo"
      ],
      keys: ["name", "email", "phone", "content", "createdAt"]
    };
  },
  components: {
    DataTable
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListContacts");
  },
  computed: {
    contacts() {
      return this.$store.state.contact.data;
    },
    loading() {
      return this.$store.state.contact.loading;
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css");
</style>