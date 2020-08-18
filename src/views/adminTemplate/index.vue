<template >
<body id="page-top">
<div id="wrapper">
    <SlideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <router-view/>
      </div>
      <Footer/>
    </div>
  </div>
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</body>
  
  
</template>

<script>
import "../../assets/admin/vendor/jquery/jquery.min.js";
import "../../assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../../assets/admin/vendor/jquery-easing/jquery.easing.min.js";
//import "../../assets/admin/js/sb-admin-2.min.js";
//import "../../assets/admin/vendor/chart.js/Chart.min.js";
//import "../../assets/admin/js/demo/chart-area-demo.js";
//import "../../assets/admin/js/demo/chart-pie-demo.js";
  
import Topbar from '../../components/admin/topbar';
import SlideBar from '../../components/admin/sidebar';
import Footer from '../../components/admin/footer';
export default {
  components : {
    Topbar,
    SlideBar,
    Footer
  }
}
</script>

<style scoped>
  @import url("../../assets/admin/vendor/fontawesome-free/css/all.min.css");
  @import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
  @import url("../../assets/admin/css/sb-admin-2.min.css");
</style>