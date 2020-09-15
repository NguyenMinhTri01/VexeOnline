<template>
  <div>
    <!--- banner-1 ---->
    <div class="banner-1">
      <div class="container">
        <h1
          class="wow zoomIn animated animated"
          data-wow-delay=".5s"
          style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
        >Green Wheels - Best in Class for Travel & Hotels</h1>
      </div>
    </div>
    <!--- /banner-1 ---->
    <div v-if="!loading" class="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-3 blog-left">
            <div
              class="comments-list hover14 column animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>{{garageDetail.name}}</h3>

              <div>
                <p>Trụ sở: {{garageDetail.address}}</p>
                <figure>
                  <img
                    class="img-fluid"
                    v-lazy="`https://res.cloudinary.com/vexeonline/${garageDetail.avatar}`"
                    alt="avatar"
                  />
                </figure>
                <!-- <figure>
                  <img
                    class="img-fluid"
                    src="https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/no-image_ljozla"
                    alt="avatar"
                  />
                </figure>-->
              </div>
              <!-- <p :class="{'img-fluid':true}" v-html="content_blog"></p> -->
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="comments-list hover14 column animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Thông tin {{garageDetail.name}}</h3>
              <p v-html="garageDetail.content"></p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      garageDetail: "",
    };
  },
  created() {
    this.$store.dispatch("fetchDetailGarageBySlug", this.$route.params.slug);
  },
  updated() {
    this.$store.dispatch(
      "fetchDetailGarageBySlugAgain",
      this.$route.params.slug
    );
  },
  computed: {
    garage() {
      return this.$store.state.garage.garage;
    },
    loading() {
      return this.$store.state.garage.loading;
    },
  },
  watch: {
    garage(value) {
      if (value) {
        this.garageDetail = value;
      }
    },
  },
};
</script >

<style scoped>
  .blog-left {
    border-right: 1px solid #e5e5e5;

  }
</style>