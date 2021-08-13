const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

// Test Case 2: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);


describe('#tail', () => {

  it("return 3 for 3 before tail", () => {
    assert.strictEqual(words.length, 3);
  });

  it("return 2 for 2 after tail", () => {
    assert.strictEqual(result.length, 2);
  });
  
  it("return 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("return 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[1], "Labs");
  });

  it("return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

});
