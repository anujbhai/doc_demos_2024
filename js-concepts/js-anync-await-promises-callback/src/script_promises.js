(function() {
  // callback
  let stock = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  }

  let isShopOpen = true

  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(() => {
          resolve(work())
        }, time);
      } else {
        reject(console.log('Sorry! The shop is closed. Please come back tomorrow. '))
      }
    })
  }

  order(2000, () => console.log(stock.fruits[0]))
    .then(() => {
      return order(
        0,
        () => console.log("... order recieved, started production.")
      )
    }) 
    .then(() => {
      return order(
        2000,
        () => console.log('... fruit is chopped and ready.')
      )
    })
    .then(() => {
      return order(
        1000,
        () => console.log(`... ${stock.liquid[0]} and ${stock.liquid[1]} added.`)
      )
    })
    .then(() => {
      return order(
        1000,
        () => console.log('... started, The Machine!!')
      )
    })
    .then(() => {
      return order(
        2000,
        () => console.log(`... ${stock.holder[0]} placed.`)
      )
    })
    .then(() => {
      return order(
        3000,
        () => console.log(`... topping of ${stock.toppings[0]} added.`)
      )
    })
    .then(() => {
      return order(
        2000,
        () => console.log('Served!')
      )
    })
    .catch(err => err)
    .finally(() => console.log('The day is done. Shop will open tomorrow.'))
})()

