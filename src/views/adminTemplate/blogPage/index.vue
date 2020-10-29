<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản Lý Bài Viết</h1>
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
        nameStore : 'blog',
        columns: ["Tên Bài Viết","Ảnh", "Nổi Bật", "Trạng Thái", "Thời Gian Tạo"],
        keys: ["name","avatar", "hot", "status", "createdAt"],
        buttonAdd : true,
        basePath : "/admin/blogs",
        namePagination : 'fetchListPaginationBlogs'
      },
      flag : false,      
    };
  },
  components: {
    DataTable,
    DeleteComfirm
  },
  created() {
    this.$store.dispatch("fetchListPaginationBlogs");
    this.$store.dispatch("fetchCountBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blog.data;
    },
  },
  watch : {
    blogs (value) {
      if (value && this.flag) this.$toast.success('Thành công', {
        position : 'bottom-right',
        duration : 1000
      })
    }
  },
  methods: {
    handleEventChangeStatus(id) {
      this.flag = true;
      this.$store.dispatch("fetchStatusBlog", id);
    },
    handleEventChangeHot(id) {
      this.flag = true;
      this.$store.dispatch("fetchHotBlog", id);
    },
    handleEventRemoveItem(id) {
      this.flag = true;
      this.idOfItem = id
    },
    handleEventConfirmDelete() {
      this.$store.dispatch("fetchDeleteBlog", this.idOfItem)
    }
  }
};
</script>

<style scoped>

</style>