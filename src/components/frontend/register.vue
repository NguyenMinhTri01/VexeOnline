<template>
  <!-- signup -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            ref="btnClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section>
          <div class="modal-body modal-spa">
            <div class="login-grids">
              <div class="login">
                <div class="login-left">
                  <ul>
                    <li>
                    <LoginFacebook />
                  </li>
                  <li>
                    <LoginGoogle />
                  </li>
                  </ul>
                </div>
                <div class="login-right">
                  <form @submit.prevent="handleRegister">
                    <h3>Tạo tài khoản của bạn</h3>
                    <p class="alert alert-danger" v-if="err">{{err.response.data.message}}</p>
                    <input
                      type="text"
                      v-model="fullName"
                      @blur="$v.fullName.$touch()"
                      placeholder="Nhập tên đầy đủ của bạn"
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.fullName.$dirty && !$v.fullName.required"
                    >Tên không được rỗng</p>
                    <p
                      v-if="$v.fullName.$dirty && (!$v.fullName.minLength || !$v.fullName.maxLength)"
                      class="alert-danger mt-2"
                    >Độ dài tên phải từ 3 đến 255 ký tự !</p>
                    <input
                      type="email"
                      v-model="email"
                      @blur="$v.email.$touch()"
                      placeholder="Nhập địa chỉ email của bạn"
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
                      v-model="password"
                      @blur="$v.password.$touch()"
                      placeholder="Nhập mật khẩu của bạn"
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.password.$dirty && !$v.password.required"
                    >Mật khẩu không được rỗng</p>
                    <p
                      class="alert alert-danger"
                      v-if="$v.password.$dirty && !$v.password.minLength"
                    >Mật khẩu phải lớn hơn hoặc bằng 6 ký tự</p>
                    <input
                      type="password"
                      v-model="passwordConfirm"
                      @blur="$v.passwordConfirm.$touch()"
                      placeholder="Nhập lại mật khẩu của bạn"
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.passwordConfirm.$dirty && !$v.passwordConfirm.required"
                    >Mật khẩu không được rỗng</p>
                    <p
                      class="alert alert-danger"
                      v-if="$v.passwordConfirm.$dirty && !$v.passwordConfirm.sameAsPassword"
                    >Mật khẩu lại phải trùng với mật khẩu trước</p>
                    <input
                      type="number"
                      v-model="phone"
                      @blur="$v.phone.$touch()"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                    <p
                      class="alert alert-danger"
                      v-if="$v.phone.$dirty && !$v.phone.required"
                    >Số điện thoại không được rỗng</p>
                    <input type="submit" value="Đăng kí" />
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
        </section>
      </div>
    </div>
  </div>
  <!-- //sign -->
</template>

<script>
import LoginFacebook from "./login/loginFacebook";
import LoginGoogle from "./login/loginGoogle";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  components:{
    LoginFacebook,
    LoginGoogle,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      fullName: "",
      phone: "",
    };
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirm: {
      required,
      sameAsPassword: sameAs("password"),
    },
    phone: {
      required,
    },
  },
  methods: {
    handleRegister() {
      const fromData = {
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        fullName: this.fullName,
        phone: this.phone,
      };
      this.$store.dispatch("register", fromData);
    },
  },
  computed: {
    err() {
      return this.$store.state.auth.err;
    },
    user() {
      return this.$store.state.auth.flag;
    },
  },
  watch: {
    user(value) {
      if (value) {
        const btnCloseModal = this.$refs.btnClose;
        btnCloseModal.click();
        this.$toast.success("Đăng kí thành công");
      }
    },
  },
};
</script>

<style>
</style>