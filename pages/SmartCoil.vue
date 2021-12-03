<template>
  <div class="smartcoilContainer">
    <button id="smartCoil-button">Tap!</button>
    <div class="smartCoil-coordinate">
      <div id="smartCoil-x"></div>
      <div id="smartCoil-y"></div>
      <div id="smartCoil-z"></div>
    </div>
    <div class="sliderPannel">
      <input
        type="range"
        min="0"
        max="100"
        value="25"
        class="slider"
        id="slider"
      />
    </div>
    <div id="smartCoil-target">バグって鳴らない時は更新してください</div>
  </div>
</template>

<style lang="scss" scoped>
.smartcoilContainer {
  width: 100%;
  height: 100vh;
  position: relative;
}
#smartCoil-button {
  position: absolute;
  display: block;
  font-size: 40px;
  background-color: #ccc;
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  color: black;
  border: 5px solid black;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.sliderPannel {
  width: 100%;
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

<script>
export default {
  mounted() {
    this.coil()
  },
  methods: {
    coil() {
      if (process.client) {
        console.log('version0.2')
        let x = document.getElementById('smartCoil-x')
        let y = document.getElementById('smartCoil-y')
        let z = document.getElementById('smartCoil-z')
        let button = document.getElementById('smartCoil-button')
        let flg = false
        let count = 0
        let target = document.getElementById('smartCoil-target')
        // const sound = new Audio('maracas/maracas.mp3')
        const requestDeviceOrientationPermission = () => {
          if (
            DeviceOrientationEvent &&
            typeof DeviceOrientationEvent.requestPermission === 'function'
          ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceOrientationEvent.requestPermission()
              .then((permissionState) => {
                if (permissionState === 'granted') {
                  // 許可を得られた場合、deviceorientationをイベントリスナーに追加
                  let audioCtx = new AudioContext()
                  let oscillator = audioCtx.createOscillator()
                  let gain = audioCtx.createGain()
                  gain.gain.value = 0.3
                  oscillator.type = 'sine'
                  oscillator.frequency.value = 440
                  oscillator.connect(gain).connect(audioCtx.destination)
                  if (flg == true) {
                    oscillator.stop()
                    console.log('stop')
                    flg = false
                  } else {
                    oscillator.start()
										flg = true
										console.log('start')
                  }
                  window.addEventListener('deviceorientation', (e) => {
                    // deviceorientationのイベント処理
                    x.innerHTML = parseInt(e.beta)
                    y.innerHTML = parseInt(e.gamma)
                    if (e.beta <= -90)  {
                      oscillator.frequency.value = -1 * (parseInt(e.beta) + 261) * 2.5
                      console.log("-90")
                    } else {
                      oscillator.frequency.value = (parseInt(e.beta) + 261) * 2.5
                      console.log("not-90")
                    }
                    gain.gain.value = document.getElementById('slider').value / 100
                    console.log(oscillator.frequency.value)
                  })
                } else {
                  // 許可を得られなかった場合の処理
                  target.innerHTML = '許可して！'
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
            // 上記以外のブラウザ
            target.innerHTML = '非対応ブラウザ！スマホで見てね！'
          }
        }

        const testSound = () => {
          let audioCtx = new AudioContext()
          let oscillator = audioCtx.createOscillator()
          let gain = audioCtx.createGain()
          gain.gain.value = 0.3
          oscillator.type = 'sine'
          oscillator.frequency.value = 440
          oscillator.connect(gain).connect(audioCtx.destination)
          oscillator.start()
        }

        // ボタンクリックでrequestDeviceOrientationPermission実行
        button.addEventListener(
          'click',
          requestDeviceOrientationPermission,
          false
        )
      }
    },
  },
}
</script>
