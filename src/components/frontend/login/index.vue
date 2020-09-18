<template>
  <!-- signin -->
  <div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-info">
        <div class="modal-header">
          <button
            ref="btnClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
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
              <!-- -->
              <LoginLocal />
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
import LoginLocal from "./loginLocal";
import LoginFacebook from "./loginFacebook";
import LoginGoogle from "./loginGoogle";
export default {
  components: {
    LoginLocal,
    LoginFacebook,
    LoginGoogle,
  },
  computed: {
    user() {
      return this.$store.state.auth.infoUser;
    },
  },
  watch: {
    user(value) {
      if (value && value._id){
        const btnCloseModal = this.$refs.btnClose
        btnCloseModal.click()
      }
    },
  },
};
</script>

<style>
</style>