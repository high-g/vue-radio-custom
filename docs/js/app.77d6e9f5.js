(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)a=s[d],n[a]&&h.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},r=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-custom-radio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("64a9"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("14c6"),o("08c1"),o("4842"),o("d9fc");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("Custom Radio")]),o("div",{staticClass:"mb50"},[o("h2",[t._v("Simple Radio")]),o("VueCustomRadio",{attrs:{radioType:"simple",keywords:"テスト1,test2,test3",values:"1,2,3",checkStr:"1",name:"test1",color:"#6633cc"},on:{emitRadio:t.onRadioSimple}})],1),o("div",{staticClass:"mb50"},[o("h2",[t._v("Switch Radio")]),o("VueCustomRadio",{staticClass:"mb20",attrs:{radioType:"switch",keywords:"ON,OFF",values:"1,0",checkStr:"0",name:"test2",width:"14rem",color:"#4169e1"},on:{emitRadio:t.onRadioSwitch}}),o("VueCustomRadio",{staticClass:"mb20",attrs:{radioType:"switch",keywords:"男性,女性",values:"man,woman",checkStr:"man",name:"sex",width:"300px",color:"crimson"},on:{emitRadio:t.onRadioSwitch}}),o("VueCustomRadio",{attrs:{radioType:"switch",keywords:"グー,チョキ,パー",values:"g,c,p",checkStr:"c",name:"janken",width:"500px",color:"darkorange"},on:{emitRadio:t.onRadioSwitch}})],1),o("div",[o("h2",[t._v("Toggle Radio")]),o("VueCustomRadio",{staticClass:"mb20",attrs:{radioType:"toggle",name:"test3",keywords:"ON,OFF",values:"1,0",checkStr:"0"},on:{emitRadio:t.onRadioToggle}}),o("VueCustomRadio",{attrs:{radioType:"toggle",name:"test4",keywords:"すき,きらい",color:"blue",checkToggle:!0,jp:!0},on:{emitRadio:t.onRadioToggle}})],1)])},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["simple"===t.radioType?[o("div",t._l(t.obj,function(e,i){return o("label",{key:i,staticClass:"simple",style:t.styles},[o("input",{attrs:{type:"radio",id:i,name:t.name},domProps:{value:e.value,checked:t.checkStr===e.value},on:{click:function(o){return t.emitSimple(e)}}}),o("span",[t._v(t._s(e.label))])])}),0)]:t._e(),"switch"===t.radioType?[o("div",{staticClass:"switch",style:t.styles},t._l(t.obj,function(e,i){return o("div",{key:i,staticClass:"item"},[o("input",{attrs:{type:"radio",id:i,name:t.name},domProps:{value:e.value,checked:t.checkStr===e.value},on:{click:function(o){return t.emitSwitch(e)}}}),o("label",{attrs:{for:i}},[t._v(t._s(e.label))])])}),0)]:t._e(),"toggle"===t.radioType?[o("label",{staticClass:"toggle",style:t.styles},[o("input",{attrs:{type:"radio",name:t.name},domProps:{checked:t.check},on:{click:function(e){return t.toggleAction()}}}),o("span",{staticClass:"toggle__area"},[o("span",{staticClass:"text",style:t.toggleStyle()},[t._v(t._s(t.strOnOff))])])])]:t._e()],2)},s=[],c=(o("7f7f"),o("ac6a"),o("28a5"),{props:{radioType:String,name:String,color:String,keywords:String,checkStr:String,values:String,width:String,jp:Boolean,checkToggle:Boolean},data:function(){return{check:!1,obj:{},arr:[]}},computed:{styles:function(){return{width:this.width,"--color":this.color}},strOnOff:function(){return this.check?this.arr[0]:this.arr[1]}},created:function(){this.obj=this.createKeywordObj(),this.arr=this.keywords.split(","),this.check=this.checkToggle},methods:{createKeywordObj:function(){for(var t=this.keywords.split(","),e=this.values?this.values.split(","):[],o={},i=0;i<t.length;i++){var n=this.name+i;t.length===e.length?o[n]={label:t[i],value:e[i]}:o[n]={label:t[i],value:t[i]}}return o},toggleAction:function(){this.check=!this.check,this.$emit("emitRadio",this.check)},toggleStyle:function(){return this.jp?"writing-mode: vertical-lr":""},emitSimple:function(t){this.$emit("emitRadio",t)},emitSwitch:function(t){this.$emit("emitRadio",t)}}}),l=c,u=(o("f46c"),o("2877")),d=Object(u["a"])(l,a,s,!1,null,"42c293bf",null),h=d.exports,p={components:{VueCustomRadio:h},data:function(){return{}},methods:{onRadioSimple:function(t){console.log("onRadioSimple",t)},onRadioSwitch:function(t){console.log("onRadioSwitch",t)},onRadioToggle:function(t){console.log("onRadioToggle",t)}}},f=p,m=(o("034f"),Object(u["a"])(f,n,r,!1,null,null,null)),g=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,o){},"9f9f":function(t,e,o){},f46c:function(t,e,o){"use strict";var i=o("9f9f"),n=o.n(i);n.a}});
//# sourceMappingURL=app.77d6e9f5.js.map