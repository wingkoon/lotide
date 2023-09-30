//This function returns the first key in objects that satisfies the condition specifies in callback.
const findKey = function(objects, callback) {
  for (let prop in objects) {
    if (callback(objects[prop])) {
      console.log(prop);
      return prop;
    }
  }
};

module.exports = findKey;
