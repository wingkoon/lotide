# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevinleung/lotide`

**Require it:**

`const _ = require('@kevinleung/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: This function compares two arrays to see if they are identical. It reports the reult from the module eqArrays(actual, expected).
* `assertEqual(actual, expected)`: This function compares two strings to see if they are identical.
* `assertObjectsEquals(actual, expected)`: This function compares two objects to see if they are identical. It reports the result from the module eqObjects(object1, object2).
* `countLetters(readString)`: This function counts each letter in the sentence and report its frequency as the object.
* `countOnly(allItems, itemsToCount)`: This function counts only each item, of the array itemsToCount, in the object allItems.
* `eqArrays(actual, expected)`: This function compares two arrays to see if they are identical. 
* `eqObjects(object1, object2)`: This function compares two objects to see if they are identical.
* `findKey(objects, callback)`: This function finds the first key in objects that satisfies the condition specifies in callback.
* `findKeyByValue(genre, genreValue)`: This function find the corresponding genre from genre value.
* `flatten(array)`: This function flattens an array with one or more array inside. Finally it becomes a single level array.
* `head(array)`: This function retrieves the first element of array.
* `letterPositions(sentence)`: This function reads a sentence and returns an object with each letter positions indicated in the corresponding arrays.
* `map(array, callback)`: This function returns an array that satisfied certain condition specified by the callback.
* `middle(array)`: This function returns the middle elements of an array. If the array length is odd, it returns the single middle element in the array. If the array length is even, it returns the middle two elements in the array.
* `tail(array)`: This function returns an array from second to last element.
* `takeUntil(array, callback)`: This functions retrieves all elements in an array that satisfies the condition specifies by callback.
* `without(array1, array2)`: This function will filter out elements of array2 in the array1.
