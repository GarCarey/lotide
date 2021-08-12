const assertEqual = require('./assertEqual');

const head = function(newArray) {
  if (newArray.length >= 1) {
    return newArray[0];
  } else {
    return undefined;
  }
}

module.exports = head;
