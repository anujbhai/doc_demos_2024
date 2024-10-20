"use strict";
const students = [
    {
        name: "John",
        score: 70,
    },
    {
        name: "Mark",
        score: 90,
    },
];
for (const student of students) {
    console.log("Name:", student.name);
    console.log("Score:", student.score);
}
// Eg. 2
function add_nums(a, b) {
    console.log("cutoff", a + b);
}
add_nums(10, 70);
