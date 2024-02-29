import pop from "../../pop/index"
import math from "../../pop/util/math"

const {
  TileSprite,
  Texture,
} = pop
const texture = {
  mainCharacter: new Texture("res/images/player-walk.png")
}

class Squizz extends TileSprite {
  constructor() {
    super(texture.mainCharacter, 32, 32)
    this.speed = math.randf(0.05, 0.15)
  }

  update(dt, t) {
    const {speed} = this
    this.frame.x = Math.floor(t / speed) % 4
  }
} 

export default Squizz
