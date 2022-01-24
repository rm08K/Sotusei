<template>
  <div class="container">
  <div class="musicRadar-backGround"></div>
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
  <div class="musicRadar-butttonname">
    <p class="musicRadar-butttonname_title">sine</p>
    <p class="musicRadar-butttonname_title">square</p>
    <p class="musicRadar-butttonname_title">sawtooth</p>
    <p class="musicRadar-butttonname_title">triangle</p>
  </div>
  <div class="touchPannel" id="touchPannel" ref="touchPannel" @mousemove="slide">
    <div id="x">{{ x }}</div>,
    <div id="y">{{ y }}</div>
  </div>
  <div class="musicRadar-sliderPannel">
    <input type="range" min="0" max="100" value="25" class="slider" id="slider">
    <p class="musicRadar-sliderPannel_title">Volume</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
    }
  },
  head() {
    return {
      script: [
        // { src: 'musicRadar.js' }
      ],
    }
  },
  mounted() {
    this.musicRadar()
  },
  methods: {
    slide(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    musicRadar() {
      if (process.client) {
        var audioCtx
        var oscillator
        var gain
        var firstflg = true
        let lfo
        let depth
        let touchPannel = document.getElementById('touchPannel')
        let range_Hz = 0
        let range_Lfo = 0
        touchPannel.onmousedown = function () {
          console.log('start')
          stop()
          let range_vol = document.getElementById('slider').value
          try {
            if (firstflg) {
              audioCtx = new AudioContext()
              firstflg = false
            }
            oscillator = audioCtx.createOscillator()
            if (document.getElementById('b1').checked) oscillator.type = 'sine'
            if (document.getElementById('b2').checked)
              oscillator.type = 'square'
            if (document.getElementById('b3').checked)
              oscillator.type = 'sawtooth'
            if (document.getElementById('b4').checked)
              oscillator.type = 'triangle'
            gain = audioCtx.createGain()
            gain.gain.value = range_vol / 100

            lfo = audioCtx.createOscillator()
            depth = audioCtx.createGain()
            depth.gain.value = 50
            lfo.type = 'sine'
            lfo.frequency.value = 10

            hzchange()
            lfochange()
            oscillator.connect(gain)
            gain.connect(audioCtx.destination)
            lfo.connect(depth).connect(oscillator.frequency)
            oscillator.start()
            lfo.start()
          } catch (e) {
            console.log(e)
          }
        }
        let hzchange = function () {
          oscillator.frequency.value =
            100 + 1.7 * parseInt(document.getElementById('x').innerHTML)
        }
        touchPannel.addEventListener('mousemove', hzchange, false)
        let lfochange = function () {
          lfo.frequency.value =
            parseInt(document.getElementById('y').innerHTML) / 20
          depth.gain.value =
            parseInt(document.getElementById('y').innerHTML) / 20
        }
        touchPannel.addEventListener('mousemove', lfochange, false)
        let stop = function () {
          if (oscillator) {
            oscillator.stop()
            gain.disconnect()
            oscillator.disconnect()
            console.log('stopped')
          }
        }
        touchPannel.addEventListener('mouseup', stop, false)
        touchPannel.addEventListener('mouseleave', stop, false)
      }
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
}

.container {
  max-width: 608px;
  margin: auto;
  z-index: 0;
}

.touchPannel {
  display: flex;
  width: 600px;
  height: 600px;
  color: #fff;
  border: solid 4px #222;
  user-select: none;
  margin: auto;
  background-color: #666;
}

.toggleButton {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 30px;
  &-radio {
    display: none;
    &:checked + label {
      background-color: #888;
    }
  }
  &-label {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #444;
    border: 4px solid #333;
    border-radius: 50%;
  }
}

.musicRadar {
  &-backGround {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(224deg, #000000, #000000, #3aff00);
    background-size: 600% 600%;
    -webkit-animation: MusicLaderBGAnime 16s ease infinite;
    -moz-animation: MusicLaderBGAnime 16s ease infinite;
    animation: MusicLaderBGAnime 16s ease infinite;
  }
  &-butttonname {
    display: flex;
    justify-content: center;
    gap: 60px;
    &_title {
      width: 58px;
      text-align: center;
      margin-top: 0;
      font-family: "Arial Black", Arial, Helvetica, sans-serif;
      color: white;
      &:nth-child(3){
        margin-left: -10px;
        padding-right: 10px;
      }
      &:nth-child(4) {
        margin-left: -5px;
        padding-right: 5px;
      }
    }
  }
  &-sliderPannel {
    max-width: 608px;
    margin: auto;
    padding-top: 10px;
    text-align: center;
    &_title {
      @extend .musicRadar-butttonname_title;
      width: 100%;
      text-align: center;
    }
  }
}

@keyframes MusicLaderBGAnime {
    0%{background-position:90% 0%}
    50%{background-position:11% 100%}
    100%{background-position:90% 0%}
}

.slider {
  width: 100%;
}

$shadowColor: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
$mainColor: #222;
$accentColor: #666;

input[type='range'] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: $shadowColor;
  background: $mainColor;
  // border-radius: 25px;
  border: 0px solid #000101;
}
input[type='range']::-webkit-slider-thumb {
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
input[type='range']:focus::-webkit-slider-runnable-track {
  background: $mainColor;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  // animate: 0.2s;
  box-shadow: $shadowColor;
  background: $mainColor;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type='range']::-moz-range-thumb {
  box-shadow: $shadowColor;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: $accentColor;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  // animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: $mainColor;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: $shadowColor;
}
input[type='range']::-ms-fill-upper {
  background: $mainColor;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: $shadowColor;
}
input[type='range']::-ms-thumb {
  box-shadow: $shadowColor;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: $accentColor;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: $mainColor;
}
input[type='range']:focus::-ms-fill-upper {
  background: $mainColor;
}
</style>
