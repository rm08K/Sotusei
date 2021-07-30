<template>
<div class="container">
  <div class="toggleButton">
    <input class="toggleButton-radio" type="radio" name="b1" id="b1" ref="b1" checked>
    <label class="toggleButton-label" for="b1"></label>
    <input class="toggleButton-radio" type="radio" name="b1" id="b2" ref="b2">
    <label class="toggleButton-label" for="b2"></label>
    <input class="toggleButton-radio" type="radio" name="b1" id="b3" ref="b3">
    <label class="toggleButton-label" for="b3"></label>
    <input class="toggleButton-radio" type="radio" name="b1" id="b4" ref="b4">
    <label class="toggleButton-label" for="b4"></label>
  </div>
  <div class="touchPannel" id="touchPannel" ref="touchPannel" @mousemove="slide" @mousedown="sound" @mouseup="stop" @mouseleave="stop">
    <div id="x">{{ x }}</div>,
    <div id="y">{{ y }}</div>
  </div>
  <div class="sliderPannel">
    <input type="range" min="0" max="100" value="25" class="slider" id="slider">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      x: 0,
      y: 0,
      // audioCtx: [],
      // oscillator: [],
      // aGain: [],
      // volume: this.$refs.slider,
    }
  },
  head () {
    return {
      script: [
        { src: 'musicladar.js' }
      ]
    }
  },
  methods: {
    sound () {
    //   this.audioCtx = new AudioContext(); 
    //   this.oscillator = audioCtx.createOscillator()
    },
    slide (e){
      this.x = e.offsetX
      this.y = e.offsetY
      // let gain = audioCtx.createGain();
      // this.aGain.gain.value = this.$refs.slider.value /100;
    },
    stop() {
    // this.osc.stop();
    }
  },
  mounted(){
  //   this.aGain = 10
    }
}
</script>

<style lang="scss">

body {
  padding: 0 !important;
}

.container {
  max-width: 600px;
  margin: auto;
}

.touchPannel {
  display: flex;
  width: 500px;
  height: 500px;
  color: #fff;
  border: solid 4px #222;
  user-select: none;
  margin: auto;
  background-color: #666;
}

.toggleButton {
  display: flex;
  justify-content: center;
  &-radio {
    display: none;
    &:checked + label {
      background-color: #666;
    }
  }
  &-label {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #333;
    border: 4px solid #222;
    border-radius: 50%;
    margin: 20px;
  }
}

.sliderPannel {
  max-width: 500px;
  margin: auto;
  padding-top: 10px;
}

.slider {
  width: 100%;
}

$shadowColor: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
$mainColor: #222;
$accentColor: #666;

input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: $shadowColor;
  background: $mainColor;
  // border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: $shadowColor;
  border: 0px solid #000000;
  height: 30px;
  width: 10px;
  // border-radius: 7px;
  background: $accentColor;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9.4px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: $mainColor;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: $shadowColor;
  background: $mainColor;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: $shadowColor;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: $accentColor;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: $mainColor;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: $shadowColor;
}
input[type=range]::-ms-fill-upper {
  background: $mainColor;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: $shadowColor;
}
input[type=range]::-ms-thumb {
  box-shadow: $shadowColor;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: $accentColor;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: $mainColor;
}
input[type=range]:focus::-ms-fill-upper {
  background: $mainColor;
}

body {
  padding: 30px;
}

</style>