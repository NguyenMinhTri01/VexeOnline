<template>
  <div class="col-md-3 footer-left wow fadeInLeft animated" data-wow-delay=".5s">
    <h3>Nhà xe</h3>
    <ul v-if="listGarages.length > 0">
      <li v-for="garage in listGarages" :key="garage._id" class="styleGarage">
        <router-link :to="`/nha-xe/${garage.slug}`">{{garage.name}}</router-link>
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listGarages: [],
    };
  },
  created() {
    this.$store.dispatch("fetchListHotGarages");
  },
  computed: {
    listData() {
      return this.$store.state.garage.garageHot;
    },
  },
  watch: {
    listData(value) {
      if (value && value.length > 0){
        this.listGarages = [...value];
      }
    },
  },
};
</script>

<style scoped>
.styleGarage {
  width: 100%;
}
</style>