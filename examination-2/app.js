'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player')
const Dealer = require('./src/Dealer')

let deck = new Deck()

let newDeck = deck.createDeck()
newDeck = deck.shuffleDeck()
const playerCount = 5
let player = []
let firstCard = []

for (let i = 0; i < playerCount; i++) {
  player[i] = new Player(newDeck, i + 1, 15)
  firstCard[i] = player[i].giveCard()
  console.log(firstCard[i])
}

for (let x = 0; x < playerCount; x++) {
  let playerScore = player[x].giveHand(firstCard[x])

  if (playerScore.sum > 21) {
    console.log(`${player[x].scoreMessage()}(${playerScore.sum}) BUSTED!\nDealer: -\nDealer wins!\n`)
  } else if (playerScore.cardCount === 5) {
    console.log(`${player[x].scoreMessage()}(${playerScore.sum})\nDealer: -\nPlayer wins!\n`)
  } else if (playerScore.sum === 21) {
    console.log(`${player[x].scoreMessage()}(${playerScore.sum})\nDealer: -\nPlayer wins!\n`)
  } else {
    let dealer = new Dealer(newDeck, playerScore.sum)
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
