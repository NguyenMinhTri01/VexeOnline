(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-231c6da6"],{"60dd":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a._m(0),a.loading?a._e():e("div",{staticClass:"blog"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 blog-left"},[e("div",{staticClass:"comments-list hover14 column animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[e("h3",[a._v(a._s(a.garageDetail.name))]),e("div",[e("p",[a._v("Trụ sở: "+a._s(a.garageDetail.address))]),e("figure",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://res.cloudinary.com/vexeonline/"+a.garageDetail.avatar,expression:"`https://res.cloudinary.com/vexeonline/${garageDetail.avatar}`"}],staticClass:"img-fluid",attrs:{alt:"avatar"}})])])])]),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"comments-list hover14 column animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[e("h3",[a._v("Thông tin "+a._s(a.garageDetail.name))]),e("p",{domProps:{innerHTML:a._s(a.garageDetail.content)}})])]),e("div",{staticClass:"clearfix"})])])])])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"banner-1"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"wow zoomIn animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"zoomIn"},attrs:{"data-wow-delay":".5s"}},[a._v("Green Wheels - Best in Class for Travel & Hotels")])])])}],n={data:function(){return{garageDetail:""}},created:function(){this.$store.dispatch("fetchDetailGarageBySlug",this.$route.params.slug)},updated:function(){this.$store.dispatch("fetchDetailGarageBySlugAgain",this.$route.params.slug)},computed:{garage:function(){return this.$store.state.garage.garage},loading:function(){return this.$store.state.garage.loading}},watch:{garage:function(a){a&&(this.garageDetail=a)}}},r=n,l=(e("6326"),e("2877")),o=Object(l["a"])(r,s,i,!1,null,"23a693bb",null);t["default"]=o.exports},6326:function(a,t,e){"use strict";var s=e("b1e5"),i=e.n(s);i.a},b1e5:function(a,t,e){}}]);
//# sourceMappingURL=chunk-231c6da6.7b8161bd.js.map