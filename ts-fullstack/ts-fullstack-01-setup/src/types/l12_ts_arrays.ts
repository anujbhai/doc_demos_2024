// basic use
let arr_a: number[] = [1, 2, 3]

let arr_b: string[] = ["one", "two", "three"]

let arr_c: (number | string)[] = [1, 2, 3, "one", "two", "three"]

// dynamic use
type Airplane_arr = {
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

type Airplanes = Airplane_arr[]

const airplanes: Airplanes = [
  {
    flightNumber: "SG101",
    airplaneModel: "A380",
    dateOfDeparture: "01/08/2024",
    timeOfDeparture: "23:10",
    from: "PNQ",
    to: "GHY",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Jacobs",
    }
  },
  {
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
  
]

