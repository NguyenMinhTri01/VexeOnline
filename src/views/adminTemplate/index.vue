<template >
<body id="page-top">
  <div id="wrapper">
    <SlideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar />
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  <!-- Logout Modal-->
  <div
    class="modal fade"
    id="logoutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <button
            class="btn btn-primary"
            type="button"
            data-dismiss="modal"
            @click="handleLogout"
          >Logout</button>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import Topbar from "../../components/admin/topbar";
import SlideBar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
export default {
  components: {
    Topbar,
    SlideBar,
    Footer,
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logoutAdmin");
    },
  },
  data() {
    return {
      header: {
        title: "Trang Quản Lý VeXe Online"
      },
    };
  },
  created() {
    this.$store.dispatch("tryAutoLoginAdmin");
    this.$store.dispatch("setHeader", this.header);
  },
};
</script>

<style scoped>
@import url("../../assets/admin/vendor/fontawesome-free/css/all.min.css");
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
@import url("../../assets/admin/css/sb-admin-2.min.css");
</style>