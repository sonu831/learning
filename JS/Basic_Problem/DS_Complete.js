// Consider LA is a linear array with N elements and K is a positive integer such
// that K<=N. Following is the algorithm to delete an element available at the Kth position
// of LA.

// function handleArrayAtIndex(array, kth) {

//   for (let i = kth - 1; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }

//   array.pop()
//   return array;
// }

// const numberArray = [1, 2, 3, 4, 5];

// console.log(handleArrayAtIndex(numberArray, 3));

// Consider LA is a linear array with N elements and K is a positive integer such
// that K<=N. Following is the algorithm to find an element with a value of ITEM using
// sequential search.
function searchArrayAtItem(array, kth) {

  for (let i = 0; i < array.length; i++) {
    if (i === kth - 1) return array[i];
  }
  
}

const numberArray = [1, 2, 3, 4, 5];

console.log(searchArrayAtItem(numberArray, 3));
