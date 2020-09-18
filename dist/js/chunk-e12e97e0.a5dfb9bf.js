(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e12e97e0"],{"075b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"h4 mb-2 text-gray-800"},[t._v("Thêm Xe")]),a("form",{attrs:{role:"form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Tên loại xe")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:t.name},on:{blur:function(e){return t.$v.name.$touch()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.$dirty&&!t.$v.name.required?a("p",{staticClass:"alert-danger mt-2"},[t._v("Tên không được để trống !")]):t._e(),!t.$v.name.$dirty||t.$v.name.minLength&&t.$v.name.maxLength?t._e():a("p",{staticClass:"alert-danger mt-2"},[t._v("Độ dài tên phải từ 3 đến 255 ký tự !")])]),a("div",{staticClass:"col-sm-4"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Số lượng chỗ ngồi")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.numberOfSeats,expression:"numberOfSeats"}],staticClass:"form-control",attrs:{type:"number",autocomplete:"off"},domProps:{value:t.numberOfSeats},on:{blur:function(e){return t.$v.numberOfSeats.$touch()},input:function(e){e.target.composing||(t.numberOfSeats=e.target.value)}}}),t.$v.numberOfSeats.$dirty&&!t.$v.numberOfSeats.required?a("p",{staticClass:"alert-danger mt-2"},[t._v("Số lượng chỗ ngồi không được để trống !")]):t._e(),t.$v.numberOfSeats.$dirty&&!t.$v.numberOfSeats.between?a("p",{staticClass:"alert-danger mt-2"},[t._v("Số lượng chỗ ngồi phải từ 4 đến 60 chỗ !")]):t._e()])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Các tiện ích trên xe (nếu có)")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.utilities,expression:"utilities"}],staticClass:"form-control",attrs:{name:"utilities",id:"",cols:"10",rows:"3"},domProps:{value:t.utilities},on:{blur:function(e){return t.$v.utilities.$touch()},input:function(e){e.target.composing||(t.utilities=e.target.value)}}}),!t.$v.utilities.$dirty||t.$v.utilities.minLength&&t.$v.utilities.maxLength?t._e():a("p",{staticClass:"alert-danger mt-2"},[t._v("Độ dài văn bản phải từ 3 đến 1000 ký tự !")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Album ảnh")]),a("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-removed-file":function(e){return t.removeFile(e)},"vdropzone-success":t.successUpload}})],1)])])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-body"},[t.urlImage?a("img",{staticClass:"image-preview",attrs:{src:t.urlImage,alt:"avatar"}}):a("img",{staticClass:"image-preview",attrs:{src:"https://res.cloudinary.com/vexeonline/VexeOnlineMedia/imageDefault/no-image_ljozla",alt:"avatar"}}),a("div",{staticClass:"form-group mt-2"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile"},on:{change:t.previewFile}}),a("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[t._v(t._s(t.fileName))]),t.errImage?a("p",{staticClass:"alert-danger mt-2"},[t._v(t._s(t.errImage))]):t._e()])])])])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-footer text-center"},[a("router-link",{staticClass:"btn btn-sm btn-warning btn-icon-split",attrs:{to:"/admin/stations",type:"button"}},[a("span",{staticClass:"icon text-white-50"},[a("i",{staticClass:"fas fa-exclamation-triangle"})]),a("span",{staticClass:"text"},[t._v("Hủy Bỏ")])]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-primary btn-icon-split",attrs:{type:"submit"}},[a("span",{staticClass:"icon text-white-50"},[t.loading?a("i",{staticClass:"fa fa-spinner fa-spin"}):a("i",{staticClass:"fa fa-save"})]),a("span",{staticClass:"text"},[t._v("Thêm Mới")])])],1)])])])])])},s=[],n=(a("7db0"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b5ae")),r=a("92c3"),l=a.n(r),o=(a("1e3f"),{name:"addStation",components:{vueDropzone:l.a},data:function(){var t=this;return{fileName:"Chọn File Ảnh",name:"",numberOfSeats:"0",utilities:"",urlImage:null,errImage:null,file:null,listImages:[],dropzoneOptions:{url:function(){var e=t.$store.state.auth.infoUser;return"http://localhost:5000/api/vehicles/upload-images/".concat(e._id)},thumbnailWidth:150,thumbnailHeight:150,maxFilesize:2,acceptedFiles:"image/*",headers:{Authorization:"authorizationHeader","Cache-Control":null,"X-Requested-With":null,token:this.$store.state.auth.token},dictDefaultMessage:"<i class='fa fa-cloud-upload'></i>Thêm Ảnh",maxFiles:6,paramName:"fileImage"}}},validations:{name:{required:n["required"],minLength:Object(n["minLength"])(3),maxLength:Object(n["maxLength"])(255)},numberOfSeats:{required:n["required"],between:Object(n["between"])(4,60)},utilities:{minLength:Object(n["minLength"])(3),maxLength:Object(n["maxLength"])(1e3)}},watch:{vehicle:function(t){this.$refs.myVueDropzone.removeAllFiles(),t&&(this.listImages=[],this.$toast.success("Thêm xe thành công",{position:"bottom-right"}))}},computed:{loading:function(){return this.$store.state.vehicle.loading},vehicle:function(){return this.$store.state.vehicle.vehicle},userInfo:function(){return this.$store.state.auth.infoUser}},methods:{handleSubmit:function(t){if(this.$v.$anyDirty&&!this.$v.$anyError&&!this.errImage){var e={name:this.name,numberOfSeats:this.numberOfSeats,utilities:this.utilities,listImages:this.listImages};if(this.file){var a=new FormData;a.append("avatar",this.file),this.$store.dispatch("postVehicle",{formData:e,fileAvatar:a})}else this.$store.dispatch("postVehicle",{formData:e,fileAvatar:null});t.target.reset()}},previewFile:function(t){var e=["image/jpeg","image/png","image/gif"],a=t.target.files[0];e.find((function(t){return t===a.type}))?a.size>2097152?(this.errImage="kích thước file ảnh tối đa 2MB!",this.fileName="Chọn File Ảnh",this.urlImage=null):(this.file=a,this.fileName=a.name,this.errImage=null,this.urlImage=URL.createObjectURL(a)):(this.errImage="File ảnh không hợp lệ",this.fileName="Chọn File Ảnh",this.urlImage=null)},removeFile:function(){},successUpload:function(t,e){this.listImages.push(e.fileName)}}}),m=o,c=(a("88d9"),a("2877")),u=Object(c["a"])(m,i,s,!1,null,null,null);e["default"]=u.exports},"7e46":function(t,e,a){},"88d9":function(t,e,a){"use strict";var i=a("7e46"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-e12e97e0.a5dfb9bf.js.map