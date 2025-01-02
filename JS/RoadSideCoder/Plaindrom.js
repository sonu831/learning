//Input x=121 ---> output will be true
// Input 10  ---> false

//Using String
const x = function (num) {
  let reverse = "";
  let inputStr = num.toString();
  const strLength = inputStr.length;

  for (let k = (strLength - 1); k >= 0; k--) {
    reverse = reverse + inputStr[k];
  }

  if (reverse === inputStr) {
    console.log("plaindrome");
  }
};

//suing mathematics
// const x = function (input) {
//   let originalNum = input;
//   let reminder = 0;
//   let revNumber = 0;
//   while (originalNum != 0) {
//     reminder = originalNum % 10;
//     revNumber = revNumber * 10 + reminder;
//     originalNum = Math.floor(originalNum / 10);
//   }
//   if(revNumber === input)
//   console.log('no is plaidnrom')
// };

x(-121);
