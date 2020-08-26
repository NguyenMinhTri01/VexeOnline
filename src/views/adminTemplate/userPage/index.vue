<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Người Dùng</h1>
    <DataTable
      :arrayData="users"
      :columns="columns"
      :keys="keys"
      :name="'users'"
      :name2="'User'"
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
        "Tên Thành Viên",
        "Email",
        "Số Điện Thoại",
        "Thời Gian Tạo"
      ],
      keys: ["fullName", "email", "phone", "createdAt"]
    };
  },
  components: {
    DataTable
    //Loader
  },
  created() {
    this.$store.dispatch("fetchListUsers");
  },
  computed: {
    users() {
      return this.$store.state.user.data;
    },
    loading() {
      return this.$store.state.user.loading;
    }
  }
};
</script>

<style scoped>

</style>