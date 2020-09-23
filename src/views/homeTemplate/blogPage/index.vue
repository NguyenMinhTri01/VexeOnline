<template>
  <div>
    <!--- banner-1 ---->
    <Banner1/>
    <!--- /banner-1 ---->
    <!--- blog ---->
    <Loader v-if="loadingPage" />
    <div v-else class="blog">
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
                  <router-link :to="`/tin-tuc/${item.slug}`">{{item.name}}</router-link>
                </h3>
                <div>
                  <figure>
                    <router-link :to="`/tin-tuc/${item.slug}`">
                      <img
                        class="img-fluid"
                        v-lazy="`https://res.cloudinary.com/vexeonline/${item.avatar}`"
                        alt="avatar"
                      />
                    </router-link>
                  </figure>
                </div>
                <p>{{item.description}}</p>
                <div class="more">
                  <router-link :to="`/tin-tuc/${item.slug}`">More Info...</router-link>
                </div>
              </div>
            </template>
            <br />
            <nav aria-label="Page navigation example">
              <ul
                class="pagination animated wow fadeInUp animated"
                data-wow-duration="1200ms"
                data-wow-delay="500ms"
                style="visibility: visible; animation-duration: 1200ms; animation-delay: 500ms; animation-name: fadeInUp;"
              >
                <li class="page-item">
                  <a v-on:click="previousPage" class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <template v-for="(item,index) in new Array(Math.ceil(this.counts/3))">
                  <li :key="`s-${index}`" class="page-item">
                    <a v-on:click="fetchPage(index+1)" class="page-link">{{index+1}}</a>
                  </li>
                </template>

                <li class="page-item">
                  <a v-on:click="nextPage" class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <BlogRight />
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--- /blog ---->
  </div>
</template>

<script>
import BlogRight from "../../../components/frontend/blogRight";
import Banner1 from "../../../components/frontend/banner1";
import Loader from "../../../components/loaderV2";
export default {
  components: {
    BlogRight,
    Banner1,
    Loader
  },
  created() {
    this.$store.dispatch("fetchListPaginationBlogs", this.page);
    this.$store.dispatch("fetchListCountBlogs");
    this.$store.dispatch("setHeader", this.header);
  },
  computed: {
    blogs() {
      return this.$store.state.blog.data;
    },
    counts() {
      return this.$store.state.blog.count;
    },
  },
  watch:{
    blogs(value){
      if(value){
        this.loadingPage = false;
      }
    }
  },
  data() {
    return {
      page: 1,
      loadingPage:true,
      header: {
        title: "Tin tức - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online"
      }
    };
  },
  methods: {
    nextPage() {
      if (this.page < Math.ceil(this.counts / 3)) this.page += 1;
      this.fetchPage(this.page);
    },
    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchPage(this.page);
      }
    },
    fetchPage(index) {
      this.$store.dispatch("fetchListPaginationBlogs", index);
    },
  },
};
</script>

<style>
</style>