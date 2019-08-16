'use strict'

class Deck {
  constructor () {
    this.deck = [] // created an array to hold the deck
  }

  shuffleDeck () {

  }

  handCard () {

  }

  createDeck () {
    const suits = ['♥', '♠', '♣', '♦']
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ suit, value })
      }
    }
    return this.deck
  }
}

// Exports
module.exports = Deck
