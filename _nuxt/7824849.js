(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(t,e,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("a9d4ecb8",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";n(225)},230:function(t,e,n){var o=n(113)(!1);o.push([t.i,".container[data-v-48b3c8bb]{width:100%;height:100vh;position:relative}#switch[data-v-48b3c8bb]{position:absolute;display:block;font-size:40px;background-color:#ccc;width:200px;height:200px;margin:auto;border-radius:50%;color:#000;border:5px solid #000;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}",""]),t.exports=o},237:function(t,e,n){"use strict";n.r(e);var o={mounted:function(){this.maracas()},methods:{maracas:function(){var t=document.getElementById("x"),button=document.getElementById("switch"),e=!0,n=0,o=document.getElementById("target"),r=new Audio("maracas/maracas.mp3");document.getElementById("switch").addEventListener("click",(function(){DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(c){"granted"===c?(button.innerHTML="Shake!",r.load(),window.addEventListener("devicemotion",(function(c){o.innerHTML=Math.floor(10*c.acceleration.x)/10,(c.acceleration.x<-5||c.acceleration.x>5)&&1==e&&(n+=1,t.innerHTML=n,r.currentTime=0,r.play(),e=!1)}))):button.innerHTML="error"})).catch(console.error):button.innerHTML="error"}),!1),r.onended=function(){e=!0}}}},r=(n(229),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("button",{attrs:{id:"switch"}},[t._v("Tap!")]),t._v(" "),n("div",{attrs:{id:"x"}}),t._v(" "),n("div",{attrs:{id:"target"}})])}],!1,null,"48b3c8bb",null);e.default=component.exports}}]);