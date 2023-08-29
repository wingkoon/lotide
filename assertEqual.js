// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const correctEmoji = "😃😃😃";
  const errorEmoji = "🫣🫣🫣";
  if (actual === expected) {
    console.log(correctEmoji + " Assertion Passed: " + actual + " === " + expected);
  } else {
    process.stdout.write(errorEmoji + " ");
  }
  console.assert(actual === expected, actual, " !== " + expected);
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);