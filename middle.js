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

const assertArraysEqual = function(firstArray, secondArray) {
  if(eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const middle = function(array){
  let newArray = [];
  let index = 0;
  if (array.length === 1 || array.length === 2){
    return newArray;
  } else if (array.length % 2 === 0) {
    index = array.length / 2;
    newArray = [array[index - 1], array[index]];
    return newArray;
  } else if (array.length % 2 !== 0) {
    index = Math.round(array.length / 2);
    newArray.push(array[index - 1]);
    return newArray;
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5]); // [3, 4]