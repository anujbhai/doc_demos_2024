type Cat2 = {
  name: string
  purrs: boolean
  color: string
}

type Dog2 = {
  name: string
  barks: boolean
  color: string
}

// intersection
type HybridAnimal2 = Cat2 & Dog2

const hybrid_animal2: HybridAnimal2 = {
  name: "Rolex",
  color: "mixed",
  barks: true,
  purrs: true
}

