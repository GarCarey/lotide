const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//Test code

describe('#head', () => {
  it ('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("return '5' for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("return 'Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("should return 7 for [7, 6, 5]", () => {
    assert.notEqual(head([7, 6, 5]), 5);
  });

  it("should return [] for []", () => {
    assert.notEqual(head([]), 1);
  });

});
