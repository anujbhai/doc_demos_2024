const canvas = document.querySelector("#board canvas")
const ctx = canvas.getContext("2d")
const { width: w, height: h } = canvas;
// const controls = new KeyControls()
const mouse = new MouseControls(canvas)

// Game setup
// let x = w / 2
// let y = h / 2
let color = 0

ctx.strokeStyle = "#000"
ctx.lineWidth = 1
ctx.strokeRect(0, 0, w, h)

function loopy() {
  requestAnimationFrame(loopy)

  // Game logic
  // x += controls.x * 3
  // y += controls.y * 3
  //
  // if (!controls.action) {
  //   color += 10
  //
  //   if (color > 360) {
  //     color -= 360
  //   }
  // }
  const x = mouse.pos.x
  const y = mouse.pos.y

  if (mouse.pressed) {
    color += 10

    if (color > 360) {
      color -= 360
    }
  }

  // Draw rectangle
  ctx.fillStyle = `hsl(${color}, 50%, 50%)`
  // ctx.fillRect(x, y, 50, 50)
  ctx.fillRect(x - 25, y - 25, 50, 50)

  mouse.update()
}
requestAnimationFrame(loopy)
