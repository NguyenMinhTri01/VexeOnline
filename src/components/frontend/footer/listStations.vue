<template>
  <div class="col-md-3 footer-left wow fadeInLeft animated" data-wow-delay=".5s">
    <h3>Bến xe</h3>
    <ul v-if="listStations.length > 0">
      <li v-for="station in listStations" :key="station._id">
        <router-link :to="`/ben-xe/${station.slug}`">{{station.name}}</router-link>
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listStations: [],
    };
  },
  created() {
    this.$store.dispatch("fetchListStationsHot");
  },
  computed: {
    listData() {
      return this.$store.state.stations.stationsHot;
    },
  },
  watch: {
    listData(value) {
      if (value && value.length > 0) {
        this.listStations = [...value];
      }
    },
  },
};
</script>

<style>
</style>