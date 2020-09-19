<template>
      <!--- rupes ---->
    <div class="container">
      <div class="rupes">
        <h2 class="mb-3" style="color : #34ad00; font-weight: 700">Ưu đải Nổi Bật</h2>

        <div id="demo" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/banner-pc_cnw6og"
                alt="Los Angeles"
                width="1100"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://res.cloudinary.com/vexeonline/image/upload/v1600508606/VexeOnlineMedia/imageDefault/rating-and-review_pc_mq0ij6.png"
                alt="Chicago"
                width="1100"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://res.cloudinary.com/vexeonline/image/upload/v1600508689/VexeOnlineMedia/imageDefault/new-bannerpc_ko4bz6.png"
                alt="New York"
                width="1100"
                height="200"
              />
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
    <!--- /rupes ---->
</template>

<script>
export default {

}
</script>

<style scoped>

.carousel-inner img {
  width: 100%;
}

</style>