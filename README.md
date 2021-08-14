# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gar_carey/lotide`

**Require it:**

`const _ = require('@gar_carey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

-head: returns the beginning of an array

-middle: returns the middle values of an array

-tail: returns the tail of an array

-assertEqual: takes in 2 values and return if whether they are equal or not

-eqArrays: take in 2 arrays to check if contain eqaul values and lengths

-assertArraysEqual: takes in result of eqArrays and prints whether the arrays are equal or not 

-countLetters: count the number of each letter in a string

-countOnly: takes in an object and counts how many times a value appears in the object

-eqObjects: checks to see if two objects are equal

-findKey: find a specific key in an object

-findKeyByValue: find a specific key by its value

-flatten: accepts a nested array in an array and returns one faltten arrray of values 

-letterPositions: checks the position of each letter and displays thier index in the string

-map: takes in an array and a callback and returns a new array of values based on the callback

-takeUntil: takes in an array and a callback function and pushes the values of the array into a new array until the callback function is met

-without: takes in 2 arrays and returns the values that are not present in the second array 

-assertObjectsEqual: takes in the values of two objects and prints out whether they are equal or not 