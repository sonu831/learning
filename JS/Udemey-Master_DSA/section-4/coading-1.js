//Check if we have common in array

const arr1 = ["a", "b", "e", "c"];

const arr2 = ["c", "z", "d", "j"];

function checkCommonItem(arr1, arr2) {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    if (obj[item]) {
        console.log("common-item",item)
        return true;
    }
  }

  return false;
}

//console.log(checkCommonItem(arr1, arr2));
