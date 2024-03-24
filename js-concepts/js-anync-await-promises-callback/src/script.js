(function() {
  // callback
  let stock = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  }

  let order = (flavor_name, call_production) => {
    setTimeout(() => {
      console.log(`${stock.fruits[flavor_name]}`)

      call_production()
    }, 2000)
  }

  let production = () => {
    setTimeout(() => {
      console.log("... order recieved, started production.")

      setTimeout(() => {
        console.log("... fruit is chopped and ready.")

        setTimeout(() => {
          console.log(`... ${stock.liquid[0]} and ${stock.liquid[1]} added.`)

          setTimeout(() => {
            console.log("... started, The Machine!!")

            setTimeout(() => {
              console.log(`... ${stock.holder[0]} placed.`)

              setTimeout(() => {
                console.log(`... topping of ${stock.toppings[0]} added.`)

                setTimeout(() => {
                  console.log("Served!")
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000)
        }, 1000)
      }, 2000)
    }, 0)
  }

  order(1, production)
})()

