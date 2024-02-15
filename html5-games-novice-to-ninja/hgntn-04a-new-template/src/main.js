import pop from "../pop/index"

const {
  Container,
  CanvasRenderer,
  KeyControls,
  Sprite,
  Text,
  Texture,
} = pop

// Game setup
const w = 640
const h = 300
const renderer = new CanvasRenderer(w, h)
document.querySelector("#board").appendChild(renderer.view)

// Game objects
const scene = new Container()
const textures = {
  background: new Texture("../res/images/bg.png"),
  baddie: new Texture("../res/images/baddie.png"),
  bullet: new Texture("../res/images/bullet.png"),
  spaceship: new Texture("../res/images/spaceship.png"),
}
const controls = new KeyControls()

// create spaceship
const ship = new Sprite(textures.spaceship)
const { pos } = ship

pos.x = 120
pos.y = h / 2

ship.update = function(dt) {
  // Update player position
  const { pos } = this

  pos.x += controls.x * dt * 200
  pos.y += controls.y * dt * 200

  if (pos.x < 0) pos.x = 0
  if (pos.x > w) pos.x = w
  if (pos.y < 0) pos.y = 0
  if (pos.y > h) pos.y = h
}

// Bullets
const bullets = new Container()

function fireBullet(x, y) {
  const bullet = new Sprite(textures.bullet)

  bullet.pos.x = x
  bullet.pos.y = y
  bullet.update = function(dt) {
    this.pos.x += 400 * dt
  }

  bullets.add(bullet)
}

scene.add(new Sprite(textures.background))
scene.add(ship)
scene.add(bullets)

let lastShot = 0

// Baddies
const baddies = new Container()

function spawnBaddies(x, y, speed) {
  const baddie = new Sprite(textures.baddie)

  baddie.pos.x = x
  baddie.pos.y = y
  baddie.update = function(dt) {
    this.pos.x += speed * dt
  }

  baddies.add(baddie)
}

scene.add(baddies)

let lastSpawn = 0
let spawnSpeed = 1.0

function doGameOver() {
  const gameOverMessage = new Text("Game Over", {
    font: "30pt sans-serif",
    fill: "#888994",
    align: "center",
  })

  gameOverMessage.pos.x = w / 2
  gameOverMessage.pos.y = 120

  scene.add(gameOverMessage)
  scene.remove(ship)
  gameOver = true
}

// Add the score game object
const score = new Text("score:", {
  font: "20px sans-serif",
  fill: "#888994",
  align: "center",
})
score.pos.x = w / 2
score.pos.y = h - 30

scene.add(score)

let scoreAmount = 0
let gameOver = false

// Render the main container
let dt = 0
let last = 0

function loopy(ms) {
  requestAnimationFrame(loopy)

  const t = ms / 1000
  dt = t - last
  last = t

  // Game logic code
  ship.pos.x += Math.sin(t * 10)
  score.text = `score: ${scoreAmount}`
  if (!gameOver && controls.action && t - lastShot > 0.15) {
    lastShot = t
    fireBullet(ship.pos.x + 24, ship.pos.y + 10)
  }

  // Check for collisions, or out of screen
  baddies.children.forEach(baddie => {
    // Destroy bullets when they fo out of the screen
    bullets.children.forEach(bullet => {
      // Check distance between baddie and bullet
      const dx = baddie.pos.x + 16 - (bullet.pos.x + 8)
      const dy = baddie.pos.y + 16 - (bullet.pos.y + 8)

      if (Math.sqrt(dx * dx + dy * dy) < 24) {
        // A hit!
        baddie.dead = true
        bullet.dead = true

        scoreAmount += Math.floor(t)
      }

      // bullet out of screen
      if (bullet.pos.x >= w + 20) {
        bullet.dead = true
      }
    })

    // Check if out of screen
    if (baddie.pos.x < -32) {
      if (!gameOver) {
        doGameOver()
      }

      baddie.dead = true
    }
  })

  // Spawn baddies
  if (t - lastSpawn > spawnSpeed) {
    lastSpawn = t

    const speed = -50 - (Math.random() * Math.random() * 100)
    const position = Math.random() * (h - 24)

    spawnBaddies(w, position, speed)

    // Accelerating for the next spawn
    spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001
  }

  scene.update(dt, t)
  renderer.render(scene)
}
requestAnimationFrame(loopy)

console.log(scene.children)

