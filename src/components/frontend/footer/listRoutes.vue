<template>
  <div class="col-md-3 footer-left wow fadeInLeft animated" data-wow-delay=".5s">
    <h3>Tuyến đường</h3>
    <ul v-if="listRoutesHot.length > 0">
      <li v-for="route in listRoutesHot" :key="route._id">
        <router-link to="#">{{route.name}}</router-link>
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listRoutesHot : []
    }
  },
  created () {
    this.$store.dispatch("fetchListRoutesHot");
  },
  computed : {
    listData () {
      return this.$store.state.routes.data
    }
  },
  watch : {
    listData (value ) {
      if (value && value.length > 0){
        this.listRoutesHot = [...value];
      }
      
    }
  }
};
</script>

<style>
</style>