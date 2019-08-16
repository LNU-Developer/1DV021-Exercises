
'use strict'

class Ellipse {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  getArea () {
    return Math.PI * Math.abs(this.a) * Math.abs(this.b)
  }

  toString () {
    return `a: ${this.a}, b: ${this.b}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
  }

  getCircumference () {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }
}

// Exports
module.exports = Ellipse
