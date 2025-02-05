var testArray = [{ id: 1, name: "Apple" }, { id: 2, name: "Banana" }];
var result = testArray.filter(function (item) { return item.id === 2; })[0] || undefined;
console.log(result); // Should print: { id: 2, name: "Banana" }
