import pop from "../pop/index"

const { Container, CanvasRenderer, Text, Texture } = pop

// Game setup
const w = 640
const h = 480
const renderer = new CanvasRenderer(w, h)
document.querySelector("#board").appendChild(renderer.view)

// Game objects
const scene = new Container()
const texture = new Texture("../res/images/spaceship.png")
const message = new Text("The Renderer!", {
  font: "40pt monospace",
  fill: "blue",
})

message.pos = { x: w, y: h / 2 }
message.update = function(dt, t) {
  const { pos } = this

  pos.x -= 100 * dt
  pos.y += Math.sin(t / 100)

  if (pos.x < -420) {
    pos.x = w
  }
}
scene.add(message)

// Render the main container
let dt = 0
let last = 0

function loopy(ms) {
  requestAnimationFrame(loopy)

  const t = ms / 1000
  dt = t - last
  last = t

  scene.update(dt, t)
  renderer.render(scene)
}
requestAnimationFrame(loopy)

console.log(scene.children)

