//This function retrieves the first element of array.
const head = function(array) {
  let first = "";
  if (array.lenth === 0) {
    first = "undefined";
  } else {
    first = array[0];
  }
  return first;
};

module.exports = head;