const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function(array, callback) {
  const results = [];

  for(let item of array){
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

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

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "o"]);
assertArraysEqual(results1, []);