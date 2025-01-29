//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacterUsingObject(input) {
    const obj = {};
    for (let i = 0; i < input.length; i++) {
      const value = input[i];
      if (obj[value]) {
        return value;
      } else {
        obj[value] = true;
      }
    }
    return undefined;
  }

function firstRecurringCharacterUsingSet(input) {
  const mySet = new Set();
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    if (mySet.has(value)) {
      return value;
    } else {
      mySet.add(value);
    }
  }
  return undefined;
}

function firstRecurringCharacter(input) {
  const myMap = new Map();
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    if (myMap.has(value)) {
      myMap.set(value, myMap.get(value) + 1);
    } else {
      myMap.set(value, 1);
    }
  }

  console.log(myMap);
  let max = 0;
  let maxKey = 0;
  for (let [key, value] of myMap.entries()) {
    console.log(key, value);
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }
  console.log("maxKey", maxKey);
}

console.log(firstRecurringCharacterUsingObject([2,1,1,2,3,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
