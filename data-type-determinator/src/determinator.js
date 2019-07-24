/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me '

  if (typeof (data) === 'number') {
    result += 'a number.'
  } else if (typeof (data) === 'string') {
    result += 'a string.'
  } else if (typeof (data) === 'boolean') {
    result += 'a boolean.'
  } else if (typeof (data) === 'object') {
    if (data === null) {
      result += 'a null value.'
    } else if (Array.isArray(data) === true) {
      result += 'an array.'
    } else {
      result += 'an object.'
    }
  } else if (typeof (data) === 'function') {
    result += 'a function.'
  } else if (typeof (data) === 'undefined') {
    result += 'an undefined value.'
  }
  return result
}

exports.tellType = tellType
