//This function reads a sentence and returns an object with each letter positions indicated in the corresponding arrays.
const letterPositions = function(sentence) {
  const results = {};
  let letter = "";

  for (let i = 0; i < sentence.length; i++) {
    letter = sentence[i];
    if (letter === " ") {
      continue;
    } else if (!results[letter] || 0) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;
