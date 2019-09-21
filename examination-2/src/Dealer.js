'use strict'

const Player = require('./Player')

class Dealer extends Player { // Dealer is actually a player, and thus inherit players properties
  constructor (deck, preference) {
    super(deck, preference, preference) // Properties being inhertiet, all except count (there is only one Dealer)
  }
  giveHand () {
    let sum = 0
    let newCard
    let pickedCards = 0
    let currentHand = []
    this.message = ''
    do {
      // if (this.deck.length <= 1) {
      // this.deck.splice(0, 1) // Remove the remaining card from the deck
      // this.deck = this.createDeck() // Creates a new deck
      // for (let i = 0; i < this.deck.length; i++) {
      //   for (let y = 0; y < currentHand.length; y++) {
      //     if (currentHand[y].suit === this.deck[i].suit && currentHand[y].value === this.deck[i].value) { // Remove current hand from deck, these have already been dealt.
      //       this.deck.splice(i, 1)
      //     }
      //   }
      // }
      // this.deck = this.shuffleDeck() // Reshuffles the deck
      // } else {
      newCard = this.giveCard()
      currentHand[pickedCards] = newCard.card // Holds the current hand in cards (if the deck runs out of cards, the suit and value on hand needs to be kept in order to recreate the deck without them)
      pickedCards++
      this.message += `${newCard.card.suit}${newCard.card.value} `

      sum += newCard.value
      while (newCard.countA > 0 && sum > 21) { // If I have an ace on hand and get a sum larger than 21, the Ace gets converted to value 1.
        sum = sum - 13
        newCard.countA = newCard.countA - 1
        // }
      }
    } while (sum < this.preference && pickedCards < 5) // Gives out cards according to value preferences or until I have 5 cards on hand
    return { sum, pickedCards }
  }
  scoreMessage () {
    return `Dealer: ${this.message}` // scoreMessage overrides the method in the Player module.
  }
}
module.exports = Dealer
