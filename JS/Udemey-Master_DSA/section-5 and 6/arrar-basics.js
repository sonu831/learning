// 1. Creating Arrays
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', { name: 'John' }, true, [1, 2]];
let arrayFromNew = new Array(1, 2, 3);

// 2. Accessing Elements
console.log('First fruit:', fruits[0]);     // apple
console.log('Last number:', numbers[numbers.length - 1]);  // 5
console.log('Array length:', fruits.length); // 3

// 3. Adding/Removing Elements
// Push: Add to end
fruits.push('grape');
console.log('After push:', fruits);  // ['apple', 'banana', 'orange', 'grape']

// Pop: Remove from end
let lastFruit = fruits.pop();
console.log('Popped fruit:', lastFruit);  // 'grape'
console.log('After pop:', fruits);        // ['apple', 'banana', 'orange']

// Unshift: Add to beginning
fruits.unshift('mango');
console.log('After unshift:', fruits);  // ['mango', 'apple', 'banana', 'orange']

// Shift: Remove from beginning
let firstFruit = fruits.shift();
console.log('Shifted fruit:', firstFruit);  // 'mango'
console.log('After shift:', fruits);        // ['apple', 'banana', 'orange']

// 4. Slicing and Splicing
let nums = [1, 2, 3, 4, 5];

// Slice: Get portion of array (doesn't modify original)
let sliced = nums.slice(1, 3);
console.log('Sliced:', sliced);        // [2, 3]
console.log('Original after slice:', nums);  // [1, 2, 3, 4, 5]

// Splice: Modify array by adding/removing elements
let spliced = nums.splice(1, 2, 'a', 'b');
console.log('Spliced out:', spliced);       // [2, 3]
console.log('After splice:', nums);         // [1, 'a', 'b', 4, 5]

// 5. Searching and Sorting
let arr = ['banana', 'apple', 'orange', 'apple'];

// indexOf: Find first occurrence
console.log("Index of 'apple':", arr.indexOf('apple'));  // 1

// lastIndexOf: Find last occurrence
console.log("Last index of 'apple':", arr.lastIndexOf('apple'));  // 3

// includes: Check if element exists
console.log("Includes 'orange'?", arr.includes('orange'));  // true

// sort: Sort array (modifies original)
arr.sort();
console.log('Sorted array:', arr);  // ['apple', 'apple', 'banana', 'orange']

// reverse: Reverse array (modifies original)
arr.reverse();
console.log('Reversed array:', arr);  // ['orange', 'banana', 'apple', 'apple']

// 6. Array Transformation
let numbers2 = [1, 2, 3, 4, 5];

// map: Create new array with transformed elements
let doubled = numbers2.map(num => num * 2);
console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10]

// filter: Create new array with elements that pass test
let evenNums = numbers2.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNums);  // [2, 4]

// reduce: Reduce array to single value
let sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);  // 15

// 7. Array Checking and Filling
// Check if array
console.log('Is array?', Array.isArray(numbers2));  // true

// Fill array with value
let filledArray = new Array(3).fill('x');
console.log('Filled array:', filledArray);  // ['x', 'x', 'x']

// 8. Join and Split
let elements = ['Fire', 'Air', 'Water'];
console.log('Joined:', elements.join('-'));  // "Fire-Air-Water"

let str = "apple,banana,orange";
console.log('Split:', str.split(','));  // ['apple', 'banana', 'orange']

// 9. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log('Combined arrays:', combined);  // [1, 2, 3, 4, 5, 6]

// 10. Common Patterns
// Remove duplicates using Set
let withDupes = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(withDupes)];
console.log('Unique values:', unique);  // [1, 2, 3, 4]

// Find max/min
console.log('Max value:', Math.max(...numbers2));  // 5
console.log('Min value:', Math.min(...numbers2));  // 1

// Check if all elements meet condition
let allPositive = numbers2.every(num => num > 0);
console.log('All positive?', allPositive);  // true

// Check if any elements meet condition
let hasEven = numbers2.some(num => num % 2 === 0);
console.log('Has even numbers?', hasEven);  // true

// Find first element meeting condition
let firstEven = numbers2.find(num => num % 2 === 0);
console.log('First even number:', firstEven);  

// Quick Note: Upcoming Video
// When we build data structures from scratch in this course, we will be using the Javascript's Class keyword to create these data structures. I have picked this way of doing things since it would be most familiar with most languages. If you would like to be a little bit more familiar with classes and how to create them, I have added an extra video from one of my other courses: The Complete Web Developer: Zero to Mastery which goes over this topic in the next lecture.

// If you are already familiar with this topic you can skip over to the Implementing An Array video.

// Ps, throughout the course I use var, let, and const 
// to declare variables. It is not important that you understand 
// the differences between them for this course, but if you are curious, 
// I recommend reading this: https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc