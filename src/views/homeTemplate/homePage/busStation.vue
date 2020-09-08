<template>
  <div v-if="stationsHot.length > 0" class="container">
    <h2 class="mb-3" style="color : #34ad00; font-weight: 700">Bến Xe Khách</h2>
    <div class="row containerStation mb-3">
      <div v-for="station in stationsHot" :key="station._id" class="col-sm-3 mb-2">
        <a href="#">
          <img
            class="img-thumbnail"
            v-lazy="`https://res.cloudinary.com/vexeonline/${station.avatar}`"
            alt="avatar"
            style="width:100%; height : 100%"
          />
          <div class="centered">{{station.name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stationsHot: [],
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
      if (value) {
        if (value.length > 3) {
          this.stationsHot = [...value.slice(0, 4)]
        } else if (value.length > 0 && value.length < 4) {
          this.stationsHot = [...value]
        }
      }
    },
  },
};
</script>

<style scoped>
.containerStation {
  position: relative;
  text-align: center;
}

image {
  border-radius: 3px !important;
}
a .centered {
  color: white;
}

.centered {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  width: 100%;
  z-index: 1;
}
</style>