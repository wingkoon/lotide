//This function returns an array from second to last element.
const tail = function(array) {
  let tailThing = [];
  if (array.length === 0) {
    tailThing = [];
  } else {
    tailThing = array.slice(1,array.length);
  }
  return tailThing;
};

module.exports = tail;
