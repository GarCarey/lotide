const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = undefined

  for (const key in object) {
    if(callback(object[key])) {
      result = key;
      break;
    } 
  }
  return result;
};

const newObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const results1 = findKey(newObj, x => x.stars === 2); // => "noma"
const results2 = findKey(newObj, x => x.stars === 0); // => undefined

assertEqual(results1, "noma");
assertEqual(results2, undefined);