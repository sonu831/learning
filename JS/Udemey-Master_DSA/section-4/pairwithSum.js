//Google Interview we need to create the pair with sum of two.
// [6,4,3,2,1,7] an sum is 9 output will be [7,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Better soltion
var twoSum = function (nums, target) {
  const myMap = new Map();
  for (i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (myMap.has(diff)) {
      return [myMap.get(diff), i];
    }
    myMap.set(nums[i], i);
  }
};

var twoSum1 = function (nums, target) {
  const len = nums.length;
  const arr = [];

  const myMap = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  }
};


