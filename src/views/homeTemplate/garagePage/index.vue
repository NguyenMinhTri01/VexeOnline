<template>
  <div>
    <div v-if="(loadingPage)">
      <Loader />
    </div>
    <div v-else>
      <!--- banner-1 ---->
      <Banner1 />
      <!--- /banner-1 ---->
      <div class="blog">
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
  </div>
</template>

<script>
import Loader from "../../../components/loaderV2";
import Banner1 from "../../../components/frontend/banner1";
export default {
  components: {
    Loader,
    Banner1,
  },
  data() {
    return {
      garageDetail: "",
      loadingPage: true,
      header: null,
    };
  },
  created() {
    this.$store.dispatch("fetchDetailGarageBySlug", this.$route.params.slug);
    //this.$store.dispatch("setHeader", this.header);
  },
  // updated() {
  //   this.$store.dispatch(
  //     "fetchDetailGarageBySlugAgain",
  //     this.$route.params.slug
  //   );
  // },
  computed: {
    garage() {
      return this.$store.state.garage.garage;
    },
    slugGarage() {
      return this.$route.params.slug;
    },
  },
  watch: {
    garage(value) {
      if (value) {
        this.garageDetail = value;
        this.loadingPage = false;
        this.header = {
          title: this.garageDetail.name + " - VeXe Online",
          description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
        };
        this.$store.dispatch("setHeader", this.header);
      }
    },
    slugGarage() {
      (this.loadingPage = true),
        this.$store.dispatch(
          "fetchDetailGarageBySlug",
          this.$route.params.slug
        );
    },
  },

  mounted() {
    window.onscroll = function () {
      addClassImage();
    };
    function addClassImage() {
      let tagImages = document.getElementsByTagName("img");
      for (let i = 0; i < tagImages["length"]; i++) {
        let classListValue = tagImages[`${i}`].classList.value;
        if (classListValue.indexOf("img-fluid") === -1) {
          tagImages[`${i}`].classList.add("img-fluid");
        }
      }
    }
  },
  mounted(){
window.onscroll = function() {addClassImage ()}
    function addClassImage () {
    let tagImages = document.getElementsByTagName("img");
    for (let i = 0 ; i < tagImages['length'] ; i++) {
      let classListValue = tagImages[`${i}`].classList.value
      if (classListValue.indexOf('img-fluid') === -1){
        tagImages[`${i}`].classList.add('img-fluid')
        }
      }
    }
  },
};
</script >

<style scoped>
.blog-left {
  border-right: 1px solid #e5e5e5;
}
</style>