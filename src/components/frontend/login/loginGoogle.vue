<template>
  <div class="btn-google">
    <a @click="handleLoginGoogle" class="goog" href="#">
      <i></i>Google
    </a>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  methods : {
    handleLoginGoogle () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then( result => {
          const infoUser = {
            email : result.user.email,
            fullName : result.user.displayName,
            googleId : result.user.uid,
            accessToken : result.credential.accessToken
          }
          this.$store.dispatch("loginGoogle", infoUser);
        })

    }
  }
};
</script>

<style>
</style>