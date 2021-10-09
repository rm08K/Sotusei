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
        document.getElementById("btn1").addEventListener("click",() => {
          snd1.currentTime = 0
          snd1.play()
          console.log("pushed")
        })
      }
    },
  },
}
</script>