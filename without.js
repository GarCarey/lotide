const eqArrays = function(firstArray, secondArray) {
  let counter = 0;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      counter ++;
    }
  }
  if (counter === firstArray.length && counter === secondArray.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if(eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const without = function(source, itemsToRemove) {
  let remove = [];
  if (typeof(itemsToRemove) === "string"){
    remove = itemsToRemove.split(' ');
  } else {
    remove = itemsToRemove;
  }

  let returnArr = [];
  for (let i = 0; i < remove.length; i++) {
    for (let j = 0; j < source.length; j++){
      if (remove[i] !== source[j] && !returnArr.includes(source[j])) {
        returnArr.push(source[j]);
      }
    }
  }
  return returnArr;
};

console.log(without(["hello", "world", "lighthouse"], "lighthouse"));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);