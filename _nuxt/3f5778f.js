(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,t,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("66ed9b7c",content,!0,{sourceMap:!1})},229:function(e,t,n){"use strict";n(225)},230:function(e,t,n){var o=n(113)(!1);o.push([e.i,".container[data-v-1cddd29e]{width:100%;height:100vh;position:relative}#switch[data-v-1cddd29e]{position:absolute;display:block;font-size:40px;background-color:#ccc;width:200px;height:200px;margin:auto;border-radius:50%;color:#000;border:5px solid #000;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}",""]),e.exports=o},237:function(e,t,n){"use strict";n.r(t);var o={mounted:function(){this.maracas()},methods:{maracas:function(){var e=document.getElementById("x"),button=document.getElementById("switch"),t=!0,n=0,o=document.getElementById("target"),r=new Audio("maracas/maracas.wav");document.getElementById("switch").addEventListener("click",(function(){DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(c){"granted"===c?(r.load(),window.addEventListener("devicemotion",(function(c){o.innerHTML=c.acceleration.x,(c.acceleration.x<-10||c.acceleration.x>10)&&1==t&&(n+=1,e.innerHTML=n,r.currentTime=0,r.play(),t=!1,r.onended=function(){t=!0})}))):button.innerHTML="error"})).catch(console.error):button.innerHTML="error"}),!1)}}},r=(n(229),n(37)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("button",{attrs:{id:"switch"}},[e._v("Tap!")]),e._v(" "),n("div",{attrs:{id:"x"}}),e._v(" "),n("div",{attrs:{id:"target"}})])}],!1,null,"1cddd29e",null);t.default=component.exports}}]);