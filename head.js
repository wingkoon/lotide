
const head = function(array) {
  let first = "";
  if (array === []) {
    first = "undefined";
  } else {
    first = array[0];
  }
  return first;
};

module.exports = head;