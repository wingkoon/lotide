

const tail = function(array) {
  let tailThing = [];
  if (array === []) {
    tailThing = [];
  } else {
    tailThing = array.slice(1,array.length);
  }
  return tailThing;
};

module.exports = tail;

