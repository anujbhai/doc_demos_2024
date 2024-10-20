"use strict";
function primitive_l_01_string() {
    // number & string
    let first_name = "John";
    let students = 32;
    let age = 16;
    let num_to_str = (input) => input.toString(); // convert num to str
    let str_to_num = (input) => parseInt(input); // convert str to num
    // boolean
    let min_age = age >= 14 ? true : false;
    console.log(`${first_name} is in a class of ${num_to_str(students)} pupils.`);
    console.log("born in:", str_to_num("2008"));
    min_age
        ? console.log("qualified")
        : console.log("not qualified");
}
module.exports = primitive_l_01_string;
