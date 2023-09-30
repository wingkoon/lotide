//Make the function compare the two values it takes in and print out a message telling us if they match or not.
//There are two parameters: actual and expected. They are strings or values.
const assertEqual = function(actual, expected) {
  const correctEmoji = "😃😃😃";
  const errorEmoji = "🫣🫣🫣";
  if (actual === expected) {
    console.log(`${correctEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    process.stdout.write(`${errorEmoji} `);
  }
  console.assert(actual === expected, `${actual} !== ${expected}`);
  return;
};

module.exports = assertEqual;

