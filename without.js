//This function will filter out elements of array2 in the array1.
//without([1, 2, 3], [1]); // => [2, 3]
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
