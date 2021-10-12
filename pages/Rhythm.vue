<template>
  <div class="container">
    <button id="btn1" class="btn">Tap!</button>
    <button id="btn2" class="btn">Tap!</button>
    <button id="btn3" class="btn">Tap!</button>
    <button id="btn4" class="btn">Tap!</button>
    <button id="btn5" class="btn">Tap!</button>
    <button id="btn6" class="btn">Tap!</button>
    <button id="btn7" class="btn">Tap!</button>
    <button id="btn8" class="btn">Tap!</button>
    <button id="btn9" class="btn">Tap!</button>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }

  .container {
    display: grid;
    grid-template-rows: 33.3% 33.3% 1fr;
    grid-template-columns: 33.3% 33.3% 1fr;
  }

  .btn{
    height: calc(100vh / 3);
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
        console.log("ver1.0")
        const snd1 = new Audio("rhythm/魔王魂  ドラム2-タム2.mp3")
        const snd2 = new Audio("rhythm/魔王魂  ピアノ1-Fコード.mp3")
        const snd5 = new Audio("rhythm/059_dr_bpm140_4-4_rock.mp3")
        document.getElementById("btn1").addEventListener("click",() => {
          snd1.currentTime = 0
          snd1.play()
          console.log("pushed")
        })
        document.getElementById("btn2").addEventListener("click",() => {
          snd2.currentTime = 0
          snd2.play()
          console.log("pushed")
        })
        document.getElementById("btn5").addEventListener("click",() => {
          snd5.currentTime = 0
          snd5.play()
          snd5.loop = true
          console.log("pushed")
        })
      }
    },
  },
}
</script>