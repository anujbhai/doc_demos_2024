import React from 'react'

import './App.css'
import data from './data'
import AnimalCard from '../AnimalCard'

function show_additional(additional) {
  if (!additional) {
    console.log('additional input not available...')
    return
  }
  const log_info = Object.entries(additional)
    .map(info => `${info[0]}: ${info[1]}`)
    .join('\n')

  console.log(log_info)
}

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>

      {data.map(animal => (
        <AnimalCard
          key={animal.name}
          additional={animal.additional}
          diet={animal.diet}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={show_additional}
          size={animal.size}
        />
      ))}
    </div>
  )
}

export default App
