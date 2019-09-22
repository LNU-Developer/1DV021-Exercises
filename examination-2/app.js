/**
 * The starting point of the application.
 *
 * @author Rickard Marjanovic
 * @version 1.0.0
 */

'use strict'

// Using different modules in the applications
const Deck = require('./src/Deck')
const Player = require('./src/Player')
const Dealer = require('./src/Dealer')

let deck = new Deck() // Creating a deck of cards

let newDeck = deck.createDeck() // Array to hold a deck of cards, used by each player and dealer
newDeck = deck.shuffleDeck() // Shuffled deck according to Fisher-Yates Shuffle

const playerCount = 43 // Total number of players playing
const playerPreference = 21 // Player preferences (changing this number will result in stopping pulling cards earlier or later)

// A maximum of 43 players is set, since this is the maximum amount of cards that can be dealt. 43 initial cards, 4 more cards to player (one card alreadt dealt) and 5 cards to dealer (total 52)
try {
  if (typeof playerCount !== 'number' || playerCount > 43 || playerCount <= 1 || playerCount === Infinity || isNaN(playerCount)) {
    throw new Error(`The playerCount (currently ${playerCount}) must be a defined number between 1-43.`)
  } else if (typeof playerPreference !== 'number' || playerPreference > 21 || playerCount <= 1 || playerPreference === Infinity || isNaN(playerPreference)) {
    throw new Error(`Player preference (currently ${playerPreference}) must be a defined number between 1-21.`)
  } else {
    let player = [] // Array to hold references for all players
    let firstCard = [] // Array to hold the first cards dealt to each player
    let usedCards = [] // Array to hold used cards

    // Giving one card to each player
    for (let i = 0; i < playerCount; i++) {
      player[i] = new Player(newDeck, i + 1, playerPreference, usedCards)
      firstCard[i] = player[i].giveCard()
    }

    // Giving hands and calculating/printing scoring
    for (let x = 0; x < playerCount; x++) {
      let playerScore = player[x].giveHand(firstCard[x])
      if (playerScore.sum > 21) {
        console.log(`${player[x].scoreMessage()}(${playerScore.sum}) BUSTED!\nDealer: -\nDealer wins!\n`)
      } else if (playerScore.cardCount === 5) {
        console.log(`${player[x].scoreMessage()}(${playerScore.sum})\nDealer: -\nPlayer wins!\n`)
      } else if (playerScore.sum === 21) {
        console.log(`${player[x].scoreMessage()}(${playerScore.sum})\nDealer: -\nPlayer wins!\n`)
      } else {
        let dealer = new Dealer(newDeck, playerScore.sum, usedCards)
        let dealerScore = dealer.giveHand()
        if (dealerScore.sum > 21) {
          console.log(`${player[x].scoreMessage()}(${playerScore.sum})\n${dealer.scoreMessage()}(${dealerScore.sum}) BUSTED!\nPlayer wins!\n`)
        } else if (dealerScore.sum >= playerScore.sum) {
          console.log(`${player[x].scoreMessage()}(${playerScore.sum})\n${dealer.scoreMessage()}(${dealerScore.sum})\nDealer wins!\n`)
        } else if (dealerScore.sum < playerScore.sum) {
          console.log(`${player[x].scoreMessage()}(${playerScore.sum})\n${dealer.scoreMessage()}(${dealerScore.sum})\nPlayer wins!\n`)
        }
      }
    }
  }
} catch (e) {
  console.error(e.message)
}
