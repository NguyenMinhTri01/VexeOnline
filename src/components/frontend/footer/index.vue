<template>
<div class="footer">
<!--- footer-top ---->
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <ListBlogs />
      
        <ListVehicles />
        <div class="clearfix"></div>
        <ListStations />  
        <div class="clearfix"></div>
        <ListGarages />
        <div class="clearfix"></div>
        <ListPageStatics />
        <ListOthers />
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
<!--- /footer-top ---->
  <CopyRight />
</div>
</template>

<script>
import ListBlogs from "./listBlogs";
// import ListRoutes from "./listRoutes";
import ListVehicles from "./listVehicles";
import ListStations from "./listStations";
import ListGarages from "./listGarages";
import ListPageStatics from "./listPageStatics";
import ListOthers from "./listOthers";
import CopyRight from "./copyRight"
export default {
  components : {
    ListBlogs,
    // ListRoutes,
    ListVehicles,
    ListStations,
    ListGarages,
    ListPageStatics,
    ListOthers,
    CopyRight
  }
};
</script>

<style>
</style>