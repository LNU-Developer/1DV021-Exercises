'use strict'

class Deck {
  constructor () {
    this.deck = [] // created an array to hold the deck
  }

  shuffleDeck (array) {
    let newArray = array.slice(0, array.length)
    let tempValue, randomNo
    let currentElement = newArray.length

    while (currentElement !== 0) {
      randomNo = Math.floor(Math.random() * (currentElement))

      currentElement--

      tempValue = newArray[randomNo]
      newArray[randomNo] = newArray[currentElement]
      newArray[currentElement] = tempValue
    }
    return newArray
  }

  handCard () {

  }

  createDeck () {
    const suits = ['♥', '♠', '♣', '♦']
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

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
