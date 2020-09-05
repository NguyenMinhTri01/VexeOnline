<template>
  <div>
    <!--- banner-1 ---->
    <Banner1 />
    <!--- /banner-1 ---->
    <!--- bus-tp ---->
    <div class="bus-tp" id="myHeader">
      <div class="container">
        <p>Kết Quả: 20 Chuyến</p>
        <h2>Vé xe từ Sài Gòn đi Hà Nội</h2>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--- /bus-tp ---->
    <!--- bus-btm ---->
    <div class="bus-btm">
      <div class="container">
        <ul>
          <li class="trav">
            <a href="#">Tên Chuyến Xe</a>
          </li>
          <li class="dept">
            <a href="#">Giờ Khởi Hành</a>
          </li>
          <li class="arriv">
            <a href="#">Ngày Khởi Hành</a>
          </li>
          <li class="seat">
            <a href="#">Ghế Ngồi</a>
          </li>
          <li class="fare">
            <a href="#">Giá Vé</a>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
    </div>
    <!--- /bus-btm ---->
    <!--- bus-midd ---->
    <div
      class="bus-midd wow zoomIn animated animated"
      data-wow-delay=".5s"
      style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
    >
      <div class="container">
        <!--- ul-first  ---->

        <ul class="first">
          <li class="trav">
            <div class="bus-ic">
              <img src="../../../assets/frontend/images/bus.png" class="img-responsive" alt />
            </div>
            <div class="bus-txt">
              <h4>Bến Xe Miền Đông Đi Bến Xe Mỹ Đình </h4>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="dept">
            <div class="bus-ic1">
              <i class="fa fa-clock-o"></i>
            </div>
            <div class="bus-txt1">
              <h4>08:10 PM</h4>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="arriv">
            <div class="bus-txt2">
              <h4>6:10 AM</h4>
            </div>
          </li>
          <li class="seat">
            <div class="bus-ic3">
              <img src="../../../assets/frontend/images/seat.png" class="img-responsive" alt />
            </div>
            <div class="bus-txt3">
              <h4>19 Chỗ</h4>
              <p>Còn trống 10 chỗ</p>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="fare">
            <div class="bus-txt4">
              <h5>USD 1212</h5>
              <a href="#img1" class="view">View Seats</a>
              <div class="lightbox" id="img1">
                <div class="box">
                  
                </div>

              </div>
            </div>
          </li>
          <div class="clearfix"></div>
        </ul>
        <!--- /ul-first  ---->
      </div>
    </div>
    <!--- /bus-midd ---->
  </div>
</template>

<script>
import Banner1 from "../../../components/frontend/banner1"
export default {
  components : {
    Banner1
  },

  mounted () {
    window.onscroll = function() {addHeaderfix()};
    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;
    function addHeaderfix() {
      if (window.pageYOffset > sticky) {
        header.classList.add("headerFix");
      } else {
        header.classList.remove("headerFix");
      }
    }
  }
};
</script>

<style scoped>

.headerFix {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>