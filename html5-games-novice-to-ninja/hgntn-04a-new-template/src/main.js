import pop from "../pop/index"
// import math from "../pop/util/math"

const {
  Container,
  Game,
  Sprite,
  Texture,
} = pop
const game = new Game(640, 300)
const {scene, h} = game;
const textures = {
  spaceship: new Texture("res/images/spaceship.png"),
  bg: new Texture("res/images/bg.png"),
  // building: new Texture("res/images/building.png"),
}

scene.add(new Sprite(textures.bg))

const ships = scene.add(new Container())
ships.pos.x = 80
ships.pos.y = h / 2 - 16

// const buildings = scene.add(new Container())
// const makeRandom = (b, x) => {
//   b.scale.x = math.randf(1, 3)
//   b.scale.y = math.randf(1, 4)
//   b.pos.x = x
//   b.pos.y = h - b.scale.y * 64
// }
// for (let x = 0; x < 20; x++) {
//   const b = buildings.add(new Sprite(textures.building))
//   makeRandom(b, math.rand(w))
// }

// Game setup
for (let i = 0; i < 10; i++) {
  const ship = ships.add(new Sprite(textures.spaceship))

  ship.pivot = { x: 16, y: 16 }
  ship.pos.x = i * 48
}

// ship.pos = { x: 80, y: 120 }
// ship.update = function(dt, t) {
//   // wobbly ship
//   const {scale} = this
//
//   scale.x = Math.abs(Math.sin(t)) + 1
//   scale.y = Math.abs(Math.sin(t * 1.33)) + 1
// }

// Game loop
game.run(dt => {
  const rps = Math.PI * 2 * dt
  // buildings.map(b => {
  //   b.pos.x -= 100 * dt
  //
  //   if (b.pos.x < -80) {
  //     makeRandom(b, w)
  //   }
  // })
  ships.map((s, i) => {
    s.rotation += i * rps
  })
})

