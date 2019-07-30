/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints (teams) {
  if (Array.isArray(teams) !== true) {
    throw TypeError('Source array is not an Array')
  }
  let newSource = teams.slice(0, teams.length)
  newSource.sort(function (a, b) { return a.points - b.points })
  newSource.reverse()
  return newSource
}

exports.sortByPoints = sortByPoints
