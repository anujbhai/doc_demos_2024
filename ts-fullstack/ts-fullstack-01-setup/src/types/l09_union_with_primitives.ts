type StrOrNum = string | number

function add_num_or_str(a: StrOrNum, b: StrOrNum) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b
  } else {
    return a.toString() + b.toString()
  }
}

console.log(add_num_or_str(55, 155))
console.log(add_num_or_str(55, "155"))

