<template>
  <!-- top-header -->
  <div class="top-header">
    <div class="container">
      <ul class="tp-hd-lft wow fadeInLeft animated" data-wow-delay=".5s">
        <li class="hm">
          <router-link to="/">
            <i class="fa fa-home"></i>
          </router-link>
        </li>
        <li class="prnt">
          <a href="javascript:window.print()">In / SMS Vé</a>
        </li>
      </ul>
      <ul class="tp-hd-rgt wow fadeInRight animated" data-wow-delay=".5s">
        <!-- <li class="tol">Liên Lạc : 0123 456 789</li> -->
        <template v-if="user">
          <li class="sigi">
            <a style="cursor:pointer">Xin chào : {{user.fullName}}</a>
          </li>
          <li class="sigi">
            <a style="cursor:pointer" data-toggle="modal" data-target="#logoutModalFE"> / Đăng Xuất</a>
          </li>
        </template>
        <template v-else>
          <li class="sig">
            <a style="cursor:pointer" data-toggle="modal" data-target="#myModal">Đăng Ký</a>
          </li>
          <li class="sigi">
            <a style="cursor:pointer" data-toggle="modal" data-target="#myModal4">/ Đăng Nhập</a>
          </li>
        </template>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div
      class="modal fade"
      id="logoutModalFE"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bạn có chắc đăng xuất không?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Nhấn "Đăng Xuất" phía dưới để sẵn sàng thoát tiến trình.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Hủy Bỏ</button>
            <button
              class="btn btn-primary"
              type="button"
              data-dismiss="modal"
              @click="handleLogoutFE"
            >Đăng Xuất</button>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  <!--- /top-header ---->
</template>

<script>
//import jwtDecode from "jwt-decode";
export default {
  data() {
    return {
      email: "",
      password: "",
      //user: ''
    };
  },
  created(){
    // if(localStorage.getItem("token")){
    //   const decode = jwtDecode(localStorage.getItem("token"));
    //   this.user = decode.fullName;
    // }
    this.$store.dispatch("getInfoUser");
  },
  computed:{
    user() {
      return this.$store.state.auth.infoUser;
    },
  },
  // updated(){
  //   if(this.$store.state.auth.infoUser){
  //     this.user = this.$store.state.auth.infoUser
  //   }
  // },
  // validations: {
  //   email: {
  //     required,
  //     email
  //   },
  //   password: {
  //     required
  //   }
  // },
  methods: {
    handleLogoutFE() {
      this.$store.dispatch("logout");
      this.$router.replace('/');
      //this.user = null;
    }
  },
  // computed: {
  //   loading() {
  //     return this.$store.state.auth.loading;
  //   },
  //   err() {
  //     return this.$store.state.auth.err;
  //   },
  //   // user(){
  //   //   //return localStorage.getItem("user")
  //   //   return this.$store.state.auth.infoUser;
  //   // }
  // },
  // watch:{
  //   user(value){
  //     if(value){
  //       this.userInfo = value;
  //     }
  //   }
  // }
};
</script>

<style>
</style>