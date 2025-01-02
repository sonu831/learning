// Relative Indexing Method.

// const nums = [1,2,3,4,5]
// console.log(nums.at(-1))  // -->5

const someObject = {
  someProps: "something",
};

//console.log(someObject.hasOwnProperty("someProps"));

console.log(Object.hasOwn(someObject, "someProps")); //
