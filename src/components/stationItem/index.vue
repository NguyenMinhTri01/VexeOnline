<template>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{station.name}}</h4>
        <router-link class="btn btn-info" :to="`/stations/${station._id}`" >Detail</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props : ["station"]
};
</script>

<style>
</style>