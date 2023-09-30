//This function returns the corresponding genre from genre value.
const findKeyByValue = function(genre, genreValue) {
  for (let prop in genre) {
    if (genre.hasOwnProperty(prop)) {
      if (genre[prop] === genreValue) {
        console.log(prop);
        return prop;
      }
    }
  }
};

module.exports = findKeyByValue;
