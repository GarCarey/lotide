const eqObjects = function(object1, object2) {
  const object1KeyArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);

  if (object1KeyArr.length !== object2KeysArr.length) {
    return false;
  } else {
      for (let key of object1KeyArr) {
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        }
        else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: "1", b: "2", c: "3"}, {a: "1", b: "2", c: "3"});
assertObjectsEqual({a: "1", b: "2", c: "3"}, {a: "1", b: "2", c: "4"});