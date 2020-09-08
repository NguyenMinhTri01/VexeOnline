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
            <br/>
            <nav aria-label="Page navigation example">
              <ul class="pagination animated wow fadeInUp animated" data-wow-duration="1200ms"
                data-wow-delay="500ms" style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;">
                <li class="page-item">
                  <a v-on:click="previousPage" class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <template v-for="(item,index) in new Array(Math.ceil(this.counts/3))">
                    <li :key="`s-${index}`" class="page-item"><a v-on:click="fetchPage(index+1)"  class="page-link">{{index+1}}</a></li>
                </template>
                  
                
                <li class="page-item">
                  <a v-on:click="nextPage" class="page-link"  aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
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
    this.$store.dispatch("fetchListBlogs",this.page);
    this.$store.dispatch("fetchListCountBlogs")
  },
  computed:{
    blogs(){
      return this.$store.state.blog.data;
    },
    counts(){
      return this.$store.state.blog.count;
    }
  },

data() {
  return{
        page: 1,
  }
    },
  methods: {
        nextPage() {
          if(this.page<Math.ceil(this.counts/3))
            this.page += 1;
            this.fetchPage(this.page);
        },
        previousPage() {
            if(this.page > 1) {
                this.page -= 1;
                this.fetchPage(this.page);
            }
        },
        fetchPage(index) {
            this.$store.dispatch("fetchListBlogs",index);
        }
    }
};
</script>

<style>
</style>