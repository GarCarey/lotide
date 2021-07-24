const eqArrays = function(firstArray, secondArray) {
  let counter = 0;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      counter ++;
    }
  }
  if (counter === firstArray.length) {
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);