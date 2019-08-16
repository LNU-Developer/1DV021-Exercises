'use strict'

const Deck = require('./src/Deck')

let deck = new Deck()

let deck2 = deck.createDeck()

console.log(deck2)
console.log(deck2.length)

deck2 = deck.shuffleDeck()

console.log(deck2)
console.log(deck2.length)

let card = deck.handCard()

console.log(card)

console.log(deck2)
console.log(deck2.length)
