// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//0,1,1,2,3
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

var fib = function (n) {
  let num1 = 0;
  let num2 = 1;
  let result = 0;
  if (n == 0) {
    console.log(num1 + " ");
    return;
  } else if (n == 1) {
    console.log(num2 + " ");
    return;
  } else {
    console.log(num1 + " ");
    console.log(num2 + " ");
  }

  for (let k = 2; k <= n; k++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
    console.log(result + " ");
  }
};

fib(5);
