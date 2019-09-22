'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player')
const Dealer = require('./src/Dealer')

let deck = new Deck() // Creating a deck of cards

let newDeck = deck.createDeck() // Array to hold a deck of cards, used by each player and dealer
newDeck = deck.shuffleDeck() // Shuffled deck according to Fisher-Yates Shuffle

const playerCount = 52 // Total number of players playing
const playerPreference = 15 // Player preferences (changing this number will result in stopping pulling cards earlier or later)

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
