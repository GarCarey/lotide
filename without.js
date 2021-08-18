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
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i])) {
        returnArr.push(source[i]);
    }
  }
  return returnArr;
};

const words = ["hello", "world", "lighthouse"];

//Test case
assertArraysEqual(without(words, "lighthouse"), ["hello", "world"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
