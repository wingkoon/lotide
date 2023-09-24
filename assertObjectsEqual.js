// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  let equal = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        equal = false;
        i = actual.length;
      }
    }
  } else {
    equal = false;
  }
  return equal;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let match = false;
  let diff = 0;
  let property = "";
  if (object1.length === object2.length) {
    const obj1keys = Object.keys(object1).sort();
    const obj2keys = Object.keys(object2).sort();
    if (eqArrays(obj1keys, obj2keys)) {
      for (let i = 0; i < obj1keys.length; i++) {
        property = object1[i];
        if (object1[property] !== object2[property]) {
          diff += 1;
        }
      }
      if (diff === 0) {
        match = true;
      }
    }
  }
  console.log(match);
  return match;
};
  
const correctSymbol = "✅✅✅";
const errorSymbol = "🛑🛑🛑";

// FUNCTION IMPLEMENTATION
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
