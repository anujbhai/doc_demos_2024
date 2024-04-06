function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2
  }

  return "please provide a valid number"
}

