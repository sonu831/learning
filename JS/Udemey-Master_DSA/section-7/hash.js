// 13. Roman to Integer
// Easy
// Topics
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//   const romanMap = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     const current = romanMap[s[i]];
//     const next = romanMap[s[i + 1]];
//     if (next > current) {
//       sum += next - current;
//       i++;
//     } else {
//       sum += current;
//     }
//   }
//   return sum;
// };

// console.log(romanToInt("MCMXCIV")); //58

// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function (num) {
//   const romanMap = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",
//   };

//    while(num!==0){
//     if(1<num <5){

//     }
//    }
// };

// class Solution {
//     public:
//         string intToRoman(int num) {
//             string ones[] = {"","I","II","III","IV","V","VI","VII","VIII","IX"};
//             string tens[] = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
//             string hrns[] = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
//             string ths[]={"","M","MM","MMM"};
            
//             return ths[num/1000] + hrns[(num%1000)/100] + tens[(num%100)/10] + ones[num%10];
//         }
//     };
// console.log(intToRoman(1994)); //58
