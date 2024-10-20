function primitive_l_01_string() {
  // number & string
  let first_name: string = "John"
  let students: number = 32
  let age: number = 16
  let num_to_str = (input: number): string => input.toString() // convert num to str
  let str_to_num = (input: string): number => parseInt(input) // convert str to num

  // boolean
  let min_age: boolean = age >= 14 ? true : false

  console.log(`${first_name} is in a class of ${num_to_str(students)} pupils.`)
  console.log("born in:", str_to_num("2008"))
  min_age
    ? console.log("qualified")
    : console.log("not qualified")
}

module.exports = primitive_l_01_string

