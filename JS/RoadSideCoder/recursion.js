//basic multiplication

// const arr = [1, 2, 3, 4];

// function multiplication(array) {
//   const len = array.length;
//   if (len <= 0) return 1;
//   return array[len - 1] * multiplication(array.slice(0, len - 1));
// }

// console.log(multiplication(arr));

// function fac(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//    return num * fac(num - 1);
//   }
// }

// console.log(fac(5));

//create the array from the range
//input 1,5 -- > [1,2,3,4,5]

// function rangeOfArray(start, end) {
//   //BaseCase
//   if (start > end) {
//     console.log("base-start", start);
//     console.log("base-end", end);
//     return [];
//   } else {
//     const num = rangeOfArray(start, end - 1);
//     console.log("start", start);
//     console.log("end", end);
//     num.push(end);
//     return num;
//   }
// }

// console.log(rangeOfArray(1, 5));

function fab(n) {
  
  if (n < 1) {
    console.log("base-case", n);
    return [0, 1];
  } else {
    const num = fab(n - 1);
    console.log("num", num);
    console.log("n", n);
    num.push(n);
    return num;
  }
}

console.log(fab(4));
