<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>
    <div v-else class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <div class="alert alert-danger" v-if="err">{{err.response.data.message}}</div>
                    <form @submit.prevent="handleLogin" class="user">
                      <div class="form-group">
                        <input
                          v-model="email"
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div class="form-group">
                        <input
                          v-model="password"
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <!-- <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input type="checkbox" class="custom-control-input" id="customCheck" />
                          <label class="custom-control-label" for="customCheck">Remember Me</label>
                        </div>
                      </div> -->
                      <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                      <!-- <a href="index.html" class="btn btn-primary btn-user btn-block">Login</a> -->
                      <!-- <hr />
                      <a href="index.html" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a> -->
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html">Create an Account!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Loader from "../../../components/loader";
export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("setHeader", this.header);
    if (this.$store.state.auth.token) {
      this.$router.replace("/admin/dashboard");
    }
  },
  data() {
    return {
      email: "",
      password: "",
      header: {
        title: "Đăng Nhập Trang Quản Lý VeXe Online"
      },
    };
  },
  methods: {
    handleLogin() {
      const fromData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("loginAdmin", fromData);
    }
  },

  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/admin/vendor/fontawesome-free/css/all.min.css");
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
@import url("../../../assets/admin/css/sb-admin-2.min.css");
</style>