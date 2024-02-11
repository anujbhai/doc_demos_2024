import KeyControls from "../lib/KeyControls"
// (function() {
//   "use strict"

// const canvas = document.querySelector("#delta-time canvas")
// const ctx = canvas.getContext("2d")
// const { width: w, height: h } = canvas;
//
// // Game setup
// ctx.strokeStyle = "#FFF"
// ctx.font = "30pt monospace"
//
// const speed = 64
//
// let p1 = 0, p2 = 0
// let dt = 0, last = 0
//
// function loopy(ms) {
//   requestAnimationFrame(loopy)
//
//   const t = ms / 1000
//
//   dt = t - last
//   last = t
//
//   // Game logic
//   ctx.fillStyle = "#000"
//   ctx.fillRect(0, 0, w, h)
//   ctx.strokeText(`Frame length: ${(dt * 1000).toFixed(2)}ms`, 70, 50)
//   ctx.strokeText(`Total time: ${t.toFixed(2)}`, 70, 90)
//
//   p1 += speed * dt
//   p2 += speed * (1 / 60)
//
//   if (p1 > w) p1 -= w + 50
//   if (p2 > w) p2 -= w + 50
//
//   ctx.fillStyle = "#F00"
//   ctx.fillRect(p1, 120, 50, 50)
//   ctx.fillRect(p2, 190, 50, 50)
// }
// requestAnimationFrame(loopy)
// })()

(function() {
  "use strict"

  const canvas = document.querySelector("#keyboard-input canvas")
  const ctx = canvas.getContext("2d")
  const { width: w, height: h } = canvas;
  const controls = new KeyControls()

  // Game setup
  let x = w / 2
  let y = h / 2
  let color = 0

  // const speed = 64
  //
  // let p1 = 0, p2 = 0
  // let dt = 0, last = 0

  function loopy() {
    requestAnimationFrame(loopy)

    // Game logic
    x += controls.x * 3
    y += controls.y * 3

    if (!controls.action) {
      color += 10

      if (color > 360) {
        color -= 360
      }
    }

    // Draw rectangle
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`
    ctx.fillRect(x, y, 50, 50)
  }
  requestAnimationFrame(loopy)
})()
