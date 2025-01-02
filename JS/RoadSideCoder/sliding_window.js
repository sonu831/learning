// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   const len = nums.length;
//   let slidingIndex = 0;
//   const winds = [];

//   while (slidingIndex <= len - k) {
//     const slide = [];

//     for (let i = slidingIndex; i < slidingIndex + k; i++) {
//       slide.push(nums[i]);
//     }
//     const maximum = Math.max(...slide);
//     console.log(slide);
//     winds.push(maximum);
//     slidingIndex++;
//   }

//   return winds;
// };

var maxSlidingWindow = function (nums, k) {
    const len = nums.length;
    const result = [];

    for (let slidingIndex = 0; slidingIndex <= len - k; slidingIndex++) {
        let max = nums[slidingIndex]
        for (let j = slidingIndex + 1; j < slidingIndex + k; j++) {
            if (nums[j] > max) {
                max = nums[j]
            }
        }
        result.push(max)
    }

    return result;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const target = 3;
console.log(maxSlidingWindow(nums, target));
