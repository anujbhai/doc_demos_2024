type Dog1 = {
  name: string
  barks: boolean
  wags_tail: boolean
}

type Cat1 = {
  name: string
  purrs: boolean
}

type DogCatUnion = Dog1 | Cat1

let dog1: DogCatUnion = {
  name: "Rolex",
  barks: true,
  wags_tail: true,
}

let cat1: DogCatUnion = {
  name: "Sanjuro",
  purrs: true,
}

// hybrid usage
let hybrid_animal: DogCatUnion = {
  name: 'felincaninasaur',
  barks: true,
  wags_tail: false,
  purrs: true,
}

