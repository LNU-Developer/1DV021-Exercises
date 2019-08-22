'use strict'

function Deck () {
  this.deck = [] // created an array to hold the deck

  Deck.prototype.shuffleDeck = function () {
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

  Deck.prototype.createDeck = function () {
    const suits = ['♥', '♠', '♣', '♦']
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ suit, value })
      }
    }
    return this.deck
  }

  Deck.prototype.deckCard = function () {
    let card = this.deck.pop()
    let value = 0
    let countA = 0
    if (card.value === 'A') {
      value = 14
      countA++
    } else if (card.value === 'J') {
      value = 11
    } else if (card.value === 'Q') {
      value = 12
    } else if (card.value === 'K') {
      value = 13
    } else {
      value += card.value
    }
    return { card, value, countA }
  }
}

// Exports
module.exports = Deck
