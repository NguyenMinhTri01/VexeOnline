<template>
  <div class="col-md-6 footer-left wow fadeInRight animated" data-wow-delay=".5s">
    <h3>Tin tức</h3>
    <ul v-if="listBlogs.length > 0">
      <li v-for="blog in listBlogs" :key="blog._id">
        <router-link :to="`/blogs/${blog.slug}`">{{blog.name}}</router-link>
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listBlogs : []
    }
  },
  created () {
    this.$store.dispatch("fetchListBlogsHot");
  },
  watch : {
    listData (value) {
      if (value){
        if (value.length > 0) this.listBlogs = value
      }
    }
  },
  computed : {
    listData () {
      return this.$store.state.blog.blogsHot;
    }
  }
};
</script>

<style>
</style>