(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43be9dd8"],{1276:function(t,e,n){"use strict";var i=n("d784"),a=n("44e7"),s=n("825a"),l=n("1d80"),r=n("4840"),c=n("8aa5"),o=n("50c4"),u=n("14c3"),d=n("9263"),h=n("d039"),g=[].push,p=Math.min,v=4294967295,f=!h((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(l(this)),s=void 0===n?v:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,s);var r,c,o,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=new RegExp(t.source,h+"g");while(r=d.call(f,i)){if(c=f.lastIndex,c>p&&(u.push(i.slice(p,r.index)),r.length>1&&r.index<i.length&&g.apply(u,r.slice(1)),o=r[0].length,p=c,u.length>=s))break;f.lastIndex===r.index&&f.lastIndex++}return p===i.length?!o&&f.test("")||u.push(""):u.push(i.slice(p)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=l(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,n):i.call(String(a),e,n)},function(t,a){var l=n(i,t,this,a,i!==e);if(l.done)return l.value;var d=s(t),h=String(this),g=r(d,RegExp),m=d.unicode,w=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"y":"g"),b=new g(f?d:"^(?:"+d.source+")",w),x=void 0===a?v:a>>>0;if(0===x)return[];if(0===h.length)return null===u(b,h)?[h]:[];var S=0,y=0,C=[];while(y<h.length){b.lastIndex=f?y:0;var _,I=u(b,f?h:h.slice(y));if(null===I||(_=p(o(b.lastIndex+(f?0:y)),h.length))===S)y=c(h,y,m);else{if(C.push(h.slice(S,y)),C.length===x)return C;for(var E=1;E<=I.length-1;E++)if(C.push(I[E]),C.length===x)return C;y=S=_}}return C.push(h.slice(S)),C}]}),!f)},"44e7":function(t,e,n){var i=n("861d"),a=n("c6b6"),s=n("b622"),l=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==a(t))}},db0b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"terms"},[t.loading?t._e():n("div",{staticClass:"container"},[n("h3",{staticClass:"wow fadeInDown animated animated",attrs:{"data-wow-delay":".5s"}},[t._v(t._s(t.pageStatic.name))]),n("div",{staticClass:"terms-bottom",domProps:{innerHTML:t._s(t.content)}})])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-1"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"wow zoomIn animated animated",staticStyle:{visibility:"visible","animation-delay":"0.5s","animation-name":"zoomIn"},attrs:{"data-wow-delay":".5s"}},[t._v(" Green Wheels - Best in Class for Travel & Hotels")])])])}],s=(n("ac1f"),n("1276"),{data:function(){return{content:""}},created:function(){var t=window.location.pathname;t=t.split("/")[1],this.$store.dispatch("fetchDetailPageStaticBySlug",t)},updated:function(){var t=window.location.pathname;t=t.split("/")[1],this.$store.dispatch("fetchDetailPageStaticBySlugAgain",t)},computed:{pageStatic:function(){return this.$store.state.pageStatic.pagestatic},loading:function(){return this.$store.state.pageStatic.loading}},watch:{pageStatic:function(t){t&&(this.content=t.content)}}}),l=s,r=n("2877"),c=Object(r["a"])(l,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-43be9dd8.3882153e.js.map