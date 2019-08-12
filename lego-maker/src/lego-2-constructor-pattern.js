/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick (x = 2, y = 4, color = 'red') {
  this.x = x
  this.y = y
  this.color = color

  this.render = function () {
    console.log(this.toString())
  }

  this.toString = function () {
    let str = ''
    for (let y = 0; y < this.y; y++) {
      for (let x = 0; x < this.x; x++) {
        str += '®'
        if (x < this.x - 1) {
          str += ' '
        }
      }
      if (y < this.y - 1) {
        str += '\n'
      }
    }
    return str
  }
}

// Exports
module.exports = LegoBrick
