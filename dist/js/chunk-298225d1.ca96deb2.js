(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-298225d1"],{"00fe":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4 blog-right"},[s("div",{staticClass:"popular animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[s("h3",[t._v("Bài viết nổi bật")]),t._l(t.blogsHot,(function(a,i){return[s("div",{key:"s-"+i,staticClass:"popular-grid"},[s("div",{staticClass:"popular-left"},[s("h4",[t._v(t._s(i+1)+".")])]),s("div",{staticClass:"popular-right"},[s("h4",[s("router-link",{attrs:{to:"/tin-tuc/"+a.slug}},[t._v(t._s(a.name))])],1),s("p",[t._v(" "+t._s(a.description)+" ")])]),s("div",{staticClass:"clearfix"})])]}))],2),s("div",{staticClass:"categories animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[s("h3",[t._v("Tuyến đường")]),s("ul",[t._l(t.routesHot,(function(a,i){return[s("li",{key:"s-"+i},[s("a",{attrs:{href:"single1.html"}},[t._v(t._s(a.name))])])]}))],2)])])},e=[],n={created:function(){this.$store.dispatch("fetchListBlogsHot"),this.$store.dispatch("fetchListRoutesHot")},computed:{blogsHot:function(){return this.$store.state.blog.blogsHot},routesHot:function(){return this.$store.state.routes.data}}},o=n,l=s("2877"),r=Object(l["a"])(o,i,e,!1,null,null,null);a["a"]=r.exports},4136:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t.loading?t._e():s("div",{staticClass:"blog"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 blog-left"},[s("div",{staticClass:"comments-list hover14 column animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[s("h3",[t._v(t._s(t.blog.name))]),s("div",[s("figure",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://res.cloudinary.com/vexeonline/"+t.blog.avatar,expression:"`https://res.cloudinary.com/vexeonline/${blog.avatar}`"}],staticClass:"img-fluid",attrs:{alt:"avatar"}})])]),s("p",{class:{"img-fluid":!0},domProps:{innerHTML:t._s(t.content_blog)}})])]),s("BlogRight"),s("div",{staticClass:"clearfix"})],1)])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner-1"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"wow zoomIn animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"zoomIn"},attrs:{"data-wow-delay":".5s"}},[t._v("Green Wheels - Best in Class for Travel & Hotels")])])])}],n=s("be0f"),o=n["a"],l=s("2877"),r=Object(l["a"])(o,i,e,!1,null,null,null);a["default"]=r.exports},a640:function(t,a,s){"use strict";var i=s("d039");t.exports=function(t,a){var s=[][t];return!!s&&i((function(){s.call(null,a||function(){throw 1},1)}))}},be0f:function(t,a,s){"use strict";(function(t){s("c975");var i=s("00fe");t.jQuery=s("1157");var e=t.jQuery;window.$=e,a["a"]={data:function(){return{content_blog:""}},components:{BlogRight:i["a"]},created:function(){this.$store.dispatch("fetchDetailBlogBySlug",this.$route.params.slug)},updated:function(){this.$store.dispatch("fetchDetailBlogBySlugAgain",this.$route.params.slug)},computed:{blog:function(){return this.$store.state.blog.blog},loading:function(){return this.$store.state.blog.loading}},mounted:function(){function t(){for(var t=document.getElementsByTagName("img"),a=0;a<t["length"];a++){var s=t["".concat(a)].classList.value;-1===s.indexOf("img-fluid")&&t["".concat(a)].classList.add("img-fluid")}}window.onscroll=function(){t()}},watch:{blog:function(t){t&&(this.content_blog=t.content)}}}}).call(this,s("c8ba"))},c975:function(t,a,s){"use strict";var i=s("23e7"),e=s("4d64").indexOf,n=s("a640"),o=s("ae40"),l=[].indexOf,r=!!l&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:r||!c||!u},{indexOf:function(t){return r?l.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-298225d1.ca96deb2.js.map