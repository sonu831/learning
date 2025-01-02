// Given a string s, find the
//first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

const firstNonRepeating = (s) => {
  const len = str.length;
  const mp = {};

  for (let value of s) {
    const seen = mp[value];
    if (!seen) {
      mp[value] = 1;
    } else {
      mp[value] = seen + 1;
    }
  }

  for (let key in s) {
    const char = s[key];
    if (mp[char] === 1) {
      return key;
    }
  }

  return -1;
};

const str = "leetcode";

console.log(firstNonRepeating(str));
