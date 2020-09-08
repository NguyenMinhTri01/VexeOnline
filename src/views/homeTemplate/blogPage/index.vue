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
    <!--- blog ---->
    <div class="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-left">
            <template v-for="(item,index) in blogs">
            <div
              :key="`s-${index}`"
              class="comments-list hover14 column animated wow fadeInUp animated"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
              style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
            >
              <h3>
                <router-link :to="`/blogs/${item.slug}`">{{item.name}}</router-link>
              </h3>
              <div>
                <figure>
                  <router-link :to="`/blogs/${item.slug}`">
                    <img
                      class="img-fluid"
                      v-lazy="`https://res.cloudinary.com/vexeonline/${item.avatar}`"
                      alt="avatar"
                    />
                  </router-link>
                </figure>
              </div>
              <p>
                {{item.description}}
              </p>
              <div class="more">
                <router-link :to="`/blogs/${item.slug}`">More Info...</router-link>
              </div>
            </div>
            </template>
            <nav>
              <ul
                class="pagination paging animated wow fadeInUp animated"
                data-wow-duration="1200ms"
                data-wow-delay="500ms"
                style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
              >
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <BlogRight/>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--- /blog ---->
  </div>
</template>

<script>
import BlogRight from "../../../components/frontend/blogRight"
export default {
  components:{
    BlogRight
  },
  created() {
    this.$store.dispatch("fetchListBlogs");
    this.scrollToTop();
  },
  computed:{
    blogs(){
      return this.$store.state.blog.data;
    }
  },
  methods : {
    scrollToTop() { 
      window.scrollTo(0, 0); 
    } 
  }
};
</script>

<style>
</style>