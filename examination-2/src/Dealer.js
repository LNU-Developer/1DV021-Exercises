'use strict'

const Player = require('./Player')

class Dealer extends Player { // Dealer is actually a player, and thus inherit players properties
  constructor (deck, preference) {
    super(deck, preference, preference) // Properties being inhertiet, all except count (there is only one Dealer)
  }

  scoreMessage () {
    return `Dealer: ${this.message}` // scoreMessage overrides the method in the Player module.
  }
}
module.exports = Dealer
