<template>
  <div class="container">
    <button id="switch">Tap!</button>
    <div id="x"></div>
    <div id="target"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
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
        let x = document.getElementById("x")
        let button = document.getElementById("switch")
        let size = 20
        let flg = true
        let count = 0
        let target = document.getElementById('target')
        const sound = new Audio('maracas/maracas.wav')
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
                  sound.load()
                  // 許可を得られた場合、devicemotionをイベントリスナーに追加
                  window.addEventListener('devicemotion', (e) => {
                    // devicemotionのイベント処理
                    target.innerHTML = e.acceleration.x
                    if(e.acceleration.x < -10 || e.acceleration.x > 10){
                      if(flg == true){
                        count += 1
                        x.innerHTML = count
                        sound.play()
                        flg = false
                        sound.onended = ()=>{
                          flg = true
                        }
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
      }
    },
  },
}
</script>
