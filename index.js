const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  head: head,
  middle: middle,
  tail: tail,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertObjectsEqual: assertObjectsEqual
};