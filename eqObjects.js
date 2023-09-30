const eqArrays = require('./eqArrays');
//This function compares two objects to see if they are identical.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let match = false;
  let diff = 0;
  let property = "";
  if (object1.length === object2.length) {
    const obj1keys = Object.keys(object1).sort();
    const obj2keys = Object.keys(object2).sort();
    if (eqArrays(obj1keys, obj2keys)) {
      for (let i = 0; i < obj1keys.length; i++) {
        property = object1[i];
        if (object1[property] !== object2[property]) {
          diff += 1;
        }
      }
      if (diff === 0) {
        match = true;
      }
    }
  }
  console.log(match);
  return match;
};

module.exports = eqObjects;


/*const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
*/