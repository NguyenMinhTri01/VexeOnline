(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9c6aae4"],{"159b":function(t,n,e){var a=e("da84"),i=e("fdbc"),h=e("17c2"),o=e("9112");for(var s in i){var r=a[s],c=r&&r.prototype;if(c&&c.forEach!==h)try{o(c,"forEach",h)}catch(u){c.forEach=h}}},"17c2":function(t,n,e){"use strict";var a=e("b727").forEach,i=e("a640"),h=e("ae40"),o=i("forEach"),s=h("forEach");t.exports=o&&s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"30d3":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner-1"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"wow zoomIn animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"zoomIn"},attrs:{"data-wow-delay":".5s"}},[t._v("VeXe Online - Tốt Nhất Cho Đặt Vé Xe Trực Tuyến")])])])}],h={},o=h,s=e("2877"),r=Object(s["a"])(o,a,i,!1,null,null,null);n["a"]=r.exports},4138:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"lds-ellipsis"},[e("div"),e("div"),e("div"),e("div")])])}],h={},o=h,s=(e("4399"),e("2877")),r=Object(s["a"])(o,a,i,!1,null,null,null);n["a"]=r.exports},4160:function(t,n,e){"use strict";var a=e("23e7"),i=e("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4399:function(t,n,e){"use strict";var a=e("9e91"),i=e.n(a);i.a},"4e8f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Banner1"),t.loadingPage?e("Loader"):e("div",{staticClass:"blog"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 left-colunm"},[e("div",{staticClass:"comments-list hover14 column animated wow fadeInUp",attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[e("h3",[t._v(t._s(t.station.name))]),e("p",[t._v("Trụ sở: "+t._s(t.station.address))]),e("figure",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://res.cloudinary.com/vexeonline/"+t.station.avatar,expression:"`https://res.cloudinary.com/vexeonline/${station.avatar}`"}],staticClass:"img-fluid",attrs:{alt:"avatar"}})])])]),e("div",{staticClass:"col-md-6 right-colunm"},[e("div",{staticClass:"comments-list"},[e("h3",[t._v("Tìm Thêm Chuyến Đi")]),e("div",{staticClass:"search-trip"},[e("form",{staticClass:"form-group",on:{submit:function(n){return n.preventDefault(),t.handleSubmit(n)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formStation,expression:"formStation"}],staticClass:"form-control",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var n="_value"in t?t._value:t.value;return n}));t.formStation=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0",disabled:""}},[t._v("Chọn Điểm Đi")]),t._l(t.provinces,(function(n,a){return e("option",{key:a,domProps:{value:n.name_with_type}},[t._v(t._s(n.name_with_type))])}))],2)]),e("div",{staticClass:"col-md-1 text-center convert",on:{click:t.handleConvertStation}},[e("i",{staticClass:"fa fa-exchange"})]),e("div",{staticClass:"col-md-4 mb-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.toStation,expression:"toStation"}],staticClass:"form-control",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var n="_value"in t?t._value:t.value;return n}));t.toStation=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0",disabled:""}},[t._v("Chọn Điểm Đến")]),t._l(t.provinces,(function(n,a){return e("option",{key:a,domProps:{value:n.name_with_type}},[t._v(t._s(n.name_with_type))])}))],2)]),e("div",{staticClass:"col-md-4 mb-3"},[e("DatePicker",{attrs:{"input-class":"form-control input-date",lang:t.lang,format:t.customFormatter(t.date)},model:{value:t.date,callback:function(n){t.date=n},expression:"date"}})],1),e("div",{staticClass:"col-md-1"}),e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"form-control btn-submit",attrs:{type:"submit"}},[t._v("Tìm Vé Xe")])])])])]),e("h3",[t._v("Các chuyến đi khởi hành từ "+t._s(t.station.name)+" trong hôm nay")]),t.loadingTrip?e("Loader"):e("table",{staticClass:"table table-striped"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Tuyến Đường")]),e("th",{attrs:{scope:"col"}},[t._v("Hãng Xe")]),e("th",{attrs:{scope:"col"}},[t._v("Giá Vé")]),e("th",{attrs:{scope:"col"}},[t._v("Khởi Hành")]),e("th",{attrs:{scope:"col"}})])]),e("tbody",t._l(t.trips,(function(n){return e("tr",{key:n._id},[e("td",{attrs:{scope:"row"}},[t._v(t._s(n.routeId.name))]),e("td",[t._v(t._s(n.garageId.name)+"c")]),e("td",[t._v(t._s(n.price))]),e("td",[t._v(t._s(n.startTime))]),e("td",[e("button",{staticClass:"booking",on:{click:function(e){return t.handelBooking(n._id)}}},[t._v("Đặt Vé")])])])})),0)])],1)])])])])],1)},i=[],h=(e("d81d"),e("5530")),o=(e("411c"),e("de1a"),e("30d3")),s=e("ec45"),r=e("4138"),c=e("c1df"),u=e.n(c),l={components:{Banner1:o["a"],DatePicker:s["default"],Loader:r["a"]},data:function(){return{date:"0",formStation:"0",toStation:"0",loadingPage:!0,loadingTrip:!0,lang:{formatLocale:{firstDayOfWeek:1},monthBeforeYear:!1},provinces:e("6cef"),trips:[]}},methods:{customFormatter:function(t){return u.a.locale("vi"),u()(t).format("L")},handleConvertStation:function(){var t=this.formStation;this.formStation=this.toStation,this.toStation=t},handleSubmit:function(){if(this.date||(this.date=new Date(Date.now())),"0"!=this.formStation&&"0"!=this.toStation){var t={formStation:this.formStation,toStation:this.toStation,date:new Date(this.date)};localStorage.setItem("fromStation",t.formStation),localStorage.setItem("toStation",t.toStation),localStorage.setItem("date",t.date),this.$router.push("/chuyen-di")}},handelBooking:function(t){localStorage.setItem("tripId",t),this.$router.push("/chuyen-di/dat-ve")}},created:function(){this.date=new Date(Date.now()),this.$store.dispatch("fetchDetailStationBySlug",this.$route.params.slug),this.$store.dispatch("fetchListTripsByFromStation",this.$route.params.slug)},computed:{dataTrip:function(){return this.$store.state.trip.data},station:function(){return this.$store.state.stations.station},slugStation:function(){return this.$route.params.slug}},watch:{station:function(t){t&&(this.loadingPage=!1)},dataTrip:function(t){t&&t.length>0?(u.a.locale("vi"),this.trips=t.map((function(t){var n=Object(h["a"])({},t);return t.startTime&&(n.startTime=u()(t.startTime).format("LT")),n})),this.loadingTrip=!1):this.trips=[]},slugStation:function(){this.loadingPage=!0,this.loadingTrip=!0,this.date=new Date(Date.now()),this.$store.dispatch("fetchDetailStationBySlug",this.$route.params.slug),this.$store.dispatch("fetchListTripsByFromStation",this.$route.params.slug)}}},m=l,p=(e("9720"),e("2877")),d=Object(p["a"])(m,a,i,!1,null,"b1a947c4",null);n["default"]=d.exports},5530:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b");function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}},"6cef":function(t){t.exports=JSON.parse('{"10":{"name":"Lào Cai","slug":"lao-cai","type":"tinh","name_with_type":"Tỉnh Lào Cai","code":"10"},"11":{"name":"Điện Biên","slug":"dien-bien","type":"tinh","name_with_type":"Tỉnh Điện Biên","code":"11"},"12":{"name":"Lai Châu","slug":"lai-chau","type":"tinh","name_with_type":"Tỉnh Lai Châu","code":"12"},"14":{"name":"Sơn La","slug":"son-la","type":"tinh","name_with_type":"Tỉnh Sơn La","code":"14"},"15":{"name":"Yên Bái","slug":"yen-bai","type":"tinh","name_with_type":"Tỉnh Yên Bái","code":"15"},"17":{"name":"Hoà Bình","slug":"hoa-binh","type":"tinh","name_with_type":"Tỉnh Hoà Bình","code":"17"},"19":{"name":"Thái Nguyên","slug":"thai-nguyen","type":"tinh","name_with_type":"Tỉnh Thái Nguyên","code":"19"},"20":{"name":"Lạng Sơn","slug":"lang-son","type":"tinh","name_with_type":"Tỉnh Lạng Sơn","code":"20"},"22":{"name":"Quảng Ninh","slug":"quang-ninh","type":"tinh","name_with_type":"Tỉnh Quảng Ninh","code":"22"},"24":{"name":"Bắc Giang","slug":"bac-giang","type":"tinh","name_with_type":"Tỉnh Bắc Giang","code":"24"},"25":{"name":"Phú Thọ","slug":"phu-tho","type":"tinh","name_with_type":"Tỉnh Phú Thọ","code":"25"},"26":{"name":"Vĩnh Phúc","slug":"vinh-phuc","type":"tinh","name_with_type":"Tỉnh Vĩnh Phúc","code":"26"},"27":{"name":"Bắc Ninh","slug":"bac-ninh","type":"tinh","name_with_type":"Tỉnh Bắc Ninh","code":"27"},"30":{"name":"Hải Dương","slug":"hai-duong","type":"tinh","name_with_type":"Tỉnh Hải Dương","code":"30"},"31":{"name":"Hải Phòng","slug":"hai-phong","type":"thanh-pho","name_with_type":"Thành phố Hải Phòng","code":"31"},"33":{"name":"Hưng Yên","slug":"hung-yen","type":"tinh","name_with_type":"Tỉnh Hưng Yên","code":"33"},"34":{"name":"Thái Bình","slug":"thai-binh","type":"tinh","name_with_type":"Tỉnh Thái Bình","code":"34"},"35":{"name":"Hà Nam","slug":"ha-nam","type":"tinh","name_with_type":"Tỉnh Hà Nam","code":"35"},"36":{"name":"Nam Định","slug":"nam-dinh","type":"tinh","name_with_type":"Tỉnh Nam Định","code":"36"},"37":{"name":"Ninh Bình","slug":"ninh-binh","type":"tinh","name_with_type":"Tỉnh Ninh Bình","code":"37"},"38":{"name":"Thanh Hóa","slug":"thanh-hoa","type":"tinh","name_with_type":"Tỉnh Thanh Hóa","code":"38"},"40":{"name":"Nghệ An","slug":"nghe-an","type":"tinh","name_with_type":"Tỉnh Nghệ An","code":"40"},"42":{"name":"Hà Tĩnh","slug":"ha-tinh","type":"tinh","name_with_type":"Tỉnh Hà Tĩnh","code":"42"},"44":{"name":"Quảng Bình","slug":"quang-binh","type":"tinh","name_with_type":"Tỉnh Quảng Bình","code":"44"},"45":{"name":"Quảng Trị","slug":"quang-tri","type":"tinh","name_with_type":"Tỉnh Quảng Trị","code":"45"},"46":{"name":"Thừa Thiên Huế","slug":"thua-thien-hue","type":"tinh","name_with_type":"Tỉnh Thừa Thiên Huế","code":"46"},"48":{"name":"Đà Nẵng","slug":"da-nang","type":"thanh-pho","name_with_type":"Thành phố Đà Nẵng","code":"48"},"49":{"name":"Quảng Nam","slug":"quang-nam","type":"tinh","name_with_type":"Tỉnh Quảng Nam","code":"49"},"51":{"name":"Quảng Ngãi","slug":"quang-ngai","type":"tinh","name_with_type":"Tỉnh Quảng Ngãi","code":"51"},"52":{"name":"Bình Định","slug":"binh-dinh","type":"tinh","name_with_type":"Tỉnh Bình Định","code":"52"},"54":{"name":"Phú Yên","slug":"phu-yen","type":"tinh","name_with_type":"Tỉnh Phú Yên","code":"54"},"56":{"name":"Khánh Hòa","slug":"khanh-hoa","type":"tinh","name_with_type":"Tỉnh Khánh Hòa","code":"56"},"58":{"name":"Ninh Thuận","slug":"ninh-thuan","type":"tinh","name_with_type":"Tỉnh Ninh Thuận","code":"58"},"60":{"name":"Bình Thuận","slug":"binh-thuan","type":"tinh","name_with_type":"Tỉnh Bình Thuận","code":"60"},"62":{"name":"Kon Tum","slug":"kon-tum","type":"tinh","name_with_type":"Tỉnh Kon Tum","code":"62"},"64":{"name":"Gia Lai","slug":"gia-lai","type":"tinh","name_with_type":"Tỉnh Gia Lai","code":"64"},"66":{"name":"Đắk Lắk","slug":"dak-lak","type":"tinh","name_with_type":"Tỉnh Đắk Lắk","code":"66"},"67":{"name":"Đắk Nông","slug":"dak-nong","type":"tinh","name_with_type":"Tỉnh Đắk Nông","code":"67"},"68":{"name":"Lâm Đồng","slug":"lam-dong","type":"tinh","name_with_type":"Tỉnh Lâm Đồng","code":"68"},"70":{"name":"Bình Phước","slug":"binh-phuoc","type":"tinh","name_with_type":"Tỉnh Bình Phước","code":"70"},"72":{"name":"Tây Ninh","slug":"tay-ninh","type":"tinh","name_with_type":"Tỉnh Tây Ninh","code":"72"},"74":{"name":"Bình Dương","slug":"binh-duong","type":"tinh","name_with_type":"Tỉnh Bình Dương","code":"74"},"75":{"name":"Đồng Nai","slug":"dong-nai","type":"tinh","name_with_type":"Tỉnh Đồng Nai","code":"75"},"77":{"name":"Bà Rịa - Vũng Tàu","slug":"ba-ria-vung-tau","type":"tinh","name_with_type":"Tỉnh Bà Rịa - Vũng Tàu","code":"77"},"79":{"name":"Hồ Chí Minh","slug":"ho-chi-minh","type":"thanh-pho","name_with_type":"Thành phố Hồ Chí Minh","code":"79"},"80":{"name":"Long An","slug":"long-an","type":"tinh","name_with_type":"Tỉnh Long An","code":"80"},"82":{"name":"Tiền Giang","slug":"tien-giang","type":"tinh","name_with_type":"Tỉnh Tiền Giang","code":"82"},"83":{"name":"Bến Tre","slug":"ben-tre","type":"tinh","name_with_type":"Tỉnh Bến Tre","code":"83"},"84":{"name":"Trà Vinh","slug":"tra-vinh","type":"tinh","name_with_type":"Tỉnh Trà Vinh","code":"84"},"86":{"name":"Vĩnh Long","slug":"vinh-long","type":"tinh","name_with_type":"Tỉnh Vĩnh Long","code":"86"},"87":{"name":"Đồng Tháp","slug":"dong-thap","type":"tinh","name_with_type":"Tỉnh Đồng Tháp","code":"87"},"89":{"name":"An Giang","slug":"an-giang","type":"tinh","name_with_type":"Tỉnh An Giang","code":"89"},"91":{"name":"Kiên Giang","slug":"kien-giang","type":"tinh","name_with_type":"Tỉnh Kiên Giang","code":"91"},"92":{"name":"Cần Thơ","slug":"can-tho","type":"thanh-pho","name_with_type":"Thành phố Cần Thơ","code":"92"},"93":{"name":"Hậu Giang","slug":"hau-giang","type":"tinh","name_with_type":"Tỉnh Hậu Giang","code":"93"},"94":{"name":"Sóc Trăng","slug":"soc-trang","type":"tinh","name_with_type":"Tỉnh Sóc Trăng","code":"94"},"95":{"name":"Bạc Liêu","slug":"bac-lieu","type":"tinh","name_with_type":"Tỉnh Bạc Liêu","code":"95"},"96":{"name":"Cà Mau","slug":"ca-mau","type":"tinh","name_with_type":"Tỉnh Cà Mau","code":"96"},"04":{"name":"Cao Bằng","slug":"cao-bang","type":"tinh","name_with_type":"Tỉnh Cao Bằng","code":"04"},"02":{"name":"Hà Giang","slug":"ha-giang","type":"tinh","name_with_type":"Tỉnh Hà Giang","code":"02"},"01":{"name":"Hà Nội","slug":"ha-noi","type":"thanh-pho","name_with_type":"Thành phố Hà Nội","code":"01"},"08":{"name":"Tuyên Quang","slug":"tuyen-quang","type":"tinh","name_with_type":"Tỉnh Tuyên Quang","code":"08"},"06":{"name":"Bắc Kạn","slug":"bac-kan","type":"tinh","name_with_type":"Tỉnh Bắc Kạn","code":"06"}}')},7934:function(t,n,e){},9720:function(t,n,e){"use strict";var a=e("7934"),i=e.n(a);i.a},"9e91":function(t,n,e){},a640:function(t,n,e){"use strict";var a=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&a((function(){e.call(null,n||function(){throw 1},1)}))}},b64b:function(t,n,e){var a=e("23e7"),i=e("7b0b"),h=e("df75"),o=e("d039"),s=o((function(){h(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return h(i(t))}})},dbb4:function(t,n,e){var a=e("23e7"),i=e("83ab"),h=e("56ef"),o=e("fc6a"),s=e("06cf"),r=e("8418");a({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var n,e,a=o(t),i=s.f,c=h(a),u={},l=0;while(c.length>l)e=i(a,n=c[l++]),void 0!==e&&r(u,n,e);return u}})},e439:function(t,n,e){var a=e("23e7"),i=e("d039"),h=e("fc6a"),o=e("06cf").f,s=e("83ab"),r=i((function(){o(1)})),c=!s||r;a({target:"Object",stat:!0,forced:c,sham:!s},{getOwnPropertyDescriptor:function(t,n){return o(h(t),n)}})}}]);
//# sourceMappingURL=chunk-f9c6aae4.998d4c96.js.map