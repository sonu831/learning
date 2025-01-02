// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

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


//Brute force attach
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     const len = nums.length
//     if (len < 2) return []
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             const num1 = nums[i];
//             const num2 = nums[j];
//             if ((num1 + num2) === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

//Using Object 
var twoSum = function (nums, target) {
    const len = nums.length;

    const obj = {};


    for (let i = 0; i < len; i++) {
        obj[nums[i]] = i
    }

    for (let k = 0; k < len; k++) {
        const atK = nums[k];
        const sub = Number(target) - Number(atK);
        const secondVal = obj[sub];
        if (secondVal && secondVal != k) {
            return [k, secondVal]
        }
    }

    return []
};