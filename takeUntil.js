//This functions retrieves all elements in an array that satisfies the condition specifies by callback.
const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      i = array.length;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

module.exports = takeUntil;
