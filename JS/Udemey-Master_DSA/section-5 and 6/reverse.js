//Create s function to reverse the strings

//

function rev(arr) {
  const revArr = [];
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

//console.log(rev([1, 2, 3, 4]));

function reverseString1(str){
    return str.split('').reverse().split();
}

console.log(reverseString1("Hi I am Yogendra"))

