<template>
  <div class="col-md-3 footer-left wow fadeInLeft animated" data-wow-delay=".5s">
    <h3>Loai Xe</h3>
    <ul v-if="listVehicles.length > 0">
      <li v-for="vehicle in listVehicles" :key="vehicle._id">
        <router-link to="#">{{vehicle.name}}</router-link>
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listVehicles : []
    }
  },
  created () {
    this.$store.dispatch("fetchListVehicles");
  },
  computed : {
    listData () {
      return this.$store.state.vehicle.data
    }
  },
  watch : {
    listData (value) {
      if(value) this.listVehicles = [...value]
    }
  }
};
</script>

<style>
</style>