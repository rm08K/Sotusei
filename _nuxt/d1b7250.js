(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,t,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("b02c2632",content,!0,{sourceMap:!1})},230:function(e,t,n){"use strict";n(225)},231:function(e,t,n){var o=n(113)(!1);o.push([e.i,".maracasContainer[data-v-1a873af0]{width:100%;height:100vh;position:relative}#switch[data-v-1a873af0]{position:absolute;display:block;font-size:40px;background-color:#ccc;width:200px;height:200px;margin:auto;border-radius:50%;color:#000;border:5px solid #000;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}",""]),e.exports=o},240:function(e,t,n){"use strict";n.r(t);var o={mounted:function(){this.maracas()},methods:{maracas:function(){console.log("version1.0");var e=document.getElementById("x"),button=document.getElementById("switch"),t=!0,n=0,o=document.getElementById("target"),r=new Audio("maracas/maracas.mp3");document.getElementById("switch").addEventListener("click",(function(){DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(c){"granted"===c?(button.innerHTML="Shake!",r.load(),window.addEventListener("devicemotion",(function(c){o.innerHTML=Math.floor(10*c.acceleration.x)/10,(c.acceleration.x<-5||c.acceleration.x>5)&&1==t&&(n+=1,e.innerHTML=n,r.currentTime=0,r.play(),t=!1,console.log(t))}))):button.innerHTML="error"})).catch(console.error):button.innerHTML="error"}),!1),r.onended=function(){t=!0,console.log(t)}}}},r=(n(230),n(37)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"maracasContainer"},[n("button",{attrs:{id:"switch"}},[e._v("Tap!")]),e._v(" "),n("div",{attrs:{id:"x"}}),e._v(" "),n("div",{attrs:{id:"target"}})])}],!1,null,"1a873af0",null);t.default=component.exports}}]);