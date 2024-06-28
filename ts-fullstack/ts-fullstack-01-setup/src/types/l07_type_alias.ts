type Caterer = {
  name: string
  address: string
  phone: number
}

type Ship = {
  model: string
  flightNumber: string
  timeOfDeparture: Date
  timeOfArrival: Date
  caterer: Caterer
}

const airplane: Ship = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special food Ltd.",
    address: "484, Some Street, New York",
    phone: 1452125,
  },
}

console.log(airplane.model)

