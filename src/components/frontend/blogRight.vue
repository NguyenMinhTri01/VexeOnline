<template>
  <div class="col-md-4 blog-right">
            <div
              class="popular animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Bài viết nổi bật</h3>
              <template v-for="(item,index) in blogsHot">
                <div :key="`s-${index}`" class="popular-grid">
                <div class="popular-left">
                  <h4>{{index + 1}}.</h4>
                </div>
                <div class="popular-right">
                  <h4>
                    <router-link :to="`/tin-tuc/${item.slug}`">{{item.name}}</router-link>
                  </h4>
                  <p>
                    {{item.description}}
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
              </template>
              
            </div>
            
            <div
              class="categories animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Tuyến đường</h3>
              <ul>
                <template v-for="(item,index) in routesHot">
                  <li :key="`s-${index}`">
                    <a href="single1.html">{{item.name}}</a>
                  </li>
                </template>
                
              </ul>
            </div>
            
            
          </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("fetchListBlogsHot");
    this.$store.dispatch("fetchListRoutesHot");
  },
  computed:{
    blogsHot(){
      return this.$store.state.blog.blogsHot;
    },
    routesHot(){
      return this.$store.state.routes.data;
    }
  },
}
</script>

<style>

</style>