<template>
  <!-- signin -->
    <div
      class="modal fade"
      id="myModal4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-info">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-spa">
            <div class="login-grids">
              <div class="login">
                <div class="login-left">
                  <ul>
                    <li>
                      <a class="fb" href="#">
                        <i></i>Sign in with Facebook
                      </a>
                    </li>
                    <li>
                      <a class="goog" href="#">
                        <i></i>Sign in with Google
                      </a>
                    </li>
                    <li>
                      <a class="linkin" href="#">
                        <i></i>Sign in with Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="login-right">
                  <form @submit.prevent="handleLogin">
                    <h3>Đăng nhập bằng tài khoản</h3>
                    <p class="alert alert-danger" v-if="err">{{err.response.data.message}}</p>
                    <input
                      type="email"
                      v-model="email"
                      @blur="$v.email.$touch()"
                      placeholder="Enter Email Address..."
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.email.$dirty && !$v.email.required"
                    >Email không được rỗng</p>
                    <p
                      class="alert alert-danger"
                      v-if="$v.email.$dirty && !$v.email.email"
                    >Email không đúng định dạng</p>
                    <input
                      type="password"
                      @blur="$v.password.$touch()"
                      v-model="password"
                      placeholder="Password"
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.password.$dirty && !$v.password.required"
                    >Password không được rỗng</p>
                    <h4>
                      <a href="#">Forgot password</a>
                    </h4>
                    <div class="single-bottom">
                      <input type="checkbox" id="brand" value />
                      <label for="brand">
                        <span></span>Remember Me.
                      </label>
                    </div>
                    <input type="submit" value="Đăng nhập" />
                  </form>
                </div>
                <div class="clearfix"></div>
              </div>
              <p>
                By logging in you agree to our
                <a href="terms.html">Terms and Conditions</a> and
                <a href="privacy.html">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //signin -->
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
//   created() {
//     if (this.$store.state.auth.token) {
//       this.$router.replace("/");
//     }
//   },
  
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    handleLogin() {
      const fromData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", fromData);
    }
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    },
    token(){
      return this.$store.state.auth.token;
    },
  },
  watch:{
    token(value){
      if(value){
        this.$toast.success('Đăng nhập thành công');
      }
    }
  }
  
};
</script>

<style>
</style>