// This function count only the items specified by itemsToCount, in the allItems array.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The returned results put the frequency of specified items in object form.
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  const keys = [];
  for (let key in itemsToCount) {
    if (itemsToCount[key]) {
      keys.push(key);
    }
  }
  Object.keys(allItems).forEach(key => {
    for (let i = 0; i < keys.length; i ++) {
      if (keys[i] === allItems[key]) {
        results[keys[i]] = (results[keys[i]] || 0) + 1;
      }
    }
  });
  console.log(results);
  return results;
};

module.exports = countOnly;
