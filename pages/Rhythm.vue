<template>
  <div class="rhythmContainer">
    <button id="btn1" class="rBtn">Tap!</button>
    <button id="btn2" class="rBtn">Tap!</button>
    <button id="btn3" class="rBtn">Tap!</button>
    <button id="btn4" class="rBtn">Tap!</button>
    <button id="btn5" class="mainrBtn">Tap!</button>
    <button id="btn6" class="rBtn">Tap!</button>
    <button id="btn7" class="rBtn">Tap!</button>
    <button id="btn8" class="rBtn">Tap!</button>
    <button id="btn9" class="rBtn">Tap!</button>
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

.rBtn, .mainrBtn {
  height: calc(100vh / 3);
  border-radius: 0;
}

.hidden {
  visibility: hidden;
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
        const snd1 = new Audio('rhythm/GlassScrape3.wav')
        const snd2 = new Audio('rhythm/MetalPipe3.wav')
        const snd3 = new Audio('rhythm/MouthClickReverb1.wav')
        const snd4 = new Audio('rhythm/WoodenPlankSnap1.wav')
        const snd5 = new Audio('rhythm/魔王魂  ドラム2-タム2.mp3')
        const snd6 = new Audio('rhythm/魔王魂  ピアノ1-Fコード.mp3')
        const snd7 = new Audio('rhythm/魔王魂  ベース02.mp3')
        const snd8 = new Audio('rhythm/魔王魂  ベース05.mp3')
        const bgm1 = new Audio('rhythm/erec drum.m4a')
        let elements = document.getElementsByClassName("rBtn")
        Array.prototype.forEach.call(elements, function (element) {
            element.classList.add("hidden")
        })
        document.getElementById('btn5').addEventListener('click', () => {
          if (flg == false) {
            bgm1.currentTime = 0
            bgm1.play()
            bgm1.loop = true
            setTimeout(()=>{
              flg = true
            },100)
            // flg = true
            console.log(flg)
            Array.prototype.forEach.call(elements, function (element) {
            element.classList.remove("hidden")
            })
          }
        })
        document.getElementById('btn1').addEventListener('click', () => {
          snd1.currentTime = 0
          snd1.play()
          console.log('pushed')
        })
        document.getElementById('btn2').addEventListener('click', () => {
          snd2.currentTime = 0
          snd2.play()
          console.log('pushed')
        })
        document.getElementById('btn3').addEventListener('click', () => {
          snd3.currentTime = 0
          snd3.play()
          console.log('pushed')
        })
        document.getElementById('btn4').addEventListener('click', () => {
          snd4.currentTime = 0
          snd4.play()
          console.log('pushed')
        })
        document.getElementById('btn5').addEventListener('click', () => {
          if (flg == true) {
            snd5.currentTime = 0
            snd5.play()
            console.log('pushed')
          }
        })
        document.getElementById('btn6').addEventListener('click', () => {
          snd6.currentTime = 0
          snd6.play()
          console.log('pushed')
        })
        document.getElementById('btn7').addEventListener('click', () => {
          snd7.currentTime = 0
          snd7.play()
          console.log('pushed')
        })
        document.getElementById('btn8').addEventListener('click', () => {
          snd8.currentTime = 0
          snd8.play()
          console.log('pushed')
        })
      }
    },
  },
}
</script>
