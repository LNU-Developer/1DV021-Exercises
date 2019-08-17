'use strict'

const Deck = require('./src/Deck')
const Player = require('./src/Player.js')
const Dealer = require('./src/Dealer.js')

let deck = new Deck()

let newDeck = deck.createDeck()
newDeck = deck.shuffleDeck()
const playerCount = 5

for (let i = 0; i < playerCount; i++) {
  let player = new Player(newDeck, i + 1, 15)

  let playerScore = player.giveHand()

  if (playerScore.sum > 21) {
    console.log(`${player.scoreMessage()}(${playerScore.sum}) BUSTED!`)
    console.log('Dealer: -')
    console.log('Dealer wins!' + '\n')
  } else if (playerScore.pickedCards === 5) {
    console.log(`${player.scoreMessage()}(${playerScore.sum})`)
    console.log('Dealer: -')
    console.log('Player wins!' + '\n')
  } else if (playerScore.sum === 21) {
    console.log(`${player.scoreMessage()}(${playerScore.sum})`)
    console.log('Dealer: -')
    console.log('Player wins!' + '\n')
  } else {
    let dealer = new Dealer(newDeck, 1, playerScore.sum)
    let dealerScore = dealer.giveHand()
    if (dealerScore.sum > 21) {
      console.log(`${player.scoreMessage()}(${playerScore.sum})`)
      console.log(`${dealer.scoreMessage()}(${dealerScore.sum}) BUSTED!`)
      console.log('Player wins!' + '\n')
    } else if (dealerScore.sum >= playerScore.sum) {
      console.log(`${player.scoreMessage()}(${playerScore.sum})`)
      console.log(`${dealer.scoreMessage()}(${dealerScore.sum})`)
      console.log('Dealer wins!' + '\n')
    } else if (dealerScore.sum < playerScore.sum) {
      console.log(`${player.scoreMessage()}(${playerScore.sum})`)
      console.log(`${dealer.scoreMessage()}(${dealerScore.sum})`)
      console.log('Player wins!' + '\n')
    }
  }
}
