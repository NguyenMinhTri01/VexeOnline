<template>
<body>
  <TopHeader />
  <Header />
  <FooterBtm />
  <router-view />
  <Footer />

  <Login />
  <Register />

  <!-- write us -->
  <!-- <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
						</div>
							<section>
								<div class="modal-body modal-spa">
									<div class="writ">
										<h4>HOW CAN WE HELP YOU</h4>
											<ul>
												<li class="na-me">
													<input class="name" type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
												</li>
												<li class="na-me">
													<input class="Email" type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="">
												</li>
												<li class="na-me">
													<input class="number" type="text" value="Mobile Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Mobile Number';}" required="">
												</li>
												<li class="na-me">
													<select id="country" onchange="change_country(this.value)" class="frm-field required sect">
														<option value="null">Select Issue</option> 		
														<option value="null">Booking Issues</option>
														<option value="null">Bus Cancellation</option>
														<option value="null">Refund</option>
														<option value="null">Wallet</option>														
													</select>
												</li>
												<li class="na-me">
													<select id="country" onchange="change_country(this.value)" class="frm-field required sect">
														<option value="null">Select Issue</option> 		
														<option value="null">Booking Issues</option>
														<option value="null">Bus Cancellation</option>
														<option value="null">Refund</option>
														<option value="null">Wallet</option>														
													</select>
												</li>
												<li class="descrip">
													<input class="special" type="text" value="Write Description" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Write Description';}" required="">
												</li>
													<div class="clearfix"></div>
											</ul>
											<div class="sub-bn">
												<form>
													<button class="subbtn">Submit</button>
												</form>
											</div>
									</div>
								</div>
							</section>
					</div>
				</div>
  </div>-->
  <!-- //write us -->
</body>
</template>

<script>
// import "../../assets/frontend/js/jquery-1.12.0.min.js";
// import "../../assets/frontend/js/bootstrap.min.js";
// import "../../assets/frontend/js/wow.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";

import TopHeader from "../../components/frontend/topHeader";
import Header from "../../components/frontend/header";
import FooterBtm from "../../components/frontend/footerBtm";
import Footer from "../../components/frontend/footer";
import Register from "../../components/frontend/register";
import Login from "../../components/frontend/login";

export default {
  components: {
    TopHeader,
    Header,
    FooterBtm,
    Register,
    Login,
    Footer
  },
  data() {
    return {
      header: {
        title: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
        description: "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến  - VeXe Online"
      }
    };
  },
  created() {
    this.$store.dispatch("setHeader", this.header);
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>
<style scoped>
/* @import url("../../../node_modules/bootstrap/dist/css/bootstrap.min.css"); */
@import url("../../assets/frontend/css/style.css");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,600");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300");
@import url("https://fonts.googleapis.com/css?family=Oswald");
@import url("../../assets/frontend/css/font-awesome.min.css");
/* @import url("../../assets/frontend/css/animate.css"); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css");
</style>