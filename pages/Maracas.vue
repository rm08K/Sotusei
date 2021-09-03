<template>
  <div>
    <button id="switch">Start</button>
    <div id="x"></div>
    <div id="target"></div>
  </div>
</template>

<style lang="scss" scoped>
#switch {
  font-size: 20px;
  background-color: #ccc;
  height: 50px;
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
        let size = 20
        let flg = true
        let count = 0
        let target = document.getElementById('target')
        const sound = new Audio('maracas/maracas.mp3')
        const requestDeviceMotionPermission = () => {
          sound.load()
          if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === 'function'
          ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceMotionEvent.requestPermission()
              .then((permissionState) => {
                if (permissionState === 'granted') {
                  target.innerHTML = "done"
                  // 許可を得られた場合、devicemotionをイベントリスナーに追加
                  window.addEventListener('devicemotion', (e) => {
                    // devicemotionのイベント処理
                    target.innerHTML = e.acceleration.x
                    if(e.acceleration.x < -30 || e.acceleration.x > 30){
                      if(flg == true){
                        x.innerHTML += 1
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
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
            // 上記以外のブラウザ
            target.innerHTML = "error"
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
