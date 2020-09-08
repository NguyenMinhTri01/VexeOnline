<template>
  <div>
      <!--- banner-1 ---->
<div class="banner-1">
	<div class="container">
		<h1 class="wow zoomIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Green Wheels - Best in Class for Travel & Hotels</h1>
	</div>
</div>
<!--- /banner-1 ---->
<!--- terms ---->
<div class="terms">
	<div v-if="!loading" class="container">
		<h3 class="wow fadeInDown animated animated" data-wow-delay=".5s">{{pageStatic.name}}</h3>
		<div class="terms-bottom" v-html="content">
			
		</div>
	</div>
</div>
<!--- /terms ---->
  </div>
</template>

<script>
export default {
	data(){
		return {
			content:""
		}
	},
    created(){
        let path = window.location.pathname;
        path = path.split("/")[1]
        this.$store.dispatch("fetchDetailPageStaticBySlug", path);
	},
	updated(){
        let path = window.location.pathname;
        path = path.split("/")[1]
        this.$store.dispatch("fetchDetailPageStaticBySlugAgain", path);
    },
    computed:{
        pageStatic(){
            return this.$store.state.pageStatic.pagestatic
        },
        loading() {
            return this.$store.state.pageStatic.loading;
        }
	},
	watch:{
    pageStatic(value){
      if(value){
        this.content = value.content
      }
    }
  }
}
</script>

<style>

</style>