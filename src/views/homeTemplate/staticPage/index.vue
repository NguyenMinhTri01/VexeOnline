<template>
  <div>
    <div v-if=(loadingPage)>
      <Loader  />
    </div>
    <div v-else>
      <!--- banner-1 ---->
    <Banner1/>
    <!--- /banner-1 ---->
    <!--- terms ---->
    <div class="terms">
      <div class="container">
        <h3 class="wow fadeInDown animated animated" data-wow-delay=".5s">{{pageStatic.name}}</h3>
        <div class="terms-bottom" v-html="content"></div>
      </div>
    </div>
    <!--- /terms ---->
    </div>
    
  </div>
</template>

<script>
import Banner1 from "../../../components/frontend/banner1";
import Loader from "../../../components/loaderV2";
export default {
  components:{
    Banner1,
    Loader
  },
  data() {
    return {
      content: "",
      loadingPage:true,
      header: {
        title: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến  - VeXe Online"
      }
    };
  },
  created() {
    let path = window.location.pathname;
    path = path.split("/")[1]
    this.$store.dispatch("fetchDetailPageStaticBySlug", path);
    this.$store.dispatch("setHeader", this.header);
  },
  updated(){
        let path = window.location.pathname;
        path = path.split("/")[1]
        this.$store.dispatch("fetchDetailPageStaticBySlugAgain", path);
        this.$store.dispatch("setHeader", this.header);
    },
  computed: {
    pageStatic() {
      return this.$store.state.pageStatic.pagestatic;
    }
  },
  watch: {
    pageStatic(value) {
      if (value) {
        this.content = value.content;
        this.loadingPage = false;
      }
    },
    
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
</script>

<style>
</style>