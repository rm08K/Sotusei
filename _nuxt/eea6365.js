(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{228:function(t,e,r){var content=r(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("06bfa63d",content,!0,{sourceMap:!1})},237:function(t,e,r){"use strict";r(228)},238:function(t,e,r){var n=r(113)(!1);n.push([t.i,".smartcoilContainer[data-v-475e38af]{width:100%;height:100vh;position:relative}#smartCoil-button[data-v-475e38af]{position:absolute;display:block;font-size:40px;background-color:#ccc;width:200px;height:200px;margin:auto;border-radius:50%;color:#000;border:5px solid #000;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}.sliderPannel[data-v-475e38af]{width:100%;max-width:500px;margin:auto;padding-top:10px}.slider[data-v-475e38af]{width:100%}input[type=range][data-v-475e38af]{-webkit-appearance:none;margin:10px 0;width:100%}input[type=range][data-v-475e38af]:focus{outline:none}input[type=range][data-v-475e38af]::-webkit-slider-runnable-track{width:100%;height:10px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#222;border:0 solid #000101}input[type=range][data-v-475e38af]::-webkit-slider-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:30px;width:10px;background:#666;cursor:pointer;-webkit-appearance:none;margin-top:-9.4px}input[type=range][data-v-475e38af]:focus::-webkit-slider-runnable-track{background:#222}input[type=range][data-v-475e38af]::-moz-range-track{width:100%;height:12.8px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#222;border-radius:25px;border:0 solid #000101}input[type=range][data-v-475e38af]::-moz-range-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:7px;background:#666;cursor:pointer}input[type=range][data-v-475e38af]::-ms-track{width:100%;height:12.8px;cursor:pointer;background:transparent;border-color:transparent;border-width:39px 0;color:transparent}input[type=range][data-v-475e38af]::-ms-fill-lower,input[type=range][data-v-475e38af]::-ms-fill-upper{background:#222;border:0 solid #000101;border-radius:50px;box-shadow:0 0 0 #000,0 0 0 #0d0d0d}input[type=range][data-v-475e38af]::-ms-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:7px;background:#666;cursor:pointer}input[type=range][data-v-475e38af]:focus::-ms-fill-lower,input[type=range][data-v-475e38af]:focus::-ms-fill-upper{background:#222}",""]),t.exports=n},246:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){this.coil()},methods:{coil:function(){console.log("version0.2");var t=document.getElementById("smartCoil-x"),e=document.getElementById("smartCoil-y"),button=(document.getElementById("smartCoil-z"),document.getElementById("smartCoil-button")),r=!1,n=document.getElementById("smartCoil-target");button.addEventListener("click",(function(){DeviceOrientationEvent&&"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then((function(o){if("granted"===o){var d=new AudioContext,l=d.createOscillator(),c=d.createGain();c.gain.value=.3,l.type="sine",l.frequency.value=440,l.connect(c).connect(d.destination),r?(l.stop(),r=!1):(l.start(),r=!0),window.addEventListener("deviceorientation",(function(r){t.innerHTML=parseInt(r.beta),e.innerHTML=parseInt(r.gamma),l.frequency.value=2.5*(parseInt(r.beta)+261),c.gain.value=document.getElementById("slider").value/100}))}else n.innerHTML="許可して！"})).catch(console.error):n.innerHTML="非対応ブラウザ！スマホで見てね！"}),!1)}}},o=(r(237),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"smartcoilContainer"},[r("button",{attrs:{id:"smartCoil-button"}},[t._v("Tap!")]),t._v(" "),r("div",{staticClass:"smartCoil-coordinate"},[r("div",{attrs:{id:"smartCoil-x"}}),t._v(" "),r("div",{attrs:{id:"smartCoil-y"}}),t._v(" "),r("div",{attrs:{id:"smartCoil-z"}})]),t._v(" "),r("div",{staticClass:"sliderPannel"},[r("input",{staticClass:"slider",attrs:{type:"range",min:"0",max:"100",value:"25",id:"slider"}})]),t._v(" "),r("div",{attrs:{id:"smartCoil-target"}})])}],!1,null,"475e38af",null);e.default=component.exports}}]);