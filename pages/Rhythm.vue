<template>
  <div class="rhythmContainer">
    <button id="btn1" class="rBtn">Click!</button>
    <button id="btn2" class="rBtn">Click!</button>
    <button id="btn3" class="rBtn">Click!</button>
    <button id="btn4" class="rBtn">Click!</button>
    <button id="btn5" class="rBtn">Click!</button>
    <button id="btn6" class="rBtn">Click!</button>
    <button id="btn7" class="rBtn">Click!</button>
    <button id="btn8" class="rBtn">Click!</button>
    <button id="btn9" class="rBtn">Click!</button>
    <div id="startBtn" class="rhythm-firstView">
      <p class="rhythm-startBtn">Click to Start</p>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.rhythmContainer {
  display: grid;
  grid-template-rows: 33.3% 33.3% 1fr;
  grid-template-columns: 33.3% 33.3% 1fr;
  background-color: #222;
}

.rhythm {
  &-firstView {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #222;
    justify-content: center;
    align-items: center;
  }
  &-startBtn {
    display: block;
    padding: 20px 50px;
    border: 2px solid #111;
    background-color: #fff;
  }
}

.rBtn {
  height: calc(100vh / 3);
  border: 2px solid black;
  border-radius: 0;
  font-family: "Arial Black", Arial, Helvetica, sans-serif;
}

.hidden {
  visibility: hidden;
}

.f1 {
  font-size: 36px;
}

.f2 {
  font-size: 34px;
}

.f3 {
  font-size: 32px;
}

.f4 {
  font-size: 30px;
}

.f5 {
  font-size: 28px;
}

.push {
  background-color: #000;
  animation: pused 0.5s ease;
}

@keyframes pused {
  0% {
    background-color: #000;
  }
  100% {
    background-color: #fff;
  }
}
</style>

<script>
export default {
  mounted() {
    this.rhythm()
  },
  methods: {
    rhythm() {
      if (process.client) {
        console.log('ver1.0')
        let flg = false
        const snd1 = new Audio('rhythm/rh01.mp3')
        const snd2 = new Audio('rhythm/rh02.mp3')
        const snd3 = new Audio('rhythm/rh03.mp3')
        const snd4 = new Audio('rhythm/rh04.mp3')
        const snd5 = new Audio('rhythm/rh05.mp3')
        const snd6 = new Audio('rhythm/rh06.mp3')
        const snd7 = new Audio('rhythm/rh07.mp3')
        const snd8 = new Audio('rhythm/rh08.mp3')
        const snd9 = new Audio('rhythm/rh09.mp3')
        let bgm1 = new Audio('rhythm/base_rhythm.m4a')
        let elements = document.getElementsByClassName('rBtn')
        document.getElementById('startBtn').addEventListener('click', () => {
          bgm1.currentTime = 0
          bgm1.play()
          bgm1.loop = true
          document.getElementById('startBtn').classList.add('hidden')
          setInterval(fontRhythm, 470)
        })
        document.getElementById('btn1').addEventListener('click', () => {
          snd1.currentTime = 0
          snd1.play()
          colorChanger('btn1')
          console.log('pushed')
        })
        document.getElementById('btn2').addEventListener('click', () => {
          snd2.currentTime = 0
          snd2.play()
          colorChanger('btn2')
          console.log('pushed')
        })
        document.getElementById('btn3').addEventListener('click', () => {
          snd3.currentTime = 0
          snd3.play()
          colorChanger('btn3')
          console.log('pushed')
        })
        document.getElementById('btn4').addEventListener('click', () => {
          snd4.currentTime = 0
          snd4.play()
          colorChanger('btn4')
          console.log('pushed')
        })
        document.getElementById('btn5').addEventListener('click', () => {
          snd5.currentTime = 0
          snd5.play()
          colorChanger('btn5')
          console.log('pushed')
        })
        document.getElementById('btn6').addEventListener('click', () => {
          snd6.currentTime = 0
          snd6.play()
          colorChanger('btn6')
          console.log('pushed')
        })
        document.getElementById('btn7').addEventListener('click', () => {
          snd7.currentTime = 0
          snd7.play()
          colorChanger('btn7')
          console.log('pushed')
        })
        document.getElementById('btn8').addEventListener('click', () => {
          snd8.currentTime = 0
          snd8.play()
          colorChanger('btn8')
          console.log('pushed')
        })
        document.getElementById('btn9').addEventListener('click', () => {
          snd9.currentTime = 0
          snd9.play()
          colorChanger('btn9')
          console.log('pushed')
        })
        let fontRhythm = function () {
          Array.prototype.forEach.call(elements, function (element) {
            element.classList.remove('f5')
          })
          Array.prototype.forEach.call(elements, function (element) {
            element.classList.add('f1')
          })
          console.log('roop')
          setTimeout(() => {
            Array.prototype.forEach.call(elements, function (element) {
              element.classList.remove('f1')
            })
            Array.prototype.forEach.call(elements, function (element) {
              element.classList.add('f2')
            })
            setTimeout(() => {
              Array.prototype.forEach.call(elements, function (element) {
                element.classList.remove('f2')
              })
              Array.prototype.forEach.call(elements, function (element) {
                element.classList.add('f3')
              })
              setTimeout(() => {
                Array.prototype.forEach.call(elements, function (element) {
                  element.classList.remove('f3')
                })
                Array.prototype.forEach.call(elements, function (element) {
                  element.classList.add('f4')
                })
                setTimeout(() => {
                  Array.prototype.forEach.call(elements, function (element) {
                    element.classList.remove('f4')
                  })
                  Array.prototype.forEach.call(elements, function (element) {
                    element.classList.add('f5')
                  })
                }, 50)
              }, 50)
            }, 50)
          }, 50)
        }

        let colorChanger = function (num) {
          document.getElementById(`${num}`).classList.add('push')
          setTimeout(() => {
            document.getElementById(`${num}`).classList.remove('push')
          }, 300)
        }

        // ページ遷移時の処理
        history.replaceState(
          null,
          document.getElementsByTagName('title')[0].innerHTML,
          null
        )
        window.addEventListener('popstate', function (e) {
          location.reload()
        })
      } //終了
    },
  },
}
</script>
