<template>
<div>
  <div class="toggleButton">
    <input type="checkbox" name="b1" id="b1" ref="b1" checked>
    <input type="checkbox" name="b2" id="b2" ref="b2">
    <input type="checkbox" name="b3" id="b3" ref="b3">
  </div>
  <div class="touchPannel" id="touchPannel" ref="touchPannel" @mousemove="slide" @mousedown="sound" @mouseup="stop" @mouseleave="stop">
    <div id="x">{{ x }}</div>,
    <div id="y">{{ y }}</div>
  </div>
  <div class="slider">
    <input type="range" min="0" max="100" value="25" ref="slider" id="slider">
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

<style lang="css">

.touchPannel {
  display: flex;
  width: 500px;
  height: 500px;
  border: solid 1px black;
  user-select: none;
}
</style>