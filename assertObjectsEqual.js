const eqObjects = require('./eqObjects');
const correctSymbol = "✅✅✅";
const errorSymbol = "🛑🛑🛑";
// eqArrays = true if both objects have identical keys with identical values.
//Make the function eqObjects, compare the two objects it takes in and print out a message telling us if they match or not.
//There are two parameters: actual and expected. They are objects.
//The returned value equal is true if identical, false if not.
const assertObjectsEqual = function(actual, expected) {
// Implement me!
  const equal = eqObjects(actual, expected);
  if (equal) {
    console.log(`${correctSymbol} Assertion Passed: `);
    console.log(actual);
    process.stdout.write(" === ");
    console.log(expected);
  } else {
    console.log(`${errorSymbol} Assertion Failed: `);
    console.log(actual);
    process.stdout.write(" !== ");
    console.log(expected);
  }
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  return equal;
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});
