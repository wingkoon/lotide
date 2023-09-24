// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  const keys = [];
  let k = 0;
  let property = "";
  for (var key in itemsToCount) {
    if (itemsToCount[key]) {
      keys.push(key);
    }
  }
  for (let i = 0; i < keys.length; i ++) {
    k = 0;
    for (let j = 0; j < allItems.length; j++) {
      if (keys[i] === allItems[j]) {
        k += 1;
      }
    }
    if (k > 0) {
      property = keys[i];
      results[property] = k;
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;

/*const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/