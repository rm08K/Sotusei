window.onload = function () {
  console.log('js file pass')
  var audioCtx
  var oscillator
  var gain
  var firstflg = true
  let lfo
  let depth
  let touchPannel = document.getElementById('touchPannel')
  let range_Hz = 0
  let range_Lfo = 0
  touchPannel.onmousedown = function() {
    console.log("start")
    stop()
    let range_vol = document.getElementById('slider').value
    try {
      if (firstflg) {
        audioCtx = new AudioContext()
        firstflg = false
      }
      oscillator = audioCtx.createOscillator()
      if (document.getElementById('b1').checked) oscillator.type = 'sine'
      if (document.getElementById('b2').checked) oscillator.type = 'square'
      if (document.getElementById('b3').checked) oscillator.type = 'sawtooth'
      if (document.getElementById('b4').checked) oscillator.type = 'triangle'
      gain = audioCtx.createGain()
      gain.gain.value = range_vol / 100

      lfo = audioCtx.createOscillator();
      depth = audioCtx.createGain();
      depth.gain.value = 50;
      lfo.type = "sine";
      lfo.frequency.value = 10

      hzchange()
      lfochange()
      oscillator.connect(gain)
      gain.connect(audioCtx.destination)
      lfo.connect(depth).connect(oscillator.frequency);
      oscillator.start()
      lfo.start();
    } catch (e) {
      console.log(e)
    }
  }
  let hzchange =　function() {
    oscillator.frequency.value = 100 + 2 * parseInt(document.getElementById('x').innerHTML)
  }
  touchPannel.addEventListener('mousemove', hzchange, false)
  let lfochange = function(){
    lfo.frequency.value = parseInt(document.getElementById('y').innerHTML) / 20
    depth.gain.value = parseInt(document.getElementById('y').innerHTML) / 20
  }
  touchPannel.addEventListener('mousemove', lfochange, false)
  let stop = function()  {
    if (oscillator) {
      oscillator.stop()
      gain.disconnect()
      oscillator.disconnect()
      console.log('stopped')
    }
  }
  touchPannel.addEventListener('mouseup', stop, false)
  touchPannel.addEventListener('mouseleave', stop, false)
}
