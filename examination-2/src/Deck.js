'use strict'

class Deck {
  constructor () {
    this.deck = [] // created an array to hold the deck
  }

  shuffleDeck () {
    let tempValue, randomNo
    let currentElement = this.deck.length

    while (currentElement !== 0) {
      randomNo = Math.floor(Math.random() * (currentElement))

      currentElement--

      tempValue = this.deck[randomNo]
      this.deck[randomNo] = this.deck[currentElement]
      this.deck[currentElement] = tempValue
    }
    return this.deck
  }

  createDeck (currentHand) {
    const suits = ['♥', '♠', '♣', '♦']
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ suit, value })
      }
    }
    return this.deck
  }

  giveCard () {
    return this.deck.pop()
  }
}

// Exports
module.exports = Deck
