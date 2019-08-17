'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player.js')
const Dealer = require('./src/Dealer.js')

let deck = new Deck()

let deck2 = deck.createDeck()

deck2 = deck.shuffleDeck()
console.log(deck2)
console.log(deck2.length)
let player = new Player(deck2, 1, 15)

let playerMessage = player.giveHand()

console.log(`${player.playerTurn()}${playerMessage.message} (${playerMessage.sum})`)

console.log(deck2)
console.log(deck2.length)

let dealer = new Dealer(deck2, 1, 18)
let dealerMessage = dealer.giveHand()

console.log(`${dealer.playerTurn()}${dealerMessage.message} (${dealerMessage.sum})`)
console.log(deck2)
console.log(deck2.length)
