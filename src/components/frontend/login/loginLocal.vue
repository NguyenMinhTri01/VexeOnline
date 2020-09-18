<template>
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
      <input type="password" @blur="$v.password.$touch()" v-model="password" placeholder="Password" />
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
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: "",
      statusModal: "none",
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
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    handleLogin() {
      const fromData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", fromData);
    },
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    },
    user() {
      return this.$store.state.auth.infoUser;
    },
    token() {
      return this.$store.state.auth.token;
    },
  },
  watch: {
    token(value) {
      if (value) {
        this.$toast.success("Đăng nhập thành công");
      }
    },
  },
};
</script>

<style>
</style>