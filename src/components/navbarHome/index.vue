<template>
  <nav class="container navbar navbar-expand-md navbar-default">
    <div class="row">
      <!-- Brand -->
      <div class="col-md-2 col-10 mx-auto">
        <a class="navbar-brand" href="#">LOGO</a>
      </div>
      <!-- Toggler/collapsibe Button -->
      <div class="btnhiden col-2">
        <i class="fas fa-bars"></i>
      </div>
      <!-- Navbar links -->
      <div class="col-md-8 col-12 mx-auto" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link active-class="active" exact class="nav-link" to="/">Trang Chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/about">Thông Tin</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/stations">Bến Xe</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped >
.nav-item a {
  color: black;
}

.nav-item a:hover {
  color: red !important;
  background: rgb(212, 211, 211);
}

.active {
  background-color: white;
  color: red !important;
}
.row {
  width: 100%;
}
.btnhiden {
  display: none;
}

@media only screen and (max-width: 576px) {
  #collapsibleNavbar {
    display: none
  }
  .btnhiden {
    display: block;
  }
}
</style>