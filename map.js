const map = function(array, callback) {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
const results2 = map(words, word => word.length);
console.log(results2);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
const results3 = map(words, word => word[word.length - 1] + word[0]);
console.log(results3);
assertArraysEqual(results3, ["dg", "lc", "ot", "rm", "mt"]);
*/

