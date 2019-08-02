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
}

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

function maximum (numbers) {
  checkInputs(numbers)
}

function mean (numbers) {
  checkInputs(numbers)
}

function median (numbers) {
  checkInputs(numbers)
}

function minimum (numbers) {
  checkInputs(numbers)
}

function mode (numbers) {
  checkInputs(numbers)
}
function range (numbers) {
  checkInputs(numbers)
}
function standardDeviation (numbers) {
  checkInputs(numbers)
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
