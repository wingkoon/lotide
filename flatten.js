const flatten = function(array) {
  let flatArray = [];
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    const ans = Array.isArray(array[i]);
    if (ans) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray[k] = array[i][j];
        k += 1;
      }
    } else {
      flatArray[k] = array[i];
      k += 1;
    }
  }
  console.log(flatArray);
  return flatArray;
};

module.exports = flatten;

/*flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
*/