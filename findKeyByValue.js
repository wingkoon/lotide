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

/*const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/