/**
 * Module for creating players and dealing hands of cards
 *
 * @author Rickard Marjanovic
 * @version 1.0.0
 */

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
    let newCard
    let sum = 0
    let countOfA = 0
    let pickedCards = 0
    this.message = ''
    let currentHand = []

    // If it's a player a card will already be given, this card is added to hand.
    if (firstCard !== undefined) {
      sum = firstCard.value
      countOfA = firstCard.countA
      currentHand[0] = firstCard.card
      pickedCards = 1 // One card has already been given, and thus we start with pickedCards = 1
      this.message = `${firstCard.card.suit}${firstCard.card.value} `
    }

    do {
      // Run check function
      this.checkRemainingDeck()

      // Give a new card on hand
      newCard = this.giveCard()

      // Give card to hand and count the aces, add sum to score
      currentHand[pickedCards] = newCard.card
      countOfA = countOfA + newCard.countA
      pickedCards++
      this.message += `${newCard.card.suit}${newCard.card.value} `
      sum += newCard.value

      // If I have an ace on hand and get a sum larger than 21, the Ace gets converted to value 1.
      while (countOfA > 0 && sum > 21) {
        sum = sum - 13
        countOfA = countOfA - 1
      }
    } while (sum < this.preference && pickedCards < 5) // Gives out cards according to value preferences or until I have 5 cards on hand

    // If the deck length is 1 and it's the players turn this would mean the hand cant be pushed to used cards, since the dealer needs to get cards first
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
