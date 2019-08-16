'use strict'

const Deck = require('./src/Deck')

const deck = new Deck()

const deck2 = deck.createDeck()

let deck3 = deck.shuffleDeck(deck2)

console.log(deck3)
