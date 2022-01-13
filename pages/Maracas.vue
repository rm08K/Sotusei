<template>
  <div class="maracasContainer">
    <button id="switch">Tap!</button>
    <div id="target"></div>
    <div id="x"></div>
    <div id="maracas-shutoutWall">
      <p id="maracas-text">この楽器はスマートフォン専用です！</p>
      <MaracasQR />
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.maracasContainer {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(209, 240, 252);
}

#maracas {
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
  #maracas-shutoutWall {
    display: block;
  }
}

#switch {
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
</style>

<script>
export default {
  mounted() {
    this.maracas()
  },
  methods: {
    maracas() {
      if (process.client) {
        console.log('version1.0')
        // リロード
        let cookies = document.cookie
        let cookiesArray = cookies.split(';')
        for (var c of cookiesArray) {
          let cArray = c.split('=')
          if (cArray[0] == 'flg2') {
            console.log('ready')
          } else {
            document.cookie = 'flg2=1;max-age=5'
            location.reload()
          }
        }
        let x = document.getElementById('x')
        let button = document.getElementById('switch')
        let flg = true
        let count = 0
        let target = document.getElementById('target')
        const sound1 = new Audio('maracas/maracas_01.wav')
        const sound2 = new Audio('maracas/maracas_02.wav')
        const sound3 = new Audio('maracas/maracas_03.wav')
        let sArray = [sound1, sound2, sound3]
        let str = 1
        console.log(sArray)
        const requestDeviceMotionPermission = () => {
          if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === 'function'
          ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceMotionEvent.requestPermission()
              .then((permissionState) => {
                if (permissionState === 'granted') {
                  maracasEvents()
                } else {
                  // 許可を得られなかった場合の処理
                  button.innerHTML = 'error'
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
            // 上記以外のブラウザ
            maracasEvents()
          }
        }

        // ボタンクリックでrequestDeviceMotionPermission実行
        const startButton = document.getElementById('switch')
        startButton.addEventListener(
          'click',
          requestDeviceMotionPermission,
          false
        )

        const maracasEvents = () => {
          button.innerHTML = 'Shake!'
          sound1.load()
          sound2.load()
          sound3.load()
          // 許可を得られた場合、devicemotionをイベントリスナーに追加
          window.addEventListener('devicemotion', (e) => {
            // devicemotionのイベント処理
            target.innerHTML = Math.floor(e.acceleration.x * 10) / 10
            if (e.acceleration.x < -5 || e.acceleration.x > 5) {
              console.log('fire')
              if (flg == true) {
                flg = false
                sArray[str].currentTime = 0
                sArray[str].play()
                count += 1
                x.innerHTML = count
                console.log(flg)
                setTimeout(()=>{
                  str = Math.floor(Math.random() * 3)
                  console.log(str)
                  sArray[str].load()
                  flg = true
                },500)
              }
            }
          })
        }
      }
    },
  },
}
</script>
