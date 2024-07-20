// firstname, lastname, age
let person_tuple: [string, string, number?]

person_tuple = ['John', 'Doe', 12]

/*
 * 
 * NumberOfStudents: Number,
 * passing: boolean,
 * 'John', 'Stella',
 *
 * */

type list_of_students = [number, boolean, ...string[]]

const passing_students: list_of_students = [3, true, "John", "Stella", "Rob"]
const failing_students: list_of_students = [1, false, "Scott"]

