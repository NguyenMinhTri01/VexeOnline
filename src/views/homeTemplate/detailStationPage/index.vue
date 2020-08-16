<template>
  <div class="container">
    <div v-if="(loading)">
      <Loader />
    </div>
    <div v-else>
      <p>Name: {{station.name}}</p>
      <p>Address: {{station.address}}</p>
      <p>Province: {{station.province}}</p>
    </div>
  </div>
</template>
<script>
import Loader from "../../../components/loader";
export default {
  components: {
    Loader,
  },
  created() {
    this.$store.dispatch("fetchDetailStation", this.$route.params.id);
  },

  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    station() {
      return this.$store.state.stations.data;
    },
  },
};
</script>

<style>
</style>