const countLetters = function(readString) {
  const result = {};
  const keys = [];
  let keyCount = 1;
  let count = 1;
  let pointer = 1;
  let property = "";
  let fin = 0;
  let match = 0;
  keys[0] = readString[0];
  if (readString.length > 1) {
    let i = 0;
    while (i < keyCount) {
      fin = 0;
      for (let j = pointer; j < readString.length; j++) {
        if (readString[j] === keys[i]) {
          count += 1;
        }
      }
      property = keys[i];
      result[property] = count;
      while ((pointer < readString.length) && (fin === 0)) {
        match = 0;
        for (let k = 0; k < keyCount; k++) {
          if (readString[pointer] === keys[k]) {
            pointer += 1;
            k = keyCount;
            match = 1;
          }
        }
        if (match === 0) {
          fin = 1;
          keys[i + 1] = readString[pointer];
          keyCount += 1;
          pointer += 1;
        }
      }
      i += 1;
      count = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countLetters;

//countLetters("LHL");
//countLetters("lighthouse");
//assertEqual(countLetters("LHL").L, 2);

