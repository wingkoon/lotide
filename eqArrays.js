//This function compares two arrays to see if they are identical.
//The returned value equal is true if identical, false if not. 
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
  console.log(equal);
  return equal;
};

module.exports = eqArrays;

