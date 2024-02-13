import pop from "../pop/index"

const { Container, CanvasRenderer, Text } = pop

// Game setup
const w = 640
const h = 480
const renderer = new CanvasRenderer(w, h)
document.querySelector("#board").appendChild(renderer.view)

// Game objects
const scene = new Container()
const message = new Text("The Renderer!", {
  font: "40pt monospace",
  fill: "DarkRed",
  align: "center",
})

message.pos.x = w / 2
message.pos.y = h / 2
scene.add(message)

// Render the main container
renderer.render(scene)

console.log(scene.children)

