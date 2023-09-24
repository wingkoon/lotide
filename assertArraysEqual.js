const eqArrays = require('./eqArrays');
const correctEmoji = "😃😃😃";
  const errorEmoji = "🫣🫣🫣";

const assertArraysEqual = function(actual, expected) {
  const equal = eqArrays(actual, expected);
  if (equal) {
    console.log(`${correctEmoji} Assertion Passed: `);
    console.log(actual);
    process.stdout.write(" === ");
    console.log(expected);
  } else {
    console.log(`${errorEmoji} Assertion Failed: `);
    console.log(actual);
    process.stdout.write(" !== ");
    console.log(expected);
  }
  return equal;
};

module.exports = assertArraysEqual;

