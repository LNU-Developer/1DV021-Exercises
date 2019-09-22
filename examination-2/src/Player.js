'use strict'

const Deck = require('./Deck')

class Player extends Deck { // Inheritance of deck to use Deck functions in this module.
  constructor (deck, count, preference, usedCards) {
    super() // No properties to inherit
    this.deck = deck
    this.count = count
    this.preference = preference
    this.usedCards = usedCards
  }

  giveHand (firstCard) {
    console.log(this.constructor.name)
    console.log(this.deck.length)
    let newCard
    let sum = 0
    let countOfA = 0
    let pickedCards = 0
    this.message = ''
    let currentHand = []

    if (firstCard !== undefined) {
      sum = firstCard.value
      countOfA = firstCard.countA
      currentHand[0] = firstCard.card
      console.log(currentHand[0])
      pickedCards = 1 // One card has already been given, and thus we start with pickedCards = 1
      this.message = `${firstCard.card.suit}${firstCard.card.value} `
    }

    do {
      this.checkRemainingDeck()

      newCard = this.giveCard()

      currentHand[pickedCards] = newCard.card
      console.log(currentHand[pickedCards])
      countOfA = countOfA + newCard.countA
      pickedCards++
      this.message += `${newCard.card.suit}${newCard.card.value} `
      sum += newCard.value

      while (countOfA > 0 && sum > 21) { // If I have an ace on hand and get a sum larger than 21, the Ace gets converted to value 1.
        sum = sum - 13
        countOfA = countOfA - 1
      }
    } while (sum < this.preference && pickedCards < 5) // Gives out cards according to value preferences or until I have 5 cards on hand
    console.log(this.deck)
    console.log(this.usedCards)

    if (!(this.deck.length === 1 && this.constructor.name === 'Player')) {
      for (let y = 0; y < pickedCards; y++) {
        this.usedCards.push(currentHand[y])
      }
    }

    return { sum, pickedCards }
  }

  scoreMessage () {
    return `Player #${this.count}: ${this.message}`
  }
}

module.exports = Player
