<template>
  <div>
    <!--- banner-1 ---->
    <Banner1/>
    <!--- /banner-1 ---->
    <!--- single1 ---->
    <!-- blog -->
    <Loader v-if="loadingPage" />
    <div v-else class="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-left">
            <div
              class="comments-list hover14 column animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>{{blog.name}}</h3>
              <div>
                <figure>
                  <img
                    class="img-fluid"
                    v-lazy="`https://res.cloudinary.com/vexeonline/${blog.avatar}`"
                    alt="avatar"
                  />
                </figure>
              </div>
              <p :class="{'img-fluid':true}" v-html="content_blog"></p>
            </div>
          </div>
          <BlogRight/>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/loaderV2";
import Banner1 from "../../../components/frontend/banner1";
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$=$;
import BlogRight from "../../../components/frontend/blogRight"
export default {
  data(){
    return {
      content_blog :"",
      loadingPage:true,
    }
  },
  components:{
    BlogRight,
    Loader,
    Banner1
  },
  created() {
    this.$store.dispatch("fetchDetailBlogBySlug", this.$route.params.slug);
    //this.$store.dispatch("setHeader", this.header);
    
  },
  // updated() {
  //   this.$store.dispatch("fetchDetailBlogBySlugAgain", this.$route.params.slug);
  // },
  computed: {
    blog() {
      return this.$store.state.blog.blog;
    },
    slugBlog() {
      return this.$route.params.slug;
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
  watch:{
    blog(value){
      if(value){
        this.content_blog = value.content,
        this.loadingPage = false;
        this.header={
          title:  value.name + " - VeXe Online",
          description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
        }
        this.$store.dispatch("setHeader", this.header);
      }
    },
    slugBlog(){
      this.loadingPage = true,
      this.$store.dispatch("fetchDetailBlogBySlug", this.$route.params.slug);
    }
  }
};
</script>

<style>
</style>