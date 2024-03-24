(function() {
  // callback
  let stock = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  }

  let isShopOpen = false

  function timeFn(ms) {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(resolve, ms)
      } else {
        reject(console.log('Shop is closed. Please come back tomorrow.'))
      }
    })
  }

  async function kitchen() {
    try {
      await timeFn(2000)
      console.log(`${stock.fruits[2]}`)

      await timeFn()
      console.log("... order recieved, started production.")

      await timeFn(2000)
      console.log("... fruit is chopped and ready.")

      await timeFn(1000)
      console.log(`... ${stock.liquid[0]} and ${stock.liquid[1]} added.`)

      await timeFn(1000)
      console.log(`... started. the Machine!!`)

      await timeFn(2000)
      console.log(`... ${stock.holder[0]} placed.`)

      await timeFn(3000)
      console.log(`... topping of ${stock.toppings[0]} added.`)

      await timeFn(2000)
      console.log("Served!")
    } catch (err) {
      console.log('Ice cream is not available.', err)
    } finally {
      console.log('.. We\'ll be back with more ice cream ..')
    }
  }

  kitchen()

})()

