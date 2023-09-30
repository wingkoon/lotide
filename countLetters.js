//This function counts each letter in the sentence and report its frequency as the object.
const countLetters = function(readString) {
  let result = {};
  for (const letter of readString) {
    if (letter === " ") {
      continue;
    } else {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  console.log(result);
  return result;
};
module.exports = countLetters;
