// Eg. 1
type Student = {
  name: string
  score: number
}
const students: Student[] = [
  {
    name: "John",
    score: 70,
  },
  {
    name: "Mark",
    score: 90,
  },
]

for (const student of students) {
  console.log("Name:", student.name)
  console.log("Score:", student.score)
}

// Eg. 2
function add_nums(a: number, b: number): number {
  return a + b
}
console.log("cutoff", add_nums(10, 70))


