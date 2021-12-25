<template>
  <div class="maracasContainer">
    <button id="switch">Tap!</button>
    <div id="x"></div>
    <div id="target"></div>
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
        console.log("version1.0")
        // リロード
        let cookies = document.cookie
        let cookiesArray = cookies.split(';')
        for (var c of cookiesArray) {
          let cArray = c.split('=')
          if (cArray[0] == 'flg2') {
            console.log('ready')
          } else {
            document.cookie = "flg2=1;max-age=5"
            location.reload()
          }
        }
        let x = document.getElementById("x")
        let button = document.getElementById("switch")
        let size = 20
        let flg = true
        let count = 0
        let target = document.getElementById('target')
        const sound = new Audio('maracas/maracas.mp3')
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
                  button.innerHTML = "Shake!"
                  sound.load()
                  // 許可を得られた場合、devicemotionをイベントリスナーに追加
                  window.addEventListener('devicemotion', (e) => {
                    // devicemotionのイベント処理
                    target.innerHTML = Math.floor(e.acceleration.x　* 10)　/ 10 
                    if(e.acceleration.x < -5 || e.acceleration.x > 5){
                      if(flg == true){
                        count += 1
                        x.innerHTML = count
                        sound.currentTime = 0
                        sound.play()
                        flg = false
                        console.log(flg)
                      }
                    }
                  })
                } else {
                  // 許可を得られなかった場合の処理
                  button.innerHTML = "error"
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
            // 上記以外のブラウザ
            button.innerHTML = "error"
          }
        }

        // ボタンクリックでrequestDeviceMotionPermission実行
        const startButton = document.getElementById('switch')
        startButton.addEventListener('click',requestDeviceMotionPermission,false)

        sound.onended = ()=>{
          flg = true
          console.log(flg)
        }
      }
    },
  },
}
</script>
