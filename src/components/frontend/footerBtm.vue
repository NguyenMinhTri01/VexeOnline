<template>

  <nav class="navbar wow  navbar-expand-lg navbar-light footer-btm" data-wow-delay=".5s">
  <div class="container">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Trang chủ <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/blogs" class="nav-link">Tin tức</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">Liên hệ</router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>

</template>

<script>
export default {};
</script>

<style scoped>
  .nav-item .nav-link{
    color: #fff;
  }
</style>