# Lotide2

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sh.tyagi22/lotide`

**Require it:**

`const _ = require('@sh.tyagi22/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: find the head element of an array
* `tail(array)`: get the tail of an array
* `middle(array)`: get the middle element of an array
* `without(array1, array2)`: filter the array
* `takeUntil(array, function)`: filter the array based on a condition
* `letterPosition(string)`: get the position of letters in a string
* `findKey(object, function)`: find key of an object
* `findKeyByValue(object, value)`: find key by value of an object
* `eqObjects(object1, object2)`: compare 2 objects
* `eqArrays(array1, array2)`: compare 2 arrays
* `countOnly(array, object)`: return the names from array which have truthy value in object
* `countLetters(string)`: count the occurence of a letter in a string