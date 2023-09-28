const without = function(array1, array2) {
  let k = 0;
  let equal = 0;
  let filteredArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        equal = 1;
        j = array2.length;
      }
    }
    if (!equal) {
      filteredArray[k] = array1[i];
      k += 1;
    }
    equal = 0;
  }
  console.log(filteredArray);
  return filteredArray;
};

module.exports = without;

/*without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/