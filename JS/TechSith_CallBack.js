//Write the function which sorts the array

// var myArry = [
//   {
//     num: 5,
//     str: "apply",
//   },
//   {
//     num: 7,
//     str: "cabbage",
//   },
//   {
//     num: 1,
//     str: "bag",
//   },
// ];

// myArry.sort(function (var1, var2) {
//   if (var1.str > var2.str) {
//     return 1;
//   } else if (var1.str < var2.str) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(myArry);

Array.prototype.print = function () {
  console.log(this.toString());
};

const ary = [1, 2];
ary.print();
