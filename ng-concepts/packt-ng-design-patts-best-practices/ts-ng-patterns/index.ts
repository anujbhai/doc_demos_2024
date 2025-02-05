const testArray = [{ id: 1, name: "Apple" }, { id: 2, name: "Banana" }];
const result = testArray.filter(item => item.id === 2)[0] || undefined;
console.log(result);  // Should print: { id: 2, name: "Banana" }


