/// Merge with Sort the array

/// Merge with Sort the array

// function mergeSortedArray(arr1, arr2) {
//   const a = [...arr1, ...arr2];
//   const len = a.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i; j++) {
//       if (a[j] > a[j + 1]) {
//         [a[j], a[j + 1]] = [a[j + 1], a[j]];
//       }
//     }
//   }

//   return a;
// }

//console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArray(arr1, arr2) {
  const a = [...arr1, ...arr2];
  const len = a.length - 1;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++)
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
  }

  return a;
}

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// //Two Sum 
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     const myMap = new Map();
//     for(i=0;i < nums.length;i++){
//         const diff = target - nums[i];
//         if(myMap.has(diff)){
//             return [myMap.get(diff),i];
//         } 
//         myMap.set(nums[i],i)
//     }
// };

//   const len = nums.length;
//     const arr = [];
    
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (i !== j) {
//                 if (nums[i] + nums[j] === target)
//                     return [i, j]
//             }
//         }
//     }





//Maximum Sub array
