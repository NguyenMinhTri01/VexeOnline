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
              <p>{{blog.content}}</p>
            </div>
          </div>
          <div class="col-md-4 blog-right">
            <div
              class="popular animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Most Popular</h3>
              <div class="popular-grid">
                <div class="popular-left">
                  <h4>01.</h4>
                </div>
                <div class="popular-right">
                  <h5>
                    <a href="single1.html">deleniti atque</a>
                  </h5>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis.
                    <span>1 Month Ago...</span>
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="popular-grid">
                <div class="popular-left">
                  <h4>02.</h4>
                </div>
                <div class="popular-right">
                  <h5>
                    <a href="single1.html">sapiente delectus</a>
                  </h5>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis.
                    <span>15 Days Ago...</span>
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="popular-grid">
                <div class="popular-left">
                  <h4>03.</h4>
                </div>
                <div class="popular-right">
                  <h5>
                    <a href="single1.html">rerum hic tenetur</a>
                  </h5>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis.
                    <span>5 Days Ago...</span>
                  </p>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div
              class="subscribe animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Subscribe</h3>
              <p>Subscribe for daily Travels.</p>
              <form>
                <input
                  type="email"
                  value="Email"
                  onfocus="this.value = '';"
                  onblur="if (this.value == '') {this.value = 'Email';}"
                  required
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div
              class="categories animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="single1.html">tenetur a sapiente delectus</a>
                </li>
                <li>
                  <a href="single1.html">Itaque earum rerum hic tenetur</a>
                </li>
                <li>
                  <a href="single1.html">qui dolorem eum fugiat quo</a>
                </li>
                <li>
                  <a href="single1.html">voluptas a asperiores delectus</a>
                </li>
                <li>
                  <a href="single1.html">perferendis doloribus repellat</a>
                </li>
                <li>
                  <a href="single1.html">eligendi optio cumque nihil</a>
                </li>
              </ul>
            </div>
            <div
              class="instagram animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h2>Instagram Posts</h2>
              <div class="instagram-grids">
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/h2.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/h3.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/h4.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/c3.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/c4.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="instagram-grid">
                  <a href="single1.html">
                    <img src="../../../assets/frontend/images/c5.jpg" alt=" " class="img-thumbnail" />
                  </a>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div
              class="tags animated wow fadeInUp"
              data-wow-duration="1200ms"
              data-wow-delay="500ms"
            >
              <h3>Recent Tags</h3>
              <ul>
                <li>
                  <a href="single1.html">Hotels</a>
                </li>
                <li>
                  <a href="single1.html">Travels</a>
                </li>
                <li>
                  <a href="single1.html">Reservations</a>
                </li>
                <li>
                  <a href="single1.html">Booking</a>
                </li>
                <li>
                  <a href="single1.html">Cottage</a>
                </li>
                <li>
                  <a href="single1.html">Services</a>
                </li>
                <li>
                  <a href="single1.html">Hotels</a>
                </li>
                <li>
                  <a href="single1.html">Travels</a>
                </li>
                <li>
                  <a href="single1.html">Reservations</a>
                </li>
                <li>
                  <a href="single1.html">Booking</a>
                </li>
                <li>
                  <a href="single1.html">Services</a>
                </li>
              </ul>
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

  created() {
    this.$store.dispatch("fetchDetailBlogBySlug", this.$route.params.slug);
  },
  computed: {
    blog() {
      return this.$store.state.blog.blog;
    },
    loading() {
      return this.$store.state.blog.loading;
    }
  }
};
</script>

<style>
</style>