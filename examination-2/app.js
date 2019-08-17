'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player.js')
const Dealer = require('./src/Dealer.js')

let deck = new Deck()

let newDeck = deck.createDeck()
newDeck = deck.shuffleDeck()
const playerCount = 6

for (let i = 0; i < playerCount; i++) {
  let player = new Player(newDeck, i + 1, 15)
  let playerMessage = player.giveHand()

  let dealer = new Dealer(newDeck, 1, playerMessage.sum)
  let dealerMessage = dealer.giveHand()

  console.log(`${player.playerTurn()}${playerMessage.message}(${playerMessage.sum})`)
  console.log(`${dealer.playerTurn()}${dealerMessage.message}(${dealerMessage.sum})`)
}
