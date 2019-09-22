/**
 * Module for creating dealers and dealing hands of cards
 *
 * @author Rickard Marjanovic
 * @version 1.0.0
 */

'use strict'

const Player = require('./Player')

/**
 * Creates a JavaScript player instance that represents a dealer
 *
 * @param {deck[]} deck - The deck of cards used by players
 * @param {number} preference - Dealers preferences of when to stop pulling cards
 * @param {usedCards[]} usedCards - Deck of already dealt cards
 * @constructor
 */

class Dealer extends Player { // Dealer is actually a player, and thus inherit players properties
  constructor (deck, preference, usedCards) {
    super(deck, preference, preference, usedCards) // Properties being inhertiet, all except count (there is only one Dealer)
  }

  /**
 * Returns the score message for the dealer
 *
 * @returns {string} - Returns the score message for the dealer
 */

  scoreMessage () {
    return `Dealer: ${this.message}` // scoreMessage overrides the method in the Player module.
  }
}

// Exports
module.exports = Dealer
