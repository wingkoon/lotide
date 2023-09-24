const letterPositions = function(sentence) {
  const results = {};
  const keys = [];
  let keyCount = 0;
  let position = [];
  let pointer = 0;
  let property = "";
  let fin = 0;
  let match = 0;
  if (sentence.length > 0) {
    let i = 0;
    while ((i <= keyCount) && (pointer < sentence.length)) {
      fin = 0;
      position = [];
      keys[i] = "";
      if (keyCount > 0) {
        while ((pointer < sentence.length) && (fin === 0)) {
          match = 0;
          while ((sentence[pointer] === " ") && (pointer < sentence.length)) {
            pointer += 1;
          }
          if (pointer < sentence.length) {
            for (let k = 0; k < keyCount; k++) {
              if (sentence[pointer] === keys[k]) {
                pointer += 1;
                k = keyCount;
                match = 1;
              }
            }
            if (match === 0) {
              fin = 1;
              keys[i] = sentence[pointer];
              position.push(pointer);
              keyCount += 1;
              pointer += 1;
            }
            // match = 0 means new letter not on the keys list
          }
        }
      } else {
        while ((sentence[pointer] === " ") && (pointer < sentence.length)) {
          pointer += 1;
        }
        if (pointer < sentence.length) {
          keys[i] = sentence[pointer];
          position.push(pointer);
          keyCount += 1;
          pointer += 1;
        }
      }
      for (let j = pointer; j < sentence.length; j++) {
        if (keys[i] === sentence[j]) {
          position.push(j);
        }
      }
      if (pointer < sentence.length) {
        property = keys[i];
        results[property] = position;
      }
      if ((pointer === sentence.length) && (keys[i] !== "")) {
        property = keys[i];
        results[property] = position;
      }
      i += 1;
    }
  }
  console.log(results);
  // logic to update results here
  return results;
};

module.exports = letterPositions;

/*letterPositions("hello");
letterPositions("lighthouse is in the house");
letterPositions("     apple  ");
letterPositions("     ");
assertArraysEqual(letterPositions("lighthouse is in the house").i, [1, 11, 14]);
*/

