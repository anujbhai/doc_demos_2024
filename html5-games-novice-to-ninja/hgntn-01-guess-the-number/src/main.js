(function() {
  "use strict"

  const my_guess = Math.floor(Math.random() * 20) + 1

  let guesses = 0
  let guess

  while(guess !== my_guess) {
    guess = parseInt(prompt("What number am I thinking of?"), 10)

    guesses++

    if (guess < my_guess) {
      alert("Too low!")
    } else if (guess > my_guess) {
      alert("Too high!")
    }

    console.log("my guess:", my_guess)
    console.log("guess:", guess)
    console.log("guesses:", guesses)
  }
  
  alert(`Well done! you got it in ${guesses}.`)
}) ()

