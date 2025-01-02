// - Create a function that converts a JavaScript value to a JSON string.
// - Write a function that performs a deep copy of a value, ensuring it handles circular references correctly.
// - Implement a function that converts a JSON string back into a JavaScript value.
// - Create a function that merges two objects, deeply combining their properties.
// - Implement a function that deep freezes an object, preventing any changes.
// - Write a custom polyfill for the typeof operator that returns the correct type of a JavaScript value.
// - Create a function that converts a JavaScript object into a query string.
// - Write a function that parses a query string back into a JavaScript object.
// - Develop a function that returns the longest word in a string.

//- Create a function that converts a JavaScript value to a JSON string.

// const obj = {
//   abc: "abc",
// };
// const convertToJsonString = () => {
//   return JSON.stringify(obj);
// };
// console.log(convertToJsonString(obj));

//// - Write a function that performs a deep copy of a value, ensuring it handles circular references correctly.

let obj = {
  name: "John",
  age: 30,
};

obj.self = obj;
console.log(obj); //<ref *1> { name: 'John', age: 30, self: [Circular *1] }

console.log(JSON.stringify(obj));

//Now how to handle this circular reference correctly

// function deepCopy(value, seen = new Map()) {
//   if (value === null || typeof value !== "object") {
//     return value;
//   }

//   if (seen.has(value)) {
//     return seen.get(value);
//   }

//   let copy;

//   copy = {};
//   seen.set(value, copy);
//   for (let key in value) {
//     if (value.hasOwnProperty(key)) {
//       copy[key] = deepCopy(value[key], seen);
//     }
//   }

//   return copy;
// }

// const obj = {
//   name: "John",
// };
// obj.circularRef = obj;

// const copiedObj = deepCopy(obj);
// console.log(copiedObj);


