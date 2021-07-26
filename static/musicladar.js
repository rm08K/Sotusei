window.onload = function () {
  console.log('s')
  // AudioContext
  var audioCtx
  // オシレータ
  var oscillator
  // ゲイン
  var gain

  var firstflg = true
  // this.document.getElementById('touchPannel').onmousedown = function(){
  //   console.log("g")
  // }

  this.document.getElementById('touchPannel').onmousedown = function() {
    console.log("d")
    stop()

    var range_vol = document.getElementById('slider').value
    // document.getElementById('msg_vol').innerHTML = parseInt(range_vol, 10) + '%'

    // var range_Hz = document.getElementById('range_Hz').value
    // document.getElementById('msg_Hz').innerHTML = parseInt(range_Hz, 10) + 'Hz'

    try {
      if (firstflg) {
        // AudioContextの生成
        audioCtx = new AudioContext()
        firstflg = false
      }
      // 波形
      oscillator = audioCtx.createOscillator()
      if (document.getElementById('b1').checked) oscillator.type = 'sine'
      if (document.getElementById('b2').checked) oscillator.type = 'square'
      if (document.getElementById('b3').checked) oscillator.type = 'sawtooth'

      // 周波数
      // oscillator.frequency.value = range_Hz

      // ゲイン(音量)
      gain = audioCtx.createGain()
      gain.gain.value = range_vol / 100

      oscillator.connect(gain)
      gain.connect(audioCtx.destination)
      oscillator.start()
    } catch (e) {
      console.log(e)
    }
  }

  function stop() {
    if (oscillator) {
      oscillator.stop()

      gain.disconnect()
      oscillator.disconnect()
    }
  }
}
