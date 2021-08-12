const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;