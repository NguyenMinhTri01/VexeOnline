<template>
  <nav class="navbar wow navbar-expand-lg navbar-light footer-btm" data-wow-delay=".5s">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Trang chủ
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tin-tuc" class="nav-link">Tin tức</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lien-he" class="nav-link">Liên hệ</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="user" to="/lich-su-dat-ve" class="nav-link">Lịch Sử Đặt Vé</router-link>
            <router-link v-else to="/quan-ly-ve" class="nav-link">Quản Lý Vé</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.infoUser;
    },
  },
};
</script>

<style scoped>
.nav-item .nav-link {
  color: #fff;
}
</style>