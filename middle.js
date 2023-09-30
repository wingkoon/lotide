//This function returns the middle elements of an array. 
//If the array length is odd, it returns the single middle element in the array. 
//If the array length is even, it returns the middle two elements in the array.
const middle = function(array) {
  let midArray = [];
  if (array.length > 2) {
    if (array.length % 2) {
      const i = (array.length - 1) / 2;
      midArray[0] = array[i];
    } else {
      const i = array.length / 2 - 1;
      midArray[0] = array[i];
      midArray[1] = array[i + 1];
    }
  }
  console.log(midArray);
  return midArray;
};

module.exports = middle;
