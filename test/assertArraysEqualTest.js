const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS