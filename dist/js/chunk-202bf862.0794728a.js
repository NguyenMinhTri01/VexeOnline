(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-202bf862"],{1276:function(t,e,i){"use strict";var a=i("d784"),s=i("44e7"),n=i("825a"),r=i("1d80"),l=i("4840"),c=i("8aa5"),o=i("50c4"),d=i("14c3"),u=i("9263"),h=i("d039"),v=[].push,m=Math.min,p=4294967295,f=!h((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(r(this)),n=void 0===i?p:i>>>0;if(0===n)return[];if(void 0===t)return[a];if(!s(t))return e.call(a,t,n);var l,c,o,d=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=new RegExp(t.source,h+"g");while(l=u.call(f,a)){if(c=f.lastIndex,c>m&&(d.push(a.slice(m,l.index)),l.length>1&&l.index<a.length&&v.apply(d,l.slice(1)),o=l[0].length,m=c,d.length>=n))break;f.lastIndex===l.index&&f.lastIndex++}return m===a.length?!o&&f.test("")||d.push(""):d.push(a.slice(m)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,s,i):a.call(String(s),e,i)},function(t,s){var r=i(a,t,this,s,a!==e);if(r.done)return r.value;var u=n(t),h=String(this),v=l(u,RegExp),g=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"y":"g"),_=new v(f?u:"^(?:"+u.source+")",b),C=void 0===s?p:s>>>0;if(0===C)return[];if(0===h.length)return null===d(_,h)?[h]:[];var $=0,y=0,w=[];while(y<h.length){_.lastIndex=f?y:0;var x,I=d(_,f?h:h.slice(y));if(null===I||(x=m(o(_.lastIndex+(f?0:y)),h.length))===$)y=c(h,y,g);else{if(w.push(h.slice($,y)),w.length===C)return w;for(var P=1;P<=I.length-1;P++)if(w.push(I[P]),w.length===C)return w;y=$=x}}return w.push(h.slice($)),w}]}),!f)},"1d73":function(t,e,i){"use strict";var a=i("cbfe"),s=i.n(a);s.a},4074:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader"})},s=[],n={},r=n,l=(i("1d73"),i("2877")),c=Object(l["a"])(r,a,s,!1,null,null,null);e["a"]=c.exports},"44e7":function(t,e,i){var a=i("861d"),s=i("c6b6"),n=i("b622"),r=n("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"52a9":function(t,e,i){},"7e79":function(t,e,i){"use strict";var a=i("52a9"),s=i.n(a);s.a},cbfe:function(t,e,i){},e66f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("h1",{staticClass:"h4 mb-2 text-gray-800"},[t._v("Cập Nhập Nhà Xe")]),t.loading?i("Loader"):i("form",{attrs:{role:"form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"card shadow mb-4"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"form-group "},[i("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Tên Nhà Xe")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:t.name},on:{blur:function(e){return t.$v.name.$touch()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.$dirty&&!t.$v.name.required?i("p",{staticClass:"alert-danger mt-2"},[t._v("Tên không được để trống !")]):t._e(),!t.$v.name.$dirty||t.$v.name.minLength&&t.$v.name.maxLength?t._e():i("p",{staticClass:"alert-danger mt-2"},[t._v("Độ dài tên phải từ 3 đến 255 ký tự !")])]),i("div",{staticClass:"form-group "},[i("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Địa chỉ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedProvince,expression:"selectedProvince"}],staticClass:"form-control",on:{blur:function(e){return t.$v.selectedProvince.$touch()},change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedProvince=e.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"",value:"0"}},[t._v("Chọn TP/Tỉnh")]),t._l(t.provinces,(function(e,a){return i("option",{key:a,domProps:{value:e.code}},[t._v(t._s(e.name_with_type))])}))],2),t.$v.selectedProvince.$dirty&&!t.$v.selectedProvince.isValid?i("p",{staticClass:"alert-danger mt-2"},[t._v("Bạn chưa chọn TP/Tỉnh!")]):t._e()]),i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDistrict,expression:"selectedDistrict"}],staticClass:"form-control",on:{blur:function(e){return t.$v.selectedDistrict.$touch()},change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDistrict=e.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"",value:"0"}},[t._v("Chọn Quận/Huyện")]),t._l(t.districts,(function(e,a){return i("option",{key:a,domProps:{value:e.code}},[t._v(t._s(e.name_with_type))])}))],2),t.$v.selectedDistrict.$dirty&&!t.$v.selectedDistrict.isValid?i("p",{staticClass:"alert-danger mt-2"},[t._v("Bạn chưa chọn Quận/Huyện!")]):t._e()]),i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedWards,expression:"selectedWards"}],staticClass:"form-control",on:{blur:function(e){return t.$v.selectedWards.$touch()},change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedWards=e.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"",value:"0"}},[t._v("Chọn Phường/Xã")]),t._l(t.wards,(function(e,a){return i("option",{key:a,domProps:{value:e.path_with_type}},[t._v(t._s(e.name_with_type))])}))],2),t.$v.selectedWards.$dirty&&!t.$v.selectedWards.isValid?i("p",{staticClass:"alert-danger mt-2"},[t._v("Bạn chưa chọn Phường/Xã!")]):t._e()]),i("div",{staticClass:"col-sm-12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],staticClass:"form-control mt-2",attrs:{placeholder:"Tên Đường,Khu phố, Ấp, Thôn, Xóm..."},domProps:{value:t.street},on:{blur:function(e){return t.$v.street.$touch()},input:function(e){e.target.composing||(t.street=e.target.value)}}}),t.$v.street.$dirty&&!t.$v.street.required?i("p",{staticClass:"alert-danger mt-2"},[t._v("không được để trống !")]):t._e(),!t.$v.street.$dirty||t.$v.street.minLength&&t.$v.street.maxLength?t._e():i("p",{staticClass:"alert-danger mt-2"},[t._v("Độ dài phải từ 3 đến 255 ký tự !")])])])]),i("div",{staticClass:"form-group "},[i("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Nội dung")]),i("ckeditor",{attrs:{name:"content",editor:t.editor,config:t.editorConfig},on:{blur:function(e){return t.$v.content.$touch()}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t.$v.content.$dirty&&!t.$v.content.required?i("p",{staticClass:"alert-danger mt-2"},[t._v("Nội dung không được để trống !")]):t._e()],1)])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"card shadow mb-4"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"text-center"},[t.urlImage?i("img",{staticClass:"image-preview ",attrs:{src:t.urlImage,alt:"avatar"}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://res.cloudinary.com/vexeonline/"+t.garage.avatar,expression:"`https://res.cloudinary.com/vexeonline/${garage.avatar}`"}],staticClass:"image-preview ",attrs:{alt:"avatar"}})]),i("div",{staticClass:"form-group mt-2"},[i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile"},on:{change:t.previewFile}}),i("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[t._v(t._s(t.fileName))]),t.errImage?i("p",{staticClass:"alert-danger mt-2"},[t._v(t._s(t.errImage))]):t._e()])])])])]),i("div",{staticClass:"col-sm-12 "},[i("div",{staticClass:"card shadow mb-4"},[i("div",{staticClass:"card-footer text-center"},[i("router-link",{staticClass:"btn btn-sm btn-warning btn-icon-split",attrs:{to:"/admin/garages",type:"button"}},[i("span",{staticClass:"icon text-white-50"},[i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("span",{staticClass:"text"},[t._v("Hủy Bỏ")])]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-primary btn-icon-split",attrs:{type:"submit"}},[i("span",{staticClass:"icon text-white-50"},[t.loadingEdit?i("i",{staticClass:"fa fa-spinner fa-spin"}):i("i",{staticClass:"fa fa-save"})]),i("span",{staticClass:"text"},[t._v("Lưu")])])],1)])])])])],1)},s=[],n=(i("99af"),i("7db0"),i("b0c0"),i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),i("b5ae")),r=i("fb3d"),l=i.n(r),c=i("4074"),o={name:"app",components:{Loader:c["a"]},data:function(){return{editor:l.a,editorConfig:{},content:"",provinces:i("6cef"),districts:{},wards:{},selectedProvince:"0",selectedDistrict:"0",selectedWards:"0",street:"",fileName:"Chọn File Ảnh",address:"",name:null,urlImage:null,errImage:null,arrAddress:null,count:0,loadingEdit:!1,file:null}},created:function(){this.$store.dispatch("fetchDetailGarage",this.$route.params.id)},validations:{name:{required:n["required"],minLength:Object(n["minLength"])(3),maxLength:Object(n["maxLength"])(255)},content:{required:n["required"]},selectedProvince:{isValid:Object(n["not"])((function(t){return"0"===t}))},selectedDistrict:{isValid:Object(n["not"])((function(t){return"0"===t}))},selectedWards:{isValid:Object(n["not"])((function(t){return"0"===t}))},street:{required:n["required"],minLength:Object(n["minLength"])(3),maxLength:Object(n["maxLength"])(255)}},watch:{selectedProvince:function(){if("0"!=this.selectedProvince)for(var t in this.districts=i("5ca5")("./".concat(this.selectedProvince,".json")),this.selectedDistrict="0",this.districts)this.districts[t].name_with_type===this.arrAddress[2]&&(this.selectedDistrict="".concat(t));else this.districts={},this.selectedDistrict="0"},selectedDistrict:function(){if("0"!=this.selectedDistrict)for(var t in this.wards=i("20fc")("./".concat(this.selectedDistrict,".json")),this.selectedWards="0",this.wards)this.wards[t].name_with_type===this.arrAddress[1]&&(this.selectedWards=this.wards[t].path_with_type);else this.wards={},this.selectedWards="0"},garage:function(t){if(t){for(var e in this.arrAddress=t.address.split(", "),this.provinces)this.provinces[e].name_with_type===this.arrAddress[3]&&(this.selectedProvince="".concat(e));this.name=t.name,this.street=this.arrAddress[0],this.content=t.content,1===this.count&&(this.loadingEdit=!1,this.$toast.success("Cập nhật nhà xe thành công",{position:"bottom-right"}),this.file=null,this.fileName="Chọn File Ảnh")}}},computed:{loading:function(){return this.$store.state.garage.loading},garage:function(){return this.$store.state.garage.garage}},methods:{handleSubmit:function(){if(!this.$v.$anyDirty||this.$v.$anyError||this.errImage){if(!this.errImage&&this.file){var t=new FormData;t.append("avatar",this.file);var e={id:this.$route.params.id,fileAvatar:t};this.$store.dispatch("uploadAvatarGarage",e),this.count=1,this.loadingEdit=!0}}else{var i={id:this.$route.params.id,name:this.name,address:"".concat(this.street,", ").concat(this.selectedWards),content:this.content};if(this.count=1,this.loadingEdit=!0,this.file){var a=new FormData;a.append("avatar",this.file),this.$store.dispatch("putGarage",{formData:i,fileAvatar:a})}else this.$store.dispatch("putGarage",{formData:i,fileAvatar:null})}},previewFile:function(t){var e=["image/jpeg","image/png","image/gif"],i=t.target.files[0];e.find((function(t){return t===i.type}))?i.size>2097152?(this.errImage="kích thước file ảnh tối đa 2MB!",this.fileName="Chọn File Ảnh",this.urlImage=null):(this.file=i,this.fileName=i.name,this.errImage=null,this.urlImage=URL.createObjectURL(i)):(this.errImage="File ảnh không hợp lệ",this.fileName="Chọn File Ảnh",this.urlImage=null)}}},d=o,u=(i("7e79"),i("2877")),h=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-202bf862.0794728a.js.map