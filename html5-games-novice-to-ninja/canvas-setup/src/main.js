(function() {
  "use strict"

  const canvas = document.querySelector("#board canvas")
  const ctx = canvas.getContext("2d")
  const { width: w, height: h } = canvas;

  /*
   * Starfield
   * */
  // ctx.fillStyle = "black"
  //
  // ctx.fillRect(0, 0, w, h);
  // ctx.fillStyle = "#555"
  //
  // let x, y, radius
  //
  // for (let i = 0; i < 550; i++) {
  //   x = Math.random() * w
  //   y = Math.random() * h
  //   radius = Math.random() * 3
  //
  //   // draw the star
  //   ctx.beginPath()
  //   ctx.arc(x, y, radius, Math.PI * 2, false)
  //   ctx.fill()
  // }

  /*
   * Canvas text
   * */
  // ctx.font = "20pt courier"
  //
  // const center = w / 2
  // ctx.textAlign = "center"
  //
  // for (let i = 0; i < 11; i++) {
  //   ctx.fillText("if you're in the game", center, i * 40)
  // }
  //
  // ctx.strokeText("strokes the word", center, h - 30)

  /*
   * Draw image
   * */
  // const img = new Image()
  //
  // img.src = "../res/images/rick.png"
  // img.addEventListener("load", draw, false)

  // function draw() {
  //   for (let i = 0; i < 100; i++) {
  //     let x = Math.random() * w - 50
  //     let y = Math.random() * h - 100
  //
  //     ctx.drawImage(img, x, y)
  //   }
  // }

  // function draw() {
  //   const { width, height } = img
  //
  //   for (let i = 0; i < 100; i++) {
  //     let x = Math.random() * w
  //     let y = Math.random() * h
  //     let scale = Math.random()
  //
  //     ctx.drawImage(img, x, y, width * scale, height * scale)
  //   }
  // }

  // function draw() {
  //   ctx.drawImage(img, 170, 140)
  //
  //   for (let i = 0; i < 22; i++) {
  //     ctx.drawImage(
  //       img,
  //       // source
  //       32, 0, 53, 75,
  //       // destination location
  //       i * 20, i * 10,
  //       // destination scale
  //       i * 0.2 * 53, i * 0.2 * 75
  //     )
  //   }
  // }

  /*
   * Transforms
   * */
  ctx.translate(w / 2, h / 2)

  ctx.fillStyle = "black"
  draw()

  ctx.save()
  ctx.fillStyle = "red"
  draw()
  ctx.restore()

  // Back in black
  draw()
  function draw() {
    // Rect stack
    // **********
    // for (let i = 0; i < 100; i++) {
    //   const x = Math.random() * w
    //   const y = Math.random() * h
    //
    //   ctx.fillRect(x, y, 50, 50)
    // }

    // Kleidoscope
    // ***********
    for (let ring = 1; ring < 28; ring++) {
      ctx.fillStyle = `hsl(${ring * 25}, 90%, 50%)`

      for (let dots = 0; dots < ring * 6; dots++) {
        ctx.rotate((Math.PI * 2) / (ring * 6))
        ctx.beginPath()
        ctx.arc(0, ring * 15, 7, 0, Math.PI * 2, true)
        ctx.fill()
      }
    }
  }

  console.log(ctx.canvas)
})()

