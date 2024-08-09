import './App.css'
import animals from "../../data/app-data"
import AnimalCard from '../AnimalCard'

function App() {
  return (
    <div className="wrapper">
      {animals.map(animal => 
        <AnimalCard
          key={animal.name}
          diet={animal.diet}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  )
}

export default App
