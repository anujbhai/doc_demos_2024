import pop from "../pop/index"

const {
  Container,
  CanvasRenderer,
  // Text,
  Sprite,
  Texture,
} = pop

// Game setup
const w = 640
const h = 480
const renderer = new CanvasRenderer(w, h)
document.querySelector("#board").appendChild(renderer.view)

// Game objects
const scene = new Container()
const texture = new Texture("res/images/spaceship.png")

for (let i = 0; i < 50; i++) {
  const speed = Math.random() * 150 + 50
  const ship = new Sprite(texture)
  const { pos } = ship

  pos.x = Math.random() * w
  pos.y = Math.random() * h

  ship.update = function(dt) {
    pos.x += speed * dt

    if (pos.x > w) {
      pos.x = -32
    }
  }

  scene.add(ship)
}

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

