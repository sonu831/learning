// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    const len = nums.length - 1;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= len; i++) {
        let sum = 0;
        for (let j = i; j <= len; j++) {
            sum += nums[j];
            max = Math.max(sum, max);
            console.log("sum", sum)
            console.log("max", max)
        }
    }
   return max
};
