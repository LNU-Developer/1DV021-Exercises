'use strict'

function Ellipse (a, b) {
  this.a = a
  this.b = b
}
Ellipse.prototype.getArea = function () {
  return Math.PI * Math.abs(this.a) * Math.abs(this.b)
}

Ellipse.prototype.getCircumference = function () {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
}

Ellipse.prototype.getString = function () {
  return console.log(`a: ${this.a}, b: ${this.b}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`)
}
module.exports = Ellipse
