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
    <!--- single1 ---->
    <!-- blog -->
    <div v-if="!loading" class="blog">
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
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$=$;
import BlogRight from "../../../components/frontend/blogRight"
export default {
  data(){
    return {
      content_blog :""
    }
  },
  components:{
    BlogRight
  },
  created() {
    this.$store.dispatch("fetchDetailBlogBySlug", this.$route.params.slug);
  },
  updated() {
    this.$store.dispatch("fetchDetailBlogBySlugAgain", this.$route.params.slug);
  },
  computed: {
    blog() {
      return this.$store.state.blog.blog;
    },
    loading() {
      return this.$store.state.blog.loading;
    }
  },
  mounted(){
    // window.onload=function(){
    //   var x = document.getElementsByTagName("img");
    //   x.classList.add("img-fluid");
    // }
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
    
    // $(function(){
    //   $('img').addClass("img-fluid")
    // });
  },
  watch:{
    blog(value){
      if(value){
        this.content_blog = value.content
      }
    }
  }
};
</script>

<style>
</style>