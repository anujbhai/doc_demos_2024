type AirplaneInSig = {
  flightNumber: string
  airplaneModel: string
  dateOfDeparture: string
  timeOfDeparture: string
  from: string
  to: string
  seats: {
    [key: string]: string // index signature
  }
}

const airplaneInSig: AirplaneInSig = {
  flightNumber: "SG102",
  airplaneModel: "A380",
  dateOfDeparture: "01/08/2024",
  timeOfDeparture: "23:10",
  from: "PNQ",
  to: "GHY",
  seats: {
    "10A": "Mark Thomas",
    "10B": "John Jacobs",
  }
}

