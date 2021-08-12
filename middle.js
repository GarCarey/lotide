const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  let index = 0;
  if (array.length === 1 || array.length === 2) {
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

module.exports = middle;