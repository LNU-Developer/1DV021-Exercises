'use strict'

function Ellips (a = 42.7, b = 13.8) {
  this.a = a
  this.b = b

  Ellips.prototype.getArea = function () {
    return Math.PI * this.a * this.b
  }

  Ellips.prototype.getCircumference = function () {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }

  Ellips.prototype.getString = function () {
    let area = Math.round(this.getArea(), 1)
    let circumference = Math.round(this.getCircumference(), 1)
    return console.log('a: ' + this.a + ', b: ' + this.b + ', area: ' + area + ', circumference: ' + circumference)
  }
}
module.exports = Ellips
