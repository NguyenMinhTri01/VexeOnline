(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-305e8364"],{"36c6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"agent"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 agent-left wow fadeInDown animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"fadeInDown"},attrs:{"data-wow-delay":".5s"}},[a("p",[t._v("Gửi tin nhắn cho chúng tôi")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleContact(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Tên của bạn"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email của bạn"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"Số điện thoại của bạn"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"Tin nhắn của bạn"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._m(1)])]),t._m(2)]),a("div",{staticClass:"clearfix"})])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-3"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"wow zoomIn animated animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"zoomIn"},attrs:{"data-wow-delay":".5s"}},[t._v(" Green Wheels - Best in Class for Travel & Hotels")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sub"},[a("input",{attrs:{type:"submit",value:"Gửi"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room-map animated wow fadeInUp animated col-md-6 agent-left wow fadeInDown",staticStyle:{visibility:"visible","animation-duration":"1200ms","animation-delay":"500ms","animation-name":"fadeInUp"},attrs:{"data-wow-duration":"1200ms","data-wow-delay":"500ms"}},[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2322904530342!2d106.80298197692936!3d10.869928928595794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1598884017153!5m2!1svi!2s",width:"100%",frameborder:"0",allowfullscreen:""}})])}],o=(a("b0c0"),{data:function(){return{name:"",email:"",phone:"",content:""}},methods:{handleContact:function(){var t={name:this.name,email:this.email,phone:this.phone,content:this.content};this.$store.dispatch("fetchCreateContact",t)}},computed:{contact:function(){return this.$store.state.contact.data}},watch:{contact:function(t){t&&this.$toast.success("Gửi liên hệ thành công")}}}),s=o,c=a("2877"),l=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,o=Function.prototype,s=o.toString,c=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&i(o,l,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-305e8364.a07d86f1.js.map