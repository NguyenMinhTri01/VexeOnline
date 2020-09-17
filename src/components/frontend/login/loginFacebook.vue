<template>
  <div class="btn-facebook">
    <a @click="handleLoginFacebook" class="fb" href="#">
      <i></i>Facebook
    </a>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    handleLoginFacebook() {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then( result => {
          const infoUser = {
            email : result.user.email,
            fullName : result.user.displayName,
            facebookId : result.user.uid,
            accessToken : result.credential.accessToken
          }
          this.$store.dispatch("loginFacebook", infoUser);
        })
    },
  },
};
</script>

<style>
</style>