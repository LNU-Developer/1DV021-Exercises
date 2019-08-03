/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author TODO: Write your name here.
 * @version 1.2.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
  checkInputs(numbers)

  let maximumResult = maximum(numbers)
  let meanResult = mean(numbers)
  let medianResult = median(numbers)
  let minimumResult = minimum(numbers)
  let modeResult = mode(numbers)
  let rangeResult = range(numbers)
  let standardDeviationResult = standardDeviation(numbers)

  return { maximum: maximumResult, mean: meanResult, median: medianResult, minimum: minimumResult, mode: modeResult, range: rangeResult, standardDeviation: standardDeviationResult }
}

/**
 * Checks the elements in the array and if these contains errors, they throw an error/typeerror
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 */
function checkInputs (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  if (numbers === undefined || numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError('The passed array contains not just numbers.')
    }
  }
}

/**
 * Sorts input array by values
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number[]} sorted array
 */
function uniqueSortedArray (array) {
  let newSource = array.slice(0, array.length)
  newSource.sort(function (a, b) { return a - b })
  return newSource
}

/**
 * Finds the largest value in an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The largest value in the array
 */
function maximum (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let newArray = uniqueSortedArray(numbers) // Created a new array to not change the original and sorted the array so that the largest number could be found at the end
  return newArray[newArray.length - 1] // Returned the value at the end of the array containing the largest value
}

/**
 * Finds the mean in an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The mean value in the array
 */
function mean (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let total = 0
  for (let i = 0; i < numbers.length; i++) { // Summerize the array to a variable
    total += numbers[i]
  }

  return total / numbers.length // Returned the average value of the array based on total array items
}

/**
 * Finds the median in an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The median value in the array
 */
function median (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let newArray = uniqueSortedArray(numbers) // Created a new array to not change the original and sorted the array so that middle values could be found
  let lowMid = Math.floor((newArray.length - 1) / 2) // Searched for the lower middle index (if applicable)
  let highMid = Math.ceil((newArray.length - 1) / 2) // Searched for the higher middle index (if applicable)
  return (newArray[lowMid] + newArray[highMid]) / 2 // Return the average value of both to get the median
}

/**
 * Finds the smallest value in an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The smallest value in the array
 */
function minimum (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let newArray = uniqueSortedArray(numbers) // Created a new array to not change the original and sorted the array so that the smallest number could be found at the end
  return newArray[0] // Returned the value at the beginning of the array containing the smallest  value
}

/**
 * Finds the mode value(s) of an array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number[]} The most occuring value(s) in the array
 */
function mode (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let count = []
  for (let y = 0; y < numbers.length; y++) {
    count[y] = 0 // Added values to the array for it to understand it is a number
  }

  let i = 0
  let newArray = uniqueSortedArray(numbers) // Created a new array to not change the original and sorted the array

  // Go through the array and checking how many times the most occuring value occures
  do {
    for (let u = 0; u < newArray.length; u++) {
      if (newArray[i] === newArray[u]) {
        count[i]++
      }
    }
    i++
  } while (i < newArray.length)

  let result = []
  let max = maximum(count) // Find out the maximum instances of a number

  // Find the unique numbers that occure the most
  for (let x = 0; x < newArray.length; x++) {
    if (count[x] === max && newArray[x - 1] !== newArray[x]) {
      result[x] = newArray[x]
    }
  }

  result.sort(function (a, b) { return a - b }) // Sorted the array so that the largest is at the end and smallest at the beginning
  let cleanResult = result.filter(function (x) { return x != null }) // created a new array with clean values e.g. not empty
  return cleanResult
}

/**
 * Finds the range values in an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number[]} The smallest value and largest value of an array
 */
function range (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.
  let newArray = uniqueSortedArray(numbers) // Created a new array to not change the original and sorted the array so that the largest is at the end and smallest at the beginning
  return newArray[newArray.length - 1] - newArray[0] // Returned the difference between the highest and lowest value
}

/**
 * Finds the standard deviation of an input array
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The standard deviation of an input array
 */
function standardDeviation (numbers) {
  checkInputs(numbers) // Run check function to make sure that the array doesn't contain errors.

  let average = mean(numbers) // Used mean function to receive the average value of the array
  let powerOfDeviations = [] // Created an array to hold the power of the deviations.
  let total = 0 // Variable to hold the sum of the array
  for (let i = 0; i < numbers.length; i++) {
    powerOfDeviations[i] = Math.pow((numbers[i] - average), 2) // Add the power of the deviations in an array
  }

  for (let u = 0; u < powerOfDeviations.length; u++) { // Summerize the array to a variable
    total += powerOfDeviations[u]
  }

  return Math.sqrt(total / powerOfDeviations.length) // Returns the standard deviation
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = mode
exports.range = range
exports.standardDeviation = standardDeviation
exports.checkInputs = checkInputs
exports.uniqueSortedArray = uniqueSortedArray
