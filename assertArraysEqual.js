const eqArrays = require('./eqArrays');
const correctEmoji = "😃😃😃";
const errorEmoji = "🫣🫣🫣";

//Make the function compare the two arrays it takes in and print out a message telling us if they match or not.
//There are two parameters: actual and expected. They are arrays.
//The returned value equal is true if identical, false if not.
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

