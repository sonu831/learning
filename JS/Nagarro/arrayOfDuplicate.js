// Duplicates in an array in O(n) and by using O(1) extra space | Set-2
// Last Updated : 12 Sep, 2023
// Given an array of n elements containing elements from 0 to n-1, with any of these numbers appearing any number of times, find these repeating numbers in O(n) and using only constant memory space.

// Example:

// Input: n = 7 , array = {1, 2, 3, 1, 3, 6, 6}
// Output: 1, 3 and 6.
// Explanation: Duplicate element in the array are 1 , 3 and 6

// Input: n = 6, array = {5, 3, 1, 3, 5, 5}
// Output: 3 and 5.
// Explanation: Duplicate element in  the array are 3 and 5

const duplicate = function (array) {
  const obj = {};
  const finalArray = [];
  const sortedArray = array.sort((a, b) => a - b);
  for (let value of sortedArray) {
    if (obj[value]) {
      finalArray.push(value);
    } else {
      obj[value] = true;
    }
  }
  return finalArray;
};

console.log(duplicate([1, 2, 3, 1, 3, 6, 6]));
