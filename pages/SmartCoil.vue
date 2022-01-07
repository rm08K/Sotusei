<template>
  <div id="smartcoilContainer" class="smartcoilContainer">
    <button id="smartCoil-button">Tap!</button>
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
    <div class="smartCoil-coordinate">
      <div id="smartCoil-x"></div>
    </div>
    <div id="smartCoil-shutoutWall">
      <p id="smartCoil-text">この楽器はスマートフォン専用です！</p>
      <SmartCoilQR />
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.smartcoilContainer {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(209, 240, 252);
}
#smartCoil {
  &-button {
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
  &-shutoutWall {
    position: absolute;
    top: 0;
    background-color: pink;
    width: 100%;
    height: 100vh;
    display: none;
    text-align: center;
    font-size: 1.6rem;
  }
  &-text {
    margin-top: 100px;
  }
  &-svg {
    margin-top: 50px;
    width: 250px;
    aspect-ratio: 1 / 1;
    background-color: #fff;
    padding: 20px;
  }
}

@media screen and (min-width: 600px) {
  #smartCoil-shutoutWall {
    display: block;
  }
}

.sliderPannel {
  width: 100%;
  max-width: 500px;
  margin: auto;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
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
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    box-shadow: $shadowColor;
    background: $mainColor;
    border: 0px solid #000101;
  }
  &::-webkit-slider-thumb {
    box-shadow: $shadowColor;
    border: 0px solid #000000;
    height: 30px;
    width: 10px;
    background: $accentColor;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -9.4px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: $mainColor;
  }
  &::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    box-shadow: $shadowColor;
    background: $mainColor;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-moz-range-thumb {
    box-shadow: $shadowColor;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: $accentColor;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    // animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: $mainColor;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: $shadowColor;
  }
  &::-ms-fill-upper {
    background: $mainColor;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: $shadowColor;
  }
  &::-ms-thumb {
    box-shadow: $shadowColor;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: $accentColor;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: $mainColor;
  }
  &:focus::-ms-fill-upper {
    background: $mainColor;
  }
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
        console.log('version1.0')
        let x = document.getElementById('smartCoil-x')
        let button = document.getElementById('smartCoil-button')
        let flg = false
        let count = 0
        let target = document.getElementById('smartCoil-target')
        // 縦幅をスクロールできない高さに変更する
        let vh = window.innerHeight
        document.getElementById('smartcoilContainer').style.height = vh + 'px'
        document.getElementById('smartCoil-shutoutWall').style.height =
          vh + 'px'
        // キャッシュのリロード判断
        let cookies = document.cookie
        let cookiesArray = cookies.split(';')
        for (var c of cookiesArray) {
          let cArray = c.split('=')
          if (cArray[0] == 'flg') {
            target.innerHTML = 'もう一度タップ！'
          }
        }
        // const sound = new Audio('maracas/maracas.mp3')
        const requestDeviceOrientationPermission = () => {
          if (
            DeviceOrientationEvent &&
            typeof DeviceOrientationEvent.requestPermission === 'function'
          ) {
            // iOS 13+ の Safari の許可を取得
            DeviceOrientationEvent.requestPermission()
              .then((permissionState) => {
                if (permissionState === 'granted') {
                  // 許可を得られた場合の処理
                  // リロード
                  for (var c of cookiesArray) {
                    let cArray = c.split('=')
                    if (cArray[0] == 'flg') {
                      console.log('ready')
                      button.innerHTML = '♪'
                    } else {
                      document.cookie = 'flg=1;max-age=5'
                      location.reload()
                    }
                  }
                  deviceMotionEvents()
                } else {
                  // 許可を得られなかった場合の処理
                  target.innerHTML = '許可して！'
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
            // 上記以外のブラウザ
            deviceMotionEvents()
          }
        }

        // ページを出る時の処理
        history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
        window.addEventListener('popstate', function(e) {
          oscillator.stop()
        })

        const deviceMotionEvents = () => {
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
            if (e.beta <= -90) {
              oscillator.frequency.value = (parseInt(e.beta) + 261) * 2.5 + 896
            } else {
              oscillator.frequency.value = (parseInt(e.beta) + 261) * 2.5
            }
            gain.gain.value = document.getElementById('slider').value / 100
          })
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
