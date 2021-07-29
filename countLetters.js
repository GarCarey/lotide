const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};

  for (const letter of sentence) {
    if(letter !== " ") {
      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const sentence = "lighthouse in the house";
const result1 = countLetters(sentence);

assertEqual(result1["h"], 4);
assertEqual(result1["o"], 3);

