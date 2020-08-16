<template>
  <div class="container">
    <div v-if=(loading)>
      <Loader  />
    </div>
    <div v-else>
      <h3>Stations</h3>
      <div class="row">
        <StationItem v-for="(station) in stations " :key="station._id" :station="station" />
      </div>
    </div>
  </div>
</template>

<script>
import StationItem from "../../../components/stationItem";
import Loader from "../../../components/loader";
export default {
  components: {
    StationItem,
    Loader,
  },

  created() {
    this.$store.dispatch("fetchListStations");
  },

  computed: {
    stations() {
      return this.$store.state.stations.data;
    },
    loading() {
      return this.$store.state.stations.loading;
    },
  },
};
</script>

<style>
</style>