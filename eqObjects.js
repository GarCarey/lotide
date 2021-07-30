const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2"} ;
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true );

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true );

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true );