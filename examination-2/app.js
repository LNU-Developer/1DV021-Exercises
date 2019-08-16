'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player.js')

let deck = new Deck()

let deck2 = deck.createDeck()

console.log(deck2)
console.log(deck2.length)

deck2 = deck.shuffleDeck()

console.log(deck2)
console.log(deck2.length)

let player = new Player(deck2)

console.log(player.giveHand())
