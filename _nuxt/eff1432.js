(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,t,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("2e17b698",content,!0,{sourceMap:!1})},229:function(e,t,n){"use strict";n(225)},230:function(e,t,n){var o=n(113)(!1);o.push([e.i,"#switch[data-v-14633360]{font-size:20px;background-color:#ccc;height:50px}",""]),e.exports=o},237:function(e,t,n){"use strict";n.r(t);var o={mounted:function(){this.maracas()},methods:{maracas:function(){var e=document.getElementById("x"),t=!0,n=document.getElementById("target"),o=new Audio("maracas/maracas.wav");document.getElementById("switch").addEventListener("click",(function(){o.load(),DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(c){"granted"===c&&(n.innerHTML="done",window.addEventListener("devicemotion",(function(c){n.innerHTML=c.acceleration.x,(c.acceleration.x<-30||c.acceleration.x>30)&&1==t&&(e.innerHTML+=1,o.play(),t=!1,o.onended=function(){t=!0})})))})).catch(console.error):n.innerHTML="error"}),!1)}}},c=(n(229),n(37)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{id:"switch"}},[e._v("Start")]),e._v(" "),n("div",{attrs:{id:"x"}}),e._v(" "),n("div",{attrs:{id:"target"}})])}],!1,null,"14633360",null);t.default=component.exports}}]);