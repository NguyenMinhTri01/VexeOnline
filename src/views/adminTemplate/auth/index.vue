<template>
  <div class="container mt-5">
    <template v-if="loading">
      <Loader />
    </template>
    <div v-else class="row">
      <div class="col-sm-6 mx-auto">
        <template v-if="err">
          <div class="alert alert-danger">{{err.response.data.message}}</div>
        </template>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for>Email</label>
            <input type="email" class="form-control" aria-describedby="emailHelpId" v-model="email"/>
            <small id="emailHelpId" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for>Password</label>
            <input type="password" class="form-control" name="password" v-model="password"/>
          </div>
          <button type="submit" class="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/loader"
export default {
  components : {
    Loader,
  },
  data () {
    return {
      email : "",
      password : ""
    }
  },
  methods : {
    handleLogin () {
      const fromData = {
        email : this.email,
        password : this.password
      };
      this.$store.dispatch("login", fromData);
    }
  },

  computed : {
    loading () {
      return this.$store.state.auth.loading
    },
    err() {
      return this.$store.state.auth.err
    }
  }
};
</script>

<style>
</style>