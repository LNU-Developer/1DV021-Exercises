'use strict'

const Deck = require('./Deck')

class Player extends Deck { // Inheritance of deck to use Deck functions in this module.
  constructor (deck, count, preference) {
    super() // No properties to inherit
    this.deck = deck
    this.count = count
    this.preference = preference
  }

  giveHand () {
    let sum = 0
    let card
    let countA = 0
    let pickedCards = 0
    this.message = ''
    let currentHand = []
    do {
      if (this.deck.length <= 1) {
        this.deck.splice(0, 1) // Remove the remaining card from the deck
        this.deck = this.createDeck() // Creates a new deck
        for (let i = 0; i < this.deck.length; i++) {
          for (let y = 0; y < currentHand.length; y++) {
            if (currentHand[y].suit === this.deck[i].suit && currentHand[y].value === this.deck[i].value) { // Remove current hand from deck, these have already been dealt.
              this.deck.splice(i, 1)
            }
          }
        }
        this.deck = this.shuffleDeck() // Reshuffles the deck
      } else {
        card = this.giveCard()

        currentHand[pickedCards] = card // Holds the current hand in cards (if the deck runs out of cards, the suit and value on hand needs to be kept in order to recreate the deck without them)
        pickedCards++

        this.message += `${card.suit}${card.value} `

        if (card.value === 'A') {
          countA++
          if (sum > 7) {
            sum += 1
            countA--
          } else {
            sum += 14
          }
        } else if (card.value === 'J') {
          sum += 11
        } else if (card.value === 'Q') {
          sum += 12
        } else if (card.value === 'K') {
          sum += 13
        } else {
          sum += card.value
        }

        if (sum > 21 && countA > 0) { // If I have an ace on hand and get a sum larger than 21, the Ace gets converted to value 1.
          while (countA > 0 && sum > 21) {
            sum = sum - 13
            countA--
          }
        }
      }
    } while (sum < this.preference && pickedCards < 5) // Gives out cards according to value preferences or until I have 5 cards on hand
    return { sum, pickedCards }
  }

  scoreMessage () {
    return `Player #${this.count}: ${this.message}`
  }
}

module.exports = Player
