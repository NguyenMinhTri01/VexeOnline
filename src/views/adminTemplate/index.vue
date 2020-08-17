<template class="hold-transition sidebar-mini layout-fixed">
  <div class="wrapper">
    <Header/>
    <SlideBar/>
    <router-view />
    <Footer/>
    <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  </div>
   
</template>

<script>

import Header from '../../components/admin/header';
import SlideBar from '../../components/admin/sidebar';
import Footer from '../../components/admin/footer';
export default {
  components : {
    Header,
    SlideBar,
    Footer
  }
}
</script>

<style>

</style>