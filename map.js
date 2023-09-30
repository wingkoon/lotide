//This function returns an array that satisfied certain condition specified by the callback.
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
