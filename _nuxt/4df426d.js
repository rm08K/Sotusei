(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{242:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("9e12957a",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(242)},258:function(t,e,n){var o=n(113)(!1);o.push([t.i,'body{margin:0}.rhythmContainer{display:grid;grid-template-rows:33.3% 33.3% 1fr;grid-template-columns:33.3% 33.3% 1fr;background-color:#222}.rhythm-firstView{position:fixed;display:flex;width:100%;height:100vh;background-color:#222;justify-content:center;align-items:center}.rhythm-startBtn{display:block;padding:20px 50px;border:2px solid #111;background-color:#fff}.rBtn{height:33.33333vh;border:2px solid #000;border-radius:0;font-family:"Arial Black",Arial,Helvetica,sans-serif}.hidden{visibility:hidden}.f1{font-size:36px}.f2{font-size:34px}.f3{font-size:32px}.f4{font-size:30px}.f5{font-size:28px}.push{background-color:#000;-webkit-animation:pused .5s ease;animation:pused .5s ease}@-webkit-keyframes pused{0%{background-color:#000}to{background-color:#fff}}@keyframes pused{0%{background-color:#000}to{background-color:#fff}}',""]),t.exports=o},267:function(t,e,n){"use strict";n.r(e);n(48);var o={mounted:function(){this.rhythm()},methods:{rhythm:function(){console.log("ver1.0");var t=new Audio("rhythm/rh01.mp3"),e=new Audio("rhythm/rh02.mp3"),n=new Audio("rhythm/rh03.mp3"),o=new Audio("rhythm/rh04.mp3"),r=new Audio("rhythm/rh05.mp3"),c=new Audio("rhythm/rh06.mp3"),l=new Audio("rhythm/rh07.mp3"),d=new Audio("rhythm/rh08.mp3"),m=new Audio("rhythm/rh09.mp3"),f=new Audio("rhythm/base_rhythm.m4a"),h=document.getElementsByClassName("rBtn");document.getElementById("startBtn").addEventListener("click",(function(){f.currentTime=0,f.play(),f.loop=!0,document.getElementById("startBtn").classList.add("hidden"),setInterval(y,470)})),document.getElementById("btn1").addEventListener("click",(function(){t.currentTime=0,t.play(),v("btn1"),console.log("pushed")})),document.getElementById("btn2").addEventListener("click",(function(){e.currentTime=0,e.play(),v("btn2"),console.log("pushed")})),document.getElementById("btn3").addEventListener("click",(function(){n.currentTime=0,n.play(),v("btn3"),console.log("pushed")})),document.getElementById("btn4").addEventListener("click",(function(){o.currentTime=0,o.play(),v("btn4"),console.log("pushed")})),document.getElementById("btn5").addEventListener("click",(function(){r.currentTime=0,r.play(),v("btn5"),console.log("pushed")})),document.getElementById("btn6").addEventListener("click",(function(){c.currentTime=0,c.play(),v("btn6"),console.log("pushed")})),document.getElementById("btn7").addEventListener("click",(function(){l.currentTime=0,l.play(),v("btn7"),console.log("pushed")})),document.getElementById("btn8").addEventListener("click",(function(){d.currentTime=0,d.play(),v("btn8"),console.log("pushed")})),document.getElementById("btn9").addEventListener("click",(function(){m.currentTime=0,m.play(),v("btn9"),console.log("pushed")}));var y=function(){Array.prototype.forEach.call(h,(function(element){element.classList.remove("f5")})),Array.prototype.forEach.call(h,(function(element){element.classList.add("f1")})),console.log("roop"),setTimeout((function(){Array.prototype.forEach.call(h,(function(element){element.classList.remove("f1")})),Array.prototype.forEach.call(h,(function(element){element.classList.add("f2")})),setTimeout((function(){Array.prototype.forEach.call(h,(function(element){element.classList.remove("f2")})),Array.prototype.forEach.call(h,(function(element){element.classList.add("f3")})),setTimeout((function(){Array.prototype.forEach.call(h,(function(element){element.classList.remove("f3")})),Array.prototype.forEach.call(h,(function(element){element.classList.add("f4")})),setTimeout((function(){Array.prototype.forEach.call(h,(function(element){element.classList.remove("f4")})),Array.prototype.forEach.call(h,(function(element){element.classList.add("f5")}))}),50)}),50)}),50)}),50)},v=function(t){document.getElementById("".concat(t)).classList.add("push"),setTimeout((function(){document.getElementById("".concat(t)).classList.remove("push")}),300)};history.replaceState(null,document.getElementsByTagName("title")[0].innerHTML,null),window.addEventListener("popstate",(function(t){location.reload()}))}}},r=(n(257),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rhythmContainer"},[n("button",{staticClass:"rBtn",attrs:{id:"btn1"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn2"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn3"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn4"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn5"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn6"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn7"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn8"}},[t._v("Click!")]),t._v(" "),n("button",{staticClass:"rBtn",attrs:{id:"btn9"}},[t._v("Click!")]),t._v(" "),n("div",{staticClass:"rhythm-firstView",attrs:{id:"startBtn"}},[n("p",{staticClass:"rhythm-startBtn"},[t._v("Click to Start")])])])}],!1,null,null,null);e.default=component.exports}}]);