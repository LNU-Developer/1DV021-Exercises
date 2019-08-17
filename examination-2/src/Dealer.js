'use strict'

const Player = require('./Player.js')

function Dealer (deck, count, preference) {
  Player.call(this, deck, count, preference)
}

Dealer.prototype = Object.create(Player.prototype)
Dealer.prototype.constructor = Dealer

Dealer.prototype.scoreMessage = function () {
  return `Dealer: ${this.message}`
}

module.exports = Dealer
