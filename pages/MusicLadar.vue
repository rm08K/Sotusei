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
  <div class="touchPannel" id="touchPannel" ref="touchPannel" @mousemove="slide">
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
  data() {
    return {
      x: 0,
      y: 0,
    }
  },
  head() {
    return {
      script: [
        // { src: 'musicladar.js' }
      ],
    }
  },
  mounted() {
    this.musicLadar()
  },
  methods: {
    slide(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    musicLadar() {
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
  padding: 0 !important;
}

.container {
  max-width: 600px;
  margin: auto;
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
    margin: 20px 30px;
  }
}

.sliderPannel {
  max-width: 600px;
  margin: auto;
  padding-top: 10px;
  text-align: center;
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
