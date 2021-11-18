<template>
  <div class="smartcoilContainer">
    <button id="smartCoil-button">Tap!</button>
    <div class="smartCoil-coordinate">
      <div id="smartCoil-x"></div>
      <div id="smartCoil-y"></div>
      <div id="smartCoil-z"></div>
    </div>
    <div id="smartCoil-target"></div>
  </div>
</template>

<style lang="scss" scoped>
.smartcoilContainer {
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
    this.coil()
  },
  methods: {
    coil() {
      if (process.client) {
        console.log('version0.1')
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
                  window.addEventListener('deviceorientation', (e) => {
										// deviceorientationのイベント処理
										x.innerHTML = parseInt(e.beta)
										y.innerHTML = parseInt(e.gamma)
										z.innerHTML = parseInt(e.alpha)
                  })
                } else {
									// 許可を得られなかった場合の処理
									button.innerHTML = "Error1"
                }
              })
              .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
          } else {
						// 上記以外のブラウザ
						button.innerHTML = "Error2"
          }
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
