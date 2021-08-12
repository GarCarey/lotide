const head = require('../head');
const assertEqual = require('../assertEqual');

//Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7,6,5]), 5);
assertEqual(head([]), 1);